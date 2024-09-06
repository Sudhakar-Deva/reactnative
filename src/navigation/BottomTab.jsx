import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Device from '../screens/BottomScreens/Device';
import Gallery from '../screens/BottomScreens/Gallery';
import Profile from '../screens/BottomScreens/Profile';
import Control from '../screens/BottomScreens/Control';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Device"
        component={Device}
        options={{
          tabBarIcon: () => <Icon name="earth" size={30} color="black" />,
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarIcon: () => (
            <Icon name="image-multiple-outline" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Control"
        component={Control}
        options={{
          tabBarIcon: () => (
            <Icon name="home-automation" size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Icon name="account-outline" size={30} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
