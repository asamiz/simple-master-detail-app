import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MAIN_ROUTES } from './routes';
import styles from './styles';
import { COLORS } from 'theme';
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
      <Screen
        options={{
          headerStyle: styles.userScreenHeader,
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: '',
          headerTintColor: COLORS.text,
        }}
        name={MAIN_ROUTES.user.name}
        component={MAIN_ROUTES.user.component}
      />
    </Navigator>
  );
};

export default MainStack;
