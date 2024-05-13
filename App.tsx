/**
 * App
 */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {ApolloProvider} from '@apollo/client';
import {apolloClient} from './src/common/config/apollo-client';
import HomeStackNavigator from './src/navigation/homeStackNavigator';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <View style={styles.container}>
        <NavigationContainer>
          <HomeStackNavigator />
        </NavigationContainer>
      </View>
    </ApolloProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
