import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Device = () => {
  const [ModelVisible, setModalVisible] = useState(false);
  const devices = ['Pranos1', 'Pranos2', 'Pranos3'];

  // const toggleModal = () => {
  //   setModalVisible(!ModelVisible);
  // };
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
            <TouchableOpacity
              style={styles.buttontext}
              onPress={() => setModalVisible(true)}>
              <Text style={{color: 'white'}}>Connect</Text>
            </TouchableOpacity>

            {/* <Overlay isVisible={Visible} onBackdropPress={toggleModal}>
              <View>
                <Text style={styles.overlayText}>
                  Connect using WiFi network
                </Text>
                <View style={styles.Device}>
                  <View style={styles.availDevice}>
                    <View>
                      <Text style={styles.availText}>Pranos1</Text>
                    </View>
                    <View>
                      <Text style={styles.availText}>Pranos1</Text>
                    </View>
                    <View>
                      <Text style={styles.availText}>Pranos1</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.overlayText}>AvailableDevice</Text>
                <View style={styles.Device}>
                  <View style={styles.availDevice}>
                    <View>
                      <Text style={styles.availText}>Pranos1</Text>
                    </View>
                    <View>
                      <Text style={styles.availText}>Pranos1</Text>
                    </View>
                    <View>
                      <Text style={styles.availText}>Pranos1</Text>
                    </View>
                  </View>
                </View>
                <View></View>
              </View>
            </Overlay> */}
            {/* <Modal
              isVisible={ModelVisible}
              transparent={true}
              animationType="slide"
              style={{zIndex: 999}}>
              <View style={styles.Device}>
                {devices.map((device, index) => (
                  <View key={index}>
                    <Text style={styles.availText}>{device}</Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity
                style={styles.buttontext}
                onPress={() => setModalVisible(false)}>
                <Text style={{color: 'white'}}>Dis Connect</Text>
              </TouchableOpacity>
            </Modal> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Device;

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
  Device: {
    borderWidth: 1,
  },
  overlayText: {
    fontSize: 15,
  },

  availDevice: {
    marginHorizontal: 20,
  },
  availText: {
    fontSize: 20,
  },
});
