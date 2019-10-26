import React from 'react';
import { View, Text } from 'react-native';

function Chat() {
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
}

Chat.navigationOptions = () => ({
  title: 'Chat',
});

export default Chat;
