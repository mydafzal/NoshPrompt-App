import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('DrawerNavigation')}>
        <Text>Splash</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
