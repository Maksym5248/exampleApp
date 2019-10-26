import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { screens } from '@constants';
import { ChatScreen, HomeScreen, JobScreen } from '@screens';
import styles, { colors } from '@styles';
import { TabBarIcon } from '@components';

const icons = {
  [screens.Chat]: 'chat',
  [screens.Home]: 'home-variant',
  [screens.Job]: 'briefcase',
};

const TabNavigator = createBottomTabNavigator(
  {
    [screens.Chat]: ChatScreen,
    [screens.Home]: HomeScreen,
    [screens.Job]: JobScreen,
  },
  {
    initialRouteName: screens.Home,
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.inert,
      showLabel: false,
      style: styles.tabBar,
    },
    lazy: true,
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        return (
          <TabBarIcon
            name={icons[routeName]}
            color={tintColor}
            focused={focused}
          />
        );
      },
    }),
  },
);

export default TabNavigator;
