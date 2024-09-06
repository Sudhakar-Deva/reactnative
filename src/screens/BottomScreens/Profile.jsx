import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Feather';
import Iconn from 'react-native-vector-icons/MaterialIcons';
import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {Library} from '../../AppConfig/redux/Actions/profileActions';
import SiginInLogo from '../../Images/SiginInLogo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  // const [Photo, setPhoto] = useState();
  let camImg = {
    SaveToPhoto: true,
    mediaType: 'photo',
  };
  const openLibrary = async () => {
    const res = await launchImageLibrary(camImg);
    console.log('res', res);
    // setPhoto(res.assets[0].uri);
    // const userData = {Photo};
    dispatch(Library(res.assets[0].uri));
  };
  //retrive the data from the redux
  const user = useSelector(state => state.picture.user);
  console.log('user', user);
  // let userImag;
  // if (user === null) {
  //   userImag =
  //     '/Users/softsuave/Documents/study/navigation/NavigationProject/src/Images/SiginInLogo.png';
  // } else {
  //   userImag = user.Photo;
  // }
  const [userData, setUserData] = useState({
    name: '',
    Email: '',
  });
  const reduxUser = useSelector(state => state.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData'); // Retrieve user data from AsyncStorage
        console.log('Stored User Data:', storedUserData); // Log it here after retrieval
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData)); // Parse and set the user data
        } else {
          console.log('No data found in AsyncStorage');
        }
      } catch (error) {
        console.error('Failed to fetch user data from AsyncStorage', error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
      }}>
      <View style={{height: '100%'}}>
        <View
          style={{
            height: '45%',
            margin: 15,
          }}>
          <View style={styles.button}>
            <TouchableOpacity>
              <Icons name="arrow-left" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: 'red'}}>LOG OUT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logo}>
            <TouchableOpacity onPress={openLibrary}>
              <Image
                style={styles.tinyLogo}
                //source={require('/Users/softsuave/Documents/study/navigation/NavigationProject/src/Images/SiginInLogo.png')}
                //source={{uri: Photo}}
                source={user ? {uri: user} : SiginInLogo}
              />
            </TouchableOpacity>

            <View style={{width: '65%'}}>
              <Text style={{fontSize: 35}}>My Profile</Text>
              <Text style={{fontSize: 20}}>jessica White</Text>
            </View>
          </View>
          {/* <View  style={styles.container}>
          <View style={styles.contentcontainer1}>
            <Text style={styles.txt}>Username:</Text>
            <Text style={styles.txt}>Email : </Text>
            <Text style={styles.txt}>Gender : </Text>
          </View>
          <View style={styles.contentcontainer2}>
            <Text style={styles.value}>My profile</Text>
            <Text style={styles.value}>user12345@hmail.com</Text>
          </View>
          </View> */}
          {/* details screen */}
          <View style={styles.details}>
            <View style={styles.container}>
              <Text style={styles.text}>Username:</Text>
              {/* <TextInput style={styles.textInput} placeholder="username" /> */}
              <Text style={styles.textInput}>{userData.name}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.text}>Email</Text>
              {/* <TextInput style={styles.textInput} placeholder="Email" /> */}
              <Text style={styles.textInput}>{userData.Email}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.text}>Gender:</Text>
              <TextInput style={styles.textInput} placeholder="male" />
            </View>
          </View>
        </View>
        <View style={styles.search}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Search</Text>
          <Icons name="search" size={25} color="black" />
        </View>
        <View style={styles.navigationButtons}>
          <TouchableOpacity style={styles.textnavigation}>
            <Icon name="bell-outline" size={25} color="black" />
            <Text style={styles.navtext}>Notification Preference</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textnavigation}>
            <Icons name="smile" size={25} color="black" />
            <Text style={styles.navtext}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textnavigation}>
            <Icons name="cast" size={25} color="black" />
            <Text style={styles.navtext}>Screen Cast Management</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textnavigation}>
            <Iconn name="payment" size={25} color="black" />
            <Text style={styles.navtext}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textnavigation}>
            <Icons name="help-circle" size={25} color="black" />
            <Text style={styles.navtext}>Help</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  tinyLogo: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    borderRadius: 50,
    //marginLeft: 10,
  },
  details: {
    marginTop: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'black',
    width: '30%',
    fontSize: 20,
  },
  textInput: {
    color: 'black',
    width: '70%',
    borderWidth: 0.5,
    fontSize: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //margin: 20,
    alignItems: 'center',
    padding: 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    //width,
  },
  navigationButtons: {
    //flexDirection: 'colum',
    //borderWidth: 1,
    //marginHorizontal: 20,
    marginHorizontal: 10,
  },
  textnavigation: {
    //padding: 15,
    marginTop: 40,
    flexDirection: 'row',
  },
  navtext: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  // container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginHorizontal: 10,
  //   marginTop: 30,
  // },
  // contentcontainer1: {
  //   width: '30%',
  //   flexDirection: 'colum',
  //   //alignItems: 'center',
  //   justifyContent: 'space-between',
  //   marginBottom: 50,
  // },
  // contentcontainer2: {
  //   width: '70%',
  //   flexDirection: 'colum',
  //   //alignItems: 'center',
  //   marginBottom: 50,
  // },
  // value: {
  //   fontSize: 20,
  //   margin: 12,
  //   borderWidth: 0.5,
  //   color: 'black',
  // },
  // txt: {
  //   fontSize: 20,
  //   margin: 12,
  //   color: 'black',
  // },
});
