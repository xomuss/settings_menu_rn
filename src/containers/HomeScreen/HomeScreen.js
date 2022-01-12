import React from 'react';
import {Button, Text, View} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default HomeScreen;
