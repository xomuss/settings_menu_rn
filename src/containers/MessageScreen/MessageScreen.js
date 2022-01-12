import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AccordionList from '../../components/AccordionList';

function MessageScreen() {
  return (
    <View style={styles.container}>
      <AccordionList title={'List Item'}>
        <Text>Some body text!</Text>
      </AccordionList>
    </View>
  );
}

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
    paddingTop: '5%',
    justifyContent: 'center',
  },
});
