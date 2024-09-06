import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Gallery = () => {
  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();
  const openLibrary = async () => {
    const result = await launchImageLibrary(camImg);
    setGalleryPhoto(result.assets[0].uri);
  };
  //Camera Images

  let camImg = {
    SaveToPhoto: true,
    mediatype: 'photo',
  };
  const openCamera = async () => {
    //alert('open camera');
    const perGrand = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (perGrand === PermissionsAndroid.RESULTS.GRANTED) {
      const result = launchCamera(camImg);
      setCameraPhoto(result.assets[1].uri);
    }
  };
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
            <TouchableOpacity onPress={openLibrary}>
              <Text>Upload from library</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openCamera}>
              <Text style={{color: 'red'}}>Open Camera</Text>
            </TouchableOpacity>
            <Image source={{uri: galleryPhoto}} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 10,
    flexDirection: 'row',
    //marginHorizontal: '',
    borderBottomWidth: 0.5,
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
