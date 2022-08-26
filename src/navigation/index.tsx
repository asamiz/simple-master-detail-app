import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import MainStack from './MainStack';
import styles from './styles';
import { showToast } from 'utils';

const RootNavigator = () => {
  const { isConnected } = useNetInfo();

  const isInternetReachable = useMemo(
    () => (isConnected === null ? true : isConnected),
    [isConnected],
  );

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    if (!isInternetReachable) {
      showToast({ type: 'error', message: 'Unable to connect' });
    }
  }, [isInternetReachable]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        staleTime: Infinity,
        networkMode: 'offlineFirst',
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.safeAreaContainer}>
            <MainStack />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default RootNavigator;
