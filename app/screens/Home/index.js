import React from 'react';
import { View, Text } from 'react-native';
import styles from '@styles';
import { Icon } from '@components';

const icons = {
  menu: {
    type: 'Entypo',
    name: 'menu',
    size: 30,
    style: styles.marginLeftL,
  },
  fire: {
    type: 'FontAwesome5',
    name: 'fire',
    size: 23,
    style: styles.marginRightL,
  },
};

function Home() {
  return (
    <View>
      <Text>
        {
          'Home s\n s\n s\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\nss\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\ns\nns\ns\ns\ns\ns\ns\ns\ns\n'
        }
      </Text>
    </View>
  );
}

Home.navigationOptions = () => ({
  title: 'Rodman',
  headerTitleAlign: 'center',
  headerLeft: <Icon {...icons.menu} />,
  headerRight: <Icon {...icons.fire} />,
  headerStyle: styles.header,
});

export default Home;
