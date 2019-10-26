import { createStackNavigator } from 'react-navigation-stack';
import { screens } from '@constants';
import { HomeScreen } from '@screens';
import styles from '@styles';

export default createStackNavigator(
  {
    [screens.Home]: HomeScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: styles.headerTitle,
      headerStyle: styles.header,
      headerTitleContainerStyle: styles.center,
      headerTitleAlign: 'center',
    },
  },
);
