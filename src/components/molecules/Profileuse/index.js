import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconRemovePhoto, S1, Userphoto} from '../../../assets';

const Profileuse = ({name, desc, isRemove, photo}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.borderProfile}>
          <Image source={Userphoto} style={styles.avatar} />
          {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
        </View>
        {name && (
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.profession}>{desc}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Profileuse;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    marginTop: 2,
    textAlign: 'center',
  },
  removePhoto: {position: 'absolute', right: 8, bottom: 8},
});
