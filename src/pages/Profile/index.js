import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, List, Profileuse} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <Gap height={20} />
      <Profileuse />
      <Gap height={14} />
      <List
        name="Edit profile"
        desc="update yesterday"
        type="next"
        icon="edit-profile"
      />
      <List
        name="Language"
        desc="update yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Rate"
        desc="update yesterday"
        type="next"
        icon="rate-edit-profile"
      />
      <List name="Setting" desc="Go to setting" type="next" icon="center" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
});
