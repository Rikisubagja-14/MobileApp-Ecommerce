import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import {Button, Gap, Input} from '../../components';
const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack('GetStarted')}
        title="Account Registerd"
      />

      <View style={styles.content}>
        <Gap height={30} />
        <Input label="FullName" />
        <Gap height={24} />
        <Input label="Phone" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={24} />
        <Button
          type="secondary"
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: 'white',
  },
});
