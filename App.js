/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component,useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import {NavigationContainer,StackActions, NavigationActions} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStore} from 'redux'
import {Provider} from "react-redux"
import Login from './Screen/LoginScreen'
import Register from './Screen/RegisterScreen'
import Home from './Screen/HomeScreen'
import Detail from './Screen/DetailScreen'
import Profile from './Screen/ProfileScreen'

const AuthStack = createStackNavigator()

import auth from '@react-native-firebase/auth';

const botNav = createBottomTabNavigator()
const drawer = createDrawerNavigator()


const detailStack = () =>(
  <AuthStack.Navigator screenOptions={{headerShown: false}} >
    <AuthStack.Screen name="Home"
          component={Home}/>
    <AuthStack.Screen name="Detail"
          component={Detail}/>
  </AuthStack.Navigator>
)

const drawerScreen = ()=>(
  <drawer.Navigator >
    <drawer.Screen name="Home"
          component={detailStack}
          backBehavior={'none'}/>
    <drawer.Screen name="Profile"
          component={Profile}/>
  </drawer.Navigator>
)


export default class App extends Component  {
  render() {
    return (
     // <LoginApp/>
      // <View>
      //   <App123/>
      //   <Button title="Create user" onPress={LoginApp}/>
      //   <Button title="SignOut" onPress={logOff}/>
      // </View>
      <NavigationContainer>
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name="Login" 
            component={Login}
            initialParams={{ Email: '',password:'' }}/>
          <AuthStack.Screen name="Register"
          component={Register}/>
          <AuthStack.Screen name="drawer"
          component={drawerScreen}/>
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

