import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Home = () => {
  return (
    <View>
      <ThemedText>Home</ThemedText>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20
  },
  flatListColumn: {
    justifyContent: 'space-between'
  }
});