import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import {ChatItem, Gap, InputChat} from '../../components';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Store Shoes Sport" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem isMe />
        <ChatItem />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  content: {flex: 1},
  page: {backgroundColor: 'white', flex: 1},
  chatDate: {
    fontSize: 14,
    color: 'grey',
    marginVertical: 20,
    textAlign: 'center',
  },
});
