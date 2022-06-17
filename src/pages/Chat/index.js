import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListChat} from '../../components';

const Chat = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Inbox Messages</Text>
        <ListChat onPress={() => navigation.navigate('Chatting')} />
        <ListChat />
        <ListChat />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#0779FF',
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    marginLeft: 16,
  },
});
