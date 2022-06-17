import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text} from 'react-native';

const Link = ({title, size, align, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: '#1F4690',

    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
