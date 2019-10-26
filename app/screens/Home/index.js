import React, { memo } from 'react';
import { View, Text } from 'react-native';

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

export default memo(Home);
