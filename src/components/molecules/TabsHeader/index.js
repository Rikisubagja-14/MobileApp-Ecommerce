import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TabHeader = ({title}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{title}</Text>
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#1363DF',
    bottom: 1,
    height: 30,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    color: 'white',
  },
});
