import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { persistCache } from 'apollo3-cache-persist';

import Loader from '../components/Loader/Loader';
import MainStackNavigator from './MainStackNavigator';
import navigationRef from './RootNavigation';

function AppNavigator() {
  const [loadingCache, setLoadingCache] = useState(true);
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    uri: 'https://api.marvelapp.com/graphql/',
    cache,
    headers: {
      Authorization: 'Bearer {{paste token from: https://marvelapp.com/oauth/devtoken}}',
      'Content-Type': 'application/json',
    },
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  });

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);

  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <NavigationContainer ref={navigationRef}>
          {loadingCache ? <Loader /> : <MainStackNavigator /> }
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
