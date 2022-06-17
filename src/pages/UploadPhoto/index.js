import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import {ILNullphoto} from '../../assets/illustrations';
import {IcTambah} from '../../assets/icon';
import {Button, Gap} from '../../components';
import Link from '../../components/atoms/Link';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack('Registered')}
        title="Upload Photo"
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarcon}>
            <Image source={ILNullphoto} style={styles.avatar} />
            <IcTambah style={styles.addphoto} />
          </View>
          <Gap height={20} />
          <Text style={styles.name}>Riki Subagja</Text>
        </View>

        <View>
          <Button type="secondary" title="Upload and continue" />
          <Gap height={30} />
          <Link title="Skip for This" align="center" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarcon: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addphoto: {
    position: 'absolute',
    bottom: 8,
    right: 7,
  },
  name: {fontSize: 24, color: 'black', textAlign: 'center'},
  content: {
    paddingHorizontal: 40,
    paddingBottom: 65,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});
