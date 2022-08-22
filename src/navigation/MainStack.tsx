import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MAIN_ROUTES } from './routes';
import styles from './styles';
import { MainStackParamList } from 'types';

const { Screen, Navigator } = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Navigator
      initialRouteName={MAIN_ROUTES.home.name}
      screenOptions={{
        contentStyle: styles.content,
      }}
    >
      <Screen
        options={{
          header: () => null,
        }}
        name={MAIN_ROUTES.home.name}
        component={MAIN_ROUTES.home.component}
      />
    </Navigator>
  );
};

export default MainStack;
