import {View, Text} from 'react-native';
import React from 'react';
import SignIn from '../screens/homeScreen/SignIn';
import SignUp from '../screens/homeScreen/SignUp';
import Home from '../screens/homeScreen/Home';
import BottomTab from './BottomTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
