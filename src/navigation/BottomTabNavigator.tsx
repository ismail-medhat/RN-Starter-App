// BottomTabNavigator.tsx

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AccountScreen,
  ChatsScreen,
  HomeScreen,
  MyAdsScreen,
  SellScreen,
} from '../screens';
import ScreenNames from './ScreenNames';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {Colors, ScaleHeight, ScaleWidth} from 'common';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import Icon from 'react-native-vector-icons/Ionicons';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import useToast from '../hooks/useToast';

const Tab = createBottomTabNavigator();

type ISBottomTabsProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const BottomTabNavigator: React.FC<ISBottomTabsProps> = ({navigation}) => {
  const {isLoggedIn} = useSelector((state: RootState) => state.auth);
  const {showErrorToast} = useToast();

  const checkUserIsLoggedIn = () => ({
    tabPress: (e: {preventDefault: () => void}) => {
      if (!isLoggedIn) {
        e.preventDefault();
        showErrorToast('You Must Logged In !');
        navigation.navigate(ScreenNames.Login);
      }
    },
  });

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          return (
            <View>
              <Text
                style={[
                  styles.tabBarName,
                  {color: focused ? Colors.black : Colors.gray2},
                ]}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarIcon: ({focused}) => {
          let IconName;
          if (route.name === 'Home') {
            IconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Chats') {
            IconName = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
          } else if (route.name === 'Sell') {
            IconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'MyAds') {
            IconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Account') {
            IconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={IconName} size={22} />;
        },
        headerShown: false,
        tabBarStyle: [
          styles.tapStyles,
          {
            backgroundColor: Colors.white,
            borderTopColor: Colors.lightGray2,
            borderTopWidth: 0.3,
            borderWidth: 0,
          },
        ],
        tabBarLabelStyle: styles.tabBarLabelStyle,
      })}>
      <Tab.Screen name={ScreenNames.Home} component={HomeScreen} />
      <Tab.Screen
        name={ScreenNames.Chats}
        component={ChatsScreen}
        listeners={() => checkUserIsLoggedIn()}
      />
      <Tab.Screen
        name={ScreenNames.Sell}
        component={SellScreen}
        listeners={() => checkUserIsLoggedIn()}
      />
      <Tab.Screen
        name={ScreenNames.MyAds}
        component={MyAdsScreen}
        listeners={() => checkUserIsLoggedIn()}
      />
      <Tab.Screen name={ScreenNames.Account} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tapStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ScaleHeight(80),
    width: ScaleWidth('100%'),
    borderWidth: 1,
  },
  tabBarItemStyle: {
    top: 15,
    height: 45,
  },
  tabBarLabelStyle: {
    bottom: 10,
  },
  tabBarName: {
    fontSize: 12,
    paddingTop: Platform.OS === 'ios' ? ScaleHeight(2) : 0,
    marginBottom: Platform.OS === 'android' ? ScaleHeight(14) : 0,
  },
});
