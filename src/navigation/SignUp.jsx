import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {useState} from 'react';
import Profile from '../screens/Profile';

const SignUp = ({navigation}) => {
  //replace to the signup
  const Sign_up = () => {
    if (Name) {
      navigation.replace('app', {username: Name});
      console.log({Name});
    } else {
      Alert.alert('Invalid access');
    }
  };
  //textInput
  const [Name, setName] = useState('');
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <ImageBackground
        style={styles.background}
        source={require('/Users/softsuave/Documents/study/navigation/NavigationProject/src/Images/bearBackground.jpg')}>
        <View>
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require('/Users/softsuave/Documents/study/navigation/NavigationProject/src/Images/SiginInLogo.png')}
            />
            <Text style={{fontSize: 40}}>PRANOS</Text>
          </View>
          <View // blue line view
            style={{
              height: 40,
              width: '100%',
              backgroundColor: '#007AFF',
            }}></View>

          <View style={styles.input}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 35,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Create New Account
            </Text>
            <TextInput
              style={styles.text}
              placeholder="Enter your name"
              value={Name}
              onChangeText={setName}
            />
            <TextInput style={styles.text} placeholder="Enter Your Email" />
            <TextInput style={styles.text} placeholder="Create password" />
            <TextInput style={styles.text} placeholder="Confirm password" />
            <TouchableOpacity style={styles.ButtonLogin} onPress={Sign_up}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                SIGNUP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 50,
    flexDirection: 'row',
    //marginHorizontal: '',
  },
  tinyLogo: {
    backgroundColor: 'gray',
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  input: {
    marginTop: 25,
    //padding: 30,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 20,
    //textAlign: 'center',
    backgroundColor: 'white',
    marginVertical: 20,
    width: '100%',
    borderRadius: 10,
  },
  ButtonLogin: {
    backgroundColor: '#007AFF',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
});
