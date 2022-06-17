import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo3} from '../../assets/illustrations';
import {Button, Gap, Input} from '../../components';
import Link from '../../components/atoms/Link';
import {ScrollView} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={{alignItems: 'center'}}>
        <Gap height={40} />
        <ILLogo3 />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          Enter and Shop with a large selection of shoes
        </Text>
        <Input label="Email" />
        <Gap height={10} />
        <Input label="Password" />
        <Gap height={10} />
        <Link title="Forgot Password" size={12} />
        <Gap height={40} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={30} />
        <Link title="Create New Account" size={16} align="center" />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#F9F9F9',
    flex: 1,
    flexDirection: '',
  },
  title: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 40,
    color: '#354259',
  },
});
