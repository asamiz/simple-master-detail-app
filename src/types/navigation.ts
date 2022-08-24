import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ComponentType } from 'react';
import { UserData } from './api';

export type MainStackParamList = {
  HomeScreen: undefined;
  UserScreen: { user: UserData };
};

type MainRoute = {
  name: keyof MainStackParamList;
  title?: string;
  component: ComponentType;
};

export type MainRoutes = {
  home: MainRoute;
  user: MainRoute;
};

// Navigation & Route Prop Types

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'HomeScreen'
>;

export type HomeScreenRouteProp = RouteProp<MainStackParamList, 'HomeScreen'>;

export type UserScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'UserScreen'
>;

export type UserScreenRouteProp = RouteProp<MainStackParamList, 'HomeScreen'>;
