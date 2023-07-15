import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homepage from '../screens/Homepage';
import CreatePrompt from '../screens/CreatePrompt';
import {navigationRef} from './NavigationRef';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator ref={navigationRef}>
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
              }}
              onPress={() => navigationRef.navigate('CreatePrompt')}>
              <Text style={{color: 'white'}}>Create</Text>
            </Pressable>
          ),
        }}
        name="Home"
        component={Homepage}
      />
      <Drawer.Screen
        options={{
          headerTitle: 'Create Prompt',
        }}
        name="CreatePrompt"
        component={CreatePrompt}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
