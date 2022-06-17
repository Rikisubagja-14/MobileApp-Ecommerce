import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
  const [border, setBorder] = useState('#1F4690');
  const onFocusForm = () => {
    setBorder('#1F4690');
  };
  const onBlurForm = () => {
    setBorder('#1F4690');
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: '#1F4690',
    marginBottom: 6,
  },
});
