import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Auth = () => {
  return (
    <View>
      <Text>Auth</Text>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    marginBottom: 32,
  },
  input: {
    width: '90%',
    padding: 12,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#6a1b9a',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: '90%',
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
  },
  signUpButtonText: {
    color: '#fff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'left',
    width: '90%',
  },
});
