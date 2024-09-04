import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import BottomTab from '../screens/Control';

const Stack = createNativeStackNavigator();
export default function App() {
  // return <Home />;
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="app" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
//navigation
