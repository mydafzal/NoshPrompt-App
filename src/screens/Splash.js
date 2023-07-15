/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Spacer from '../components/Spacer';
const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/NoshLogo.png')}
          style={{width: 250, height: 200}}
        />
        <Text style={styles.heading}>Nosh Prompt</Text>
        <Spacer top={20} />
        <Text style={styles.text}>Unleash Limitless Possibilities</Text>
      </View>

      <View style={{bottom: 40, position: 'absolute'}}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get Started!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c1ece4',
  },
  logoContainer: {
    top: 100,
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  bottomButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 300,
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
