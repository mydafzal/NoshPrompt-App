import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homepage from '../screens/Homepage';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{
          headerTitle: 'Nosh Prompt',
          headerTintColor: 'black',
          headerRight: () => (
            <Pressable
              style={{
                borderColor: 'black',
                backgroundColor: 'black',
                borderWidth: 1,
                borderRadius: 10,
                padding: 5,
                marginRight: 10,
              }}>
              <Text style={{color: 'white'}}>Create</Text>
            </Pressable>
          ),
        }}
        name="Home"
        component={Homepage}
      />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
