import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './MainStack';
import styles from './styles';

const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.safeAreaContainer}>
          <MainStack />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
