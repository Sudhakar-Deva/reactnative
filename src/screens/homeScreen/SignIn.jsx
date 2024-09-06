import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
const SignIn = ({navigation}) => {
  const Sign_In = () => {
    navigation.replace('BottomTab');
  };
  return (
    <View>
      <ImageBackground
        style={styles.background}
        source={require('/Users/softsuave/Documents/study/navigation/NavigationProject/src/Images/background2.jpeg')}>
        <View>
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require('/Users/softsuave/Documents/study/navigation/NavigationProject/src/Images/SiginInLogo.png')}
            />
          </View>
          <Text style={{textAlign: 'center', fontSize: 25, color: 'white'}}>
            WELCOME BACK
          </Text>
          <View style={styles.input}>
            <TextInput style={styles.text} placeholder="Enter Your Email" />
            <TextInput style={styles.text} placeholder="Enter Your password" />
            <TouchableOpacity>
              <Text style={{color: 'white', textAlign: 'right'}}>
                Forgot password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonLogin} onPress={Sign_In}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
              Or Login with
            </Text>
            <Text style={{textAlign: 'center', color: 'white'}}>
              ────────────────────────────
            </Text>
            <View>
            <TouchableOpacity style={styles.ButtonLogin} onPress={Sign_In}>
              <Image/>

              <Image/>
                
              <Image/>
            </TouchableOpacity>
            </View>
          </View> */}
          <View>
            <Text style={styles.OtherOptiontext}>Or Login With</Text>
          </View>
          <View>
            <View style={styles.touchicons}>
              <TouchableOpacity>
                <Icon name="facebook" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="instagram" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="twitter" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  background: {
    height: 1000,
    // width: '100%',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 50,
    //marginHorizontal: '',
  },
  tinyLogo: {
    backgroundColor: 'gray',
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  input: {
    marginTop: 50,
    padding: 30,
  },
  text: {
    fontSize: 20,
    //textAlign: 'center',
    backgroundColor: 'white',
    marginVertical: 20,
    width: 300,
    borderRadius: 10,
  },
  touch: {
    backgroundColor: '#007AFF',
  },
  ButtonLogin: {
    backgroundColor: '#007AFF',
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  OtherOptiontext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 15,
  },
  touchicons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //borderTopWidth: 1,
    //borderTopColor: 'white',
    padding: 30,
  },
});
