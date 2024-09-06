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
  Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {dataUser} from '../../AppConfig/redux/Actions/profileActions';
import Icon from 'react-native-vector-icons/Feather';
import {iconCollor} from '../../screens/homeScreen/SignUp';

const SignUp = ({navigation}) => {
  //replace to the signup
  const dispatch = useDispatch();
  const Sign_up = () => {
    navigation.replace('BottomTab');
  };
  //textInput
  const [inputData, setInputData] = useState({
    name: '',
    Email: '',
    password: '',
  });
  const inputDataHandle = (key, value) => {
    console.log(key, value);
    setInputData({
      ...inputData, // Keep existing input data
      [key]: value, // Update specific field
    });
  };

  // Function to save data to AsyncStorage
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(inputData));
      AsyncStorage.setItem('isSignedUp', JSON.stringify(true));
      console.log(JSON.stringify(inputData));
      Alert.alert('Success', 'Data saved successfully!');
      dispatch(dataUser(inputData));
      Sign_up();
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  // Function to handle form submission

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
              value={inputData.name}
              onChangeText={text => inputDataHandle('name', text)}
            />
            <TextInput
              style={styles.text}
              placeholder="Enter Your Email"
              value={inputData.Email}
              onChangeText={text => inputDataHandle('Email', text)}
            />
            <TextInput
              style={styles.text}
              placeholder="Create password"
              value={inputData.password}
              onChangeText={text => inputDataHandle('password', text)}
            />
            <TextInput style={styles.text} placeholder="Confirm password" />
            <TouchableOpacity style={styles.ButtonLogin} onPress={saveData}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                SIGNUP
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{textAlign: 'center', fontSize: 18, marginTop: 10}}>
              Sign Up with
            </Text>
            <View style={styles.touchicons}>
              <TouchableOpacity>
                <Icon name="facebook" size={40} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="instagram" size={40} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="twitter" size={40} color="black" />
              </TouchableOpacity>
            </View>
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
    //marginHorizontal: 25,
    paddingVertical: 30,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomWidth: 1,
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
  touchicons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //borderTopWidth: 1,
    //borderTopColor: 'white',
    padding: 30,
  },
});
