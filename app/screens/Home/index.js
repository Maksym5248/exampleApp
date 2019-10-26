import React from 'react';
import { View } from 'react-native';
import styles from '@styles';
import { Icon, FlatList } from '@components';

import { Card } from './components';

import mockData from './mockData';

const icons = {
  menu: {
    type: 'Entypo',
    name: 'menu',
    size: 30,
    style: styles.marginLeftM,
  },
  fire: {
    type: 'FontAwesome5',
    name: 'fire',
    size: 23,
    style: styles.marginRightL,
  },
};

const renderItem = ({ item }) => <Card {...item} />; // eslint-disable-line react/prop-types

function Home() {
  return (
    <View style={styles.fillAll}>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        isLoadingRefresh={false}
        contentContainerStyle={[
          styles.paddingHorizontalL,
          styles.paddingTopL,
        ]}
      />
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
