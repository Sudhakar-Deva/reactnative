import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Button,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SignIn from './SignIn';

// Navigation wprks

function Home({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.background}
        source={require('/Users/softsuave/Documents/study/navigation/NavigationProject/src/Images/bearBackground.jpg')}>
        <View>
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require('/Users/softsuave/Documents/study/navigation/NavigationProject/src/Images/SiginInLogo.png')}
            />
            <Text style={{color: 'black', fontSize: 25, paddingTop: 10}}>
              Your Story.Everywhere.
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.ButtonSignIn}
              onPress={() => {
                console.log('Sign In');
                navigation.navigate('SignIn');
              }}>
              <Text
                style={{color: '#007AFF', fontSize: 20, fontWeight: 'bold'}}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.ButtonSignup}
              onPress={() => {
                console.log('Sign Up');
                navigation.navigate('SignUp');
              }}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
export default Home;
const styles = StyleSheet.create({
  background: {
    height: '100%',
    // width: '100%',
    //justifyContent: 'center',

    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: '75%',
    //marginHorizontal: '',
  },
  tinyLogo: {
    height: 120,
    width: 120,
    borderRadius: 75,
  },
  Button: {
    marginBottom: 10,
    //padding: 30,
    color: 'black',
    borderRadius: 50,
  },
  ButtonSignIn: {
    backgroundColor: 'white',
    height: 50,
    //width: 300,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  ButtonSignup: {
    backgroundColor: '#007AFF',
    height: 50,
    //width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
