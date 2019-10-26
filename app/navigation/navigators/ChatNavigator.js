import { createStackNavigator } from 'react-navigation-stack';
import { screens } from '@constants';
import { ChatScreen } from '@screens';
import styles from '@styles';

export default createStackNavigator(
  {
    [screens.Chat]: ChatScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: styles.headerTitle,
      headerStyle: styles.header,
      headerTitleAlign: 'center',
    },
  },
);
