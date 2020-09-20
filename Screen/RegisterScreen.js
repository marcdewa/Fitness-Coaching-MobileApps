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
  Image, TextInput, TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import auth from '@react-native-firebase/auth'

const logOff = ()=>{
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}

const CreateAccount=(navigation,email,password)  =>{
  auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log("Success");
    return (navigation.push("Login"));
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}

const RegisterScreen = ({navigation})=>{
    const [fullName,setFullName] = useState('')  
    const [email,setEmail] = useState('')  
    const [password,setPassword] = useState('')  
    return(
      <View style={styles.container}> 
        <View style={styles.loginContainer}>
          <View style={styles.rectangular}>
          </View>
          <View style={styles.loginDetailContainer}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:42,fontWeight:'bold'}}>Register</Text>
            </View>
            <Text style={{color:'#96A7AF',fontSize:20,marginTop:6}}>Register to continue</Text>
            <View style={{flexDirection:'row',marginTop:40,alignItems:'center'}}>
              <Image source={require('./images/user.png')}/>
              <TextInput style={{fontSize:18,marginLeft:15}} 
                onChangeText={(Value)=>setFullName(Value)}
                value={fullName} 
                placeholder={"Fullname"}/>
            </View>
            <View style={{flexDirection:'row',marginTop:40,alignItems:'center'}}>
              <Image source={require('./images/user.png')}/>
              <TextInput style={{fontSize:18,marginLeft:15}} placeholder={"Username"}
               onChangeText={(Value)=>setEmail(Value)}
               value={email}/>
            </View>
            <View style={{flexDirection:'row',marginTop:40,alignItems:'center',marginBottom:60}}>
              <Image source={require('./images/password.png')}/>
              <TextInput secureTextEntry={true} style={{fontSize:18,marginLeft:15}} placeholder={"Password"}
               onChangeText={(Value)=>setPassword(Value)}
               value={password}/>
            </View>
            
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={styles.button2} activeOpacity={0.8} onPress={() => navigation.push("Login")}>
                  <Icon  size={25} name="keyboard-backspace" style={{color:'white'}}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1} activeOpacity={0.8} onPress={() => CreateAccount(navigation,email,password)} >
                  <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Next</Text>
                  <Icon  size={25} name="keyboard-backspace" style={{transform: [{rotateY: '180deg'}],color:'white',marginLeft:4}}></Icon>
              </TouchableOpacity>
            </View>
      </View>
    );
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  rectangular:{
    backgroundColor:"#FF8A34",
    width:45,
    height:45,
    borderRadius:12
  },
  loginContainer:{
    marginTop:120,
    marginLeft:32
  },
  loginDetailContainer:{
    marginTop:30
  },
  loginText:{

  },
  button1:{
    height:58,
    width:245,
    justifyContent:'center',
    backgroundColor:'#FF8A34',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button2:{
    height:58,
    width:58,
    justifyContent:'center',
    backgroundColor:'#624D3B',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginRight:10
  }
});

export default RegisterScreen