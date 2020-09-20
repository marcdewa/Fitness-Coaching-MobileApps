import React, { Component ,useState,useEffect} from 'react'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image, TextInput, TouchableOpacity,Button
  } from 'react-native';

import auth from '@react-native-firebase/auth';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import  Icon2  from 'react-native-vector-icons/MaterialIcons';

const signOut =(navigation)=>{
    auth()
  .signOut()
  .then(() => {
    console.log('signed out!');
    navigation.replace("Login")
  })

}

const HomeScreen =({navigation})=>{
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./images/workout/weightlifting.jpeg')}/>
            <View style={styles.rate}>
                <Icon style={{color:'#FCC419'}} name="star" size={40}/>
                <Text>8/10</Text>
            </View>
            <View style={{marginLeft:20,marginTop:50,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View>
                    <Text style={{fontSize:30,fontWeight:'bold'}} >Weightlifting</Text>
                    <Text style={{marginTop:-3}}>Trained by John Alex</Text>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <View style={styles.category}>
                            <Text>Muscle</Text>
                        </View>
                        <View style={styles.category}>
                            <Text>Cardio</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Icon name="plus" size={30} style={{color:'white'}}/>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:20,marginTop:30}}>
                <Text style={{fontSize:25,marginBottom:10}}>About</Text>
                <Text>
                Weightlifting is a technical, strength/power sport which requires excellent coordination, flexibility, balance, speed and of course strength. It should not be confused with more generalised weight training or with the sports of powerlifting or bodybuilding.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },image:{
        width:400,
        height:330,
        borderBottomLeftRadius:150
    },rate:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        marginTop:290,
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100,
        height:80,
        right:0,
        width:100,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },category:{
        borderRadius:20,
        borderWidth:1,
        padding:5,
        paddingHorizontal:10,
        borderColor:"#434670",
        marginRight:10
    },addButton:{
        backgroundColor:'#FF8A34',
        width:60,
        height:60,
        marginRight:20,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    }
  });
export default HomeScreen
