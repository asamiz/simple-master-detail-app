import { HomeScreen, UserScreen } from 'screens';
import { MainRoutes } from 'types';

export const MAIN_ROUTES: MainRoutes = {
  home: {
    name: 'HomeScreen',
    component: HomeScreen,
  },
  user: {
    name: 'UserScreen',
    component: UserScreen,
  },
};
