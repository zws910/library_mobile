import React from 'react';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from './src/Screen/Home';
import Mine from './src/Screen/Mine';
import Album from './src/Screen/Album';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, size}) => {
    let iconColor, iconName;
    if (route.name === '首页') {
      iconColor = focused ? '#f74094' : '#212529';
      iconName = 'home';
    } else if (route.name === '相册') {
      iconColor = focused ? '#f74094' : '#212529';
      iconName = 'image';
    } else if (route.name === '我') {
      iconColor = focused ? '#f74094' : '#212529';
      iconName = 'user';
    }
    return <Icon name={iconName} size={size} color={iconColor} />;
  },
});

const tabBarOptions = {
  activeTintColor: '#f74094',
  inactiveTintColor: '#212529',
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}>
        <Tab.Screen name="首页" component={Home} />
        <Tab.Screen name="相册" component={Album} />
        <Tab.Screen name="我" component={Mine} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
