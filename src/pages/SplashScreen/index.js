import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets/illustrations';

const SpalshScreen = () => {
  return (
    <View style={styles.backroundsplash}>
      <ILLogo />
      <Text style={styles.colortext}>My Shoes</Text>
    </View>
  );
};

export default SpalshScreen;

const styles = StyleSheet.create({
  backroundsplash: {
    backgroundColor: '#1363DF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colortext: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    marginTop: 20,
  },
});
