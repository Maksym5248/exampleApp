import { createStackNavigator } from 'react-navigation-stack';
import { screens } from '@constants';
import { JobScreen } from '@screens';
import styles from '@styles';

export default createStackNavigator(
  {
    [screens.Job]: JobScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: styles.headerTitle,
      headerStyle: styles.header,
      headerTitleAlign: 'center',
    },
  },
);
