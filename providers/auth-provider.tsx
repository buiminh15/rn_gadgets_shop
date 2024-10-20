import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";

type User = {
  avatar_url: string;
  created_at: string | null;
  email: string;
  expo_notification_token: string | null;
  id: string;
  stripe_customer_id: string | null;
  type: string | null;
} | null;

type AuthData = {
  session: Session | null;
  mounting: boolean;
  user: User;
};

const AuthContext = createContext<AuthData>({
  session: null,
  mounting: true,
  user: null,
});

export default function AuthProvider({ children }: Readonly<PropsWithChildren>) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User>(null);
  const [mounting, setMounting] = useState(true);

  const authValue = useMemo(() => ({
    session,
    user,
    mounting,
  }), [session, user, mounting]);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);

      if (session) {
        const { data: user, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error('error', error);
        } else {
          setUser(user);
        }
      }

      setMounting(false);
    };

    fetchSession();
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={authValue}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);