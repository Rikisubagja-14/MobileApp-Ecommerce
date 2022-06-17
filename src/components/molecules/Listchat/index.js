import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {S1} from '../../../assets';

const ListChat = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <Image source={S1} style={styles.ava} />
      <View>
        <Text style={styles.title}>Store Shoes Sport</Text>
        <Text style={styles.desc}>Silahkan gan barang ready</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListChat;

const styles = StyleSheet.create({
  ava: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 16,
  },
  content: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#000000',
  },
  desc: {
    fontSize: 12,
    color: '#15133C',
  },
});
