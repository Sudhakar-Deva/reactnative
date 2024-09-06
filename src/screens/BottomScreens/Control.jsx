import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
//import Icon from 'react-native-vector-icons/FontAwesome';

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

export default Control;
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
