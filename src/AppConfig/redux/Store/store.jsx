import {View, Text} from 'react-native';
import React from 'react';
import {createStore} from 'redux';
import profileRootReducer from '../rootReducer/profileRootReducer';

const store = createStore(profileRootReducer);

export default store;
