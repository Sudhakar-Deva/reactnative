import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {iconCollor} from '../../screens/homeScreen/SignUp';

const OtherOptions = () => {
  return (
    <View>
      <View style={styles.touchicons}>
        <TouchableOpacity>
          <Icon
            name="facebook"
            size={40}
            style={
              iconCollor.SignIn != null ? iconCollor.SignIn : iconCollor.SignUp
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="instagram" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="twitter" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherOptions;

const styles = StyleSheet.create({
  touchicons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //borderTopWidth: 1,
    //borderTopColor: 'white',
    padding: 30,
  },
});
