import React from 'react';
import { View, Text } from 'react-native';

function Job() {
  return (
    <View>
      <Text>Job</Text>
    </View>
  );
}

Job.navigationOptions = () => ({
  title: 'Job',
});

export default Job;
