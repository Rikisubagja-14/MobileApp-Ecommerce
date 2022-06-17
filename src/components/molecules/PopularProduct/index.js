import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PopularProduct = ({title, model, price, source}) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.photoproduct} />
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.models}>{model}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default PopularProduct;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#F1F0F2',
    alignSelf: 'flex-start',
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 200,
  },
  photoproduct: {
    height: 45,
    width: 80,
  },
  name: {
    paddingTop: 10,
    fontSize: 10,
    color: '#999999',
    alignSelf: 'flex-start',
  },
  models: {
    fontSize: 14,
    paddingTop: 6,
    color: '#2E2E2E',
  },
  price: {
    paddingTop: 6,
    fontSize: 13,
    color: '#2C96F1',
    alignSelf: 'flex-start',
  },
});
