import { createBottomTabNavigator } from 'react-navigation-tabs';

import { screens } from '@constants';
import { ChatScreen, HomeScreen, JobScreen } from '@screens';

const TabNavigator = createBottomTabNavigator(
  {
    [screens.Chat]: ChatScreen,
    [screens.Home]: HomeScreen,
    [screens.Job]: JobScreen,
  },
  {
    initialRouteName: screens.Home,
  },
);

export default TabNavigator;
