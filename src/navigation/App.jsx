import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from '../AppConfig/redux/Store/store';
import BottomTab from './BottomTab';
import StackNavigation from './StackNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  // return <Home />;
  const [issignUp, setIssignUp] = useState(false);
  async function getData() {
    const data = await AsyncStorage.getItem('isSignedUp');
    setIssignUp(data);
  }
  useEffect(() => {
    getData();
  });
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <NavigationContainer>
          {issignUp ? <BottomTab /> : <StackNavigation />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}
//navigation
