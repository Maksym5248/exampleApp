import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { screens } from '@constants';
import {
  ChatNavigator,
  HomeNavigator,
  JobNavigator,
} from './navigators';
import styles, { colors } from '@styles';
import { TabBarIcon } from '@components';

const icons = {
  [screens.ChatNavigator]: 'chat',
  [screens.HomeNavigator]: 'home-variant',
  [screens.JobNavigator]: 'briefcase',
};

const TabNavigator = createBottomTabNavigator(
  {
    [screens.ChatNavigator]: ChatNavigator,
    [screens.HomeNavigator]: HomeNavigator,
    [screens.JobNavigator]: JobNavigator,
  },
  {
    initialRouteName: screens.HomeNavigator,
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
