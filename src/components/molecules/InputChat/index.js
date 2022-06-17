import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Button from '../../atoms/Button';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis Pesan Untuk Store Shoes sport"
      />
      <Button />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row'},
  input: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    // fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
