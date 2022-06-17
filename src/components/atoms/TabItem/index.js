import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IcHome,
  IcHomeActive,
  IcMessages,
  IcMessagesActive,
  IcProfileActive,
  IcProfiletab,
} from '../../../assets/icon';
import Gap from '../Gap';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IcHomeActive /> : <IcHome />;
    }
    if (title === 'Chat') {
      return active ? <IcMessagesActive /> : <IcMessages />;
    }
    if (title === 'Profile') {
      return active ? <IcProfileActive /> : <IcProfiletab />;
    }

    return <IcHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Gap height={7} />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  text: active => ({
    fontSize: 10,
    color: active ? 'white' : 'black',
    textAlign: 'center',
  }),
});
