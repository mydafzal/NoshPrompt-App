/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Spacer from '../components/Spacer';
const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>noshPrompt</Text>
        <Spacer top={20} />
        <Text style={styles.text}>Please enter your email and password!</Text>
      </View>
      <View style={{paddingVertical: 50}}>
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            backgroundColor: '#F2F2F2',
            borderRadius: 50,
            width: 350,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 40,
              width: 40,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              left: 20,
            }}>
            <Image
              source={require('../icons/images/user.png')}
              style={{height: 20, width: 20}}
            />
          </View>
          <TextInput
            style={{
              height: 55,
              width: 300,
              left: 30,
            }}
            placeholder="Fullname"
          />
        </View>
        <Spacer top={20} />
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            backgroundColor: '#F2F2F2',
            borderRadius: 50,
            width: 350,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 40,
              width: 40,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              left: 20,
            }}>
            <Image
              source={require('../icons/images/email.png')}
              style={{height: 20, width: 20}}
            />
          </View>
          <TextInput
            style={{
              height: 55,
              width: 300,
              left: 30,
            }}
            placeholder="Email"
          />
        </View>
        <Spacer top={20} />
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            backgroundColor: '#F2F2F2',
            borderRadius: 50,
            width: 350,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 40,
              width: 40,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              left: 20,
            }}>
            <Image
              source={require('../icons/images/password.png')}
              style={{height: 20, width: 20}}
            />
          </View>
          <TextInput
            style={{
              height: 55,
              width: 300,
              left: 30,
            }}
            placeholder="Password"
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('DrawerNavigation')}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
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
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
    textAlign: 'center',
  },
  bottomButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 350,
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
