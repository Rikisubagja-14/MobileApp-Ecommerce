import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Notif, Userphoto} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={Userphoto} style={styles.avatar} />
        <Text style={styles.name}>Riki Subagja</Text>
      </View>

      <Image source={Notif} style={styles.notif} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notif: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginLeft: 10,
  },
  name: {
    fontSize: 19,
    color: 'black',
  },
});
