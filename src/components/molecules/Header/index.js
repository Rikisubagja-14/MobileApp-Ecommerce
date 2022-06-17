import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcBackDark} from '../../../assets/icon';
import Gap from '../../atoms/Gap';

const Header = ({onPress, title, type}) => {
  return (
    <View style={styles.container(type)}>
      <TouchableOpacity onPress={onPress}>
        <IcBackDark />
      </TouchableOpacity>
      <Text style={styles.text(type)}>{title}</Text>
      <Gap height={30} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 25,
    paddingVertical: 30,
    backgroundColor: '#1363DF',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }),
  text: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    color: type === 'dark' ? 'black' : 'black',
  }),
});
