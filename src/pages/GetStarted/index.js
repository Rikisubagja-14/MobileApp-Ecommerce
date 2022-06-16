import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo2} from '../../assets/illustrations';
import {Button} from '../../components';

const GetStated = () => {
  return (
    <View style={styles.page}>
      <ILLogo2 />
      <View>
        <Text style={styles.title}>
          Buying shoes will be easier & more flexible with a large selection of
          models
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <View style={{height: 10}} />
        <Button type="secondary" title="Sign In" />
      </View>
    </View>
  );
};

export default GetStated;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#1363DF',
    padding: 50,
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: 'white',
    marginTop: 10,
  },
});
