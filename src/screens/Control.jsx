import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Device from './Device';
import Gallery from './Gallery';
import Profile from './Profile';
import {SafeAreaView} from 'react-native-safe-area-context';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

const Control = () => {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
      }}>
      <View style={{height: '100%', width: '100%'}}>
        <View style={styles.logo}>
          <Image
            style={styles.tinyLogo}
            source={require('/Users/softsuave/Documents/study/navigation/NavigationProject/src/Images/SiginInLogo.png')}
          />
          <Text style={{fontSize: 40}}>PRANOS</Text>
        </View>
        <View
          style={{
            height: '70%',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              fontWeight: 'bold',
              marginLeft: 20,
            }}>
            My Devices
          </Text>

          <View style={styles.button}>
            <TouchableOpacity style={styles.buttontext}>
              <Text style={{color: 'white'}}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 10,
    flexDirection: 'row',
    //marginHorizontal: '',
    borderWidth: 0.5,
  },
  tinyLogo: {
    backgroundColor: 'gray',
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttontext: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    height: 50,
    width: 300,
    borderRadius: 10,
  },
});

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Device"
        component={Device}
        options={{
          tabBarIcon: () => <Icon name="" size={30} color="black" />,
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarIcon: () => <Icon name="person" size={30} color="black" />,
        }}
      />
      <Tab.Screen
        name="Control"
        component={Control}
        options={{
          tabBarIcon: () => <Icon name="person" size={30} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Icon name="person-rifle" size={30} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
