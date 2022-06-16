import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({type, title}) => {
  return (
    <View style={styles.btncontainer(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btncontainer: type => ({
    backgroundColor: type === 'secondary' ? '#1363DF' : 'white',
    paddingVertical: 20,
    borderRadius: 20,
  }),
  text: type => ({
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: type === 'secondary' ? 'white' : '#1363DF',
  }),
});
