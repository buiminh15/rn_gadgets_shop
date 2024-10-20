import { useAuth } from "@/providers/auth-provider";
import { FontAwesome } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


function TabBarIcon(props: Readonly<{
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}>) {
  return <FontAwesome size={24} {...props} style={{ color: '#1BC464' }} />;
}

function tabBarIcon(props: {
  focused: boolean;
  color: string;
  size: number;
}, name: React.ComponentProps<typeof FontAwesome>['name']) {
  return <TabBarIcon {...props} name={name} />;
}

const TabsLayout = () => {
  const { session, mounting } = useAuth();

  if (mounting) return <ActivityIndicator />;
  if (!session) return <Redirect href='/auth' />;
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea} >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#1BC464',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Shop',
            tabBarIcon: (props) => tabBarIcon(props, 'shopping-cart'),
          }}
        />
        <Tabs.Screen
          name='orders'
          options={{
            title: 'Orders',
            tabBarIcon: (props) => tabBarIcon(props, 'book'),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
})

