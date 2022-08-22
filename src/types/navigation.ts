import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ComponentType } from 'react';

export type MainStackParamList = {
  HomeScreen: undefined;
};

type MainRoute = {
  name: keyof MainStackParamList;
  title?: string;
  component: ComponentType;
};

export type MainRoutes = {
  home: MainRoute;
};

// Navigation & Route Prop Types

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'HomeScreen'
>;

export type HomeScreenRouteProp = RouteProp<MainStackParamList, 'HomeScreen'>;
