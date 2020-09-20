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


const HomeScreen =({navigation})=>{
    return (
        <View style={styles.container}>
            <View>
                <View style={{flexDirection:'row',justifyContent:'center'}}> 
                    <View style={styles.backgroundProfile}>
                    </View>
                    <View style={styles.backgroundProfile2}>
                    </View>
                    <View style={styles.backgroundProfile3}>
                    </View>
                    <View style={styles.backgroundProfile4}>
                    </View>
                    <View style={styles.backgroundProfile5}>
                    </View>
                </View>
                <View style={[styles.header,{marginHorizontal:30,flexDirection:'row',position:'absolute'}]}>
                    <Icon style={{marginRight:30,marginLeft:7,color:'#22343C'}}  size={30} name="account"/>
                    <Text style={styles.screenTitle}>Profile</Text>
                </View>
                <View style={{position:'absolute',justifyContent:'center',alignItems:'center',width:392,marginTop:110}}>
                        <Image style={styles.profilePictureContainer} source={require('./images/11.jpg')}/>
                        <Text style={styles.name}>Herbert Gardner</Text>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:395,marginTop:15}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.category}>25</Text>
                                <Text style={styles.value}>Age</Text>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.category}>20</Text>
                                <Text style={styles.value}>BMI</Text>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.category}>180</Text>
                                    <Text style={[styles.value,{alignSelf:'flex-end',marginBottom:5,marginLeft:5}]}>cm</Text>
                                </View>
                                <Text style={styles.value}>Height</Text>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',marginLeft:-10}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.category}>62</Text>
                                    <Text style={[styles.value,{alignSelf:'flex-end',marginBottom:5,marginLeft:5}]}>kg</Text>
                                </View>
                                <Text style={styles.value}>Weight</Text>
                            </View>
                        </View>
                </View>
            </View>
            <ScrollView>
                    <View style={{height:35}}>

                    </View>
                    <View style={styles.activity}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:-90}}>
                            <Image style={styles.activityImage} source={require('./images/workout/yoga.jpg')}/>
                            <View style={{alignItems:'center',marginLeft:15}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Yoga</Text>
                                <Text style={{alignSelf:'flex-end',fontSize:14,fontWeight:'bold'}}>53%</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>
                            <View style={styles.activityDetails}>
                                <Text style={styles.text1}>Total Weeks</Text>
                                <Text style={styles.text2}>6</Text>
                            </View>
                            <View style={styles.activityDetails}>
                                <Text style={styles.text1}>Weeks done</Text>
                                <Text style={styles.text2}>3</Text>
                            </View>
                            <View style={styles.activityDetails}>
                                <Text style={styles.text1}>Achivements</Text>
                                <Text style={styles.text2}>3/11</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.activity}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:-50}}>
                            <Image style={styles.activityImage} source={require('./images/workout/weightlifting.jpeg')}/>
                            <View style={{alignItems:'center',marginLeft:15}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Weightlifting</Text>
                                <Text style={{alignSelf:'flex-end',fontSize:14,fontWeight:'bold'}}>80%</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>
                            <View style={styles.activityDetails}>
                                <Text style={styles.text1}>Total Weeks</Text>
                                <Text style={styles.text2}>10</Text>
                            </View>
                            <View style={styles.activityDetails}>
                                <Text style={styles.text1}>Weeks done</Text>
                                <Text style={styles.text2}>8</Text>
                            </View>
                            <View style={styles.activityDetails}>
                                <Text style={styles.text1}>Achivements</Text>
                                <Text style={styles.text2}>12/17</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.activity}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:-90}}>
                            <Image style={styles.activityImage} source={require('./images/workout/pilates.jpg')}/>
                            <View style={{alignItems:'center',marginLeft:15}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Pilates</Text>
                                <Text style={{alignSelf:'flex-end',fontSize:14,fontWeight:'bold'}}>5%</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>
                            <View style={styles.activityDetails}>
                                <Text style={styles.text1}>Total Weeks</Text>
                                <Text style={styles.text2}>12</Text>
                            </View>
                            <View style={styles.activityDetails}>
                                <Text style={styles.text1}>Weeks done</Text>
                                <Text style={styles.text2}>1</Text>
                            </View>
                            <View style={styles.activityDetails}>
                                <Text style={styles.text1}>Achivements</Text>
                                <Text style={styles.text2}>1/23</Text>
                            </View>
                        </View>
                    </View>
                    
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
     header:{
        height:50,
        marginVertical:25,
        alignItems:'center'
    },screenTitle:{
        fontSize:20,
        fontWeight:'bold'
        ,color:'#624D3B'
    },backgroundProfile:{
        backgroundColor:'#FF8A34',
        height:400,
        width:610,
        borderBottomRightRadius:300,
        borderBottomLeftRadius:300,
        
    },backgroundProfile2:{
        backgroundColor:'white',
        height:200,
        width:200,
        borderRadius:400,
        position:'absolute',
        opacity:0.2,
        left:-60,
        top:-70
    },backgroundProfile3:{
        backgroundColor:'white',
        height:150,
        width:150,
        borderRadius:400,
        position:'absolute',
        opacity:0.2,
        left:50,
        top:-70
    },backgroundProfile4:{
        backgroundColor:'white',
        height:90,
        width:90,
        borderRadius:400,
        position:'absolute',
        opacity:0.2,
        left:160,
        top:-50
    }
    ,backgroundProfile5:{
        backgroundColor:'white',
        height:130,
        width:130,
        borderRadius:400,
        position:'absolute',
        opacity:0.2,
        right:100,
        bottom:147,
        left:147
    }
    ,profilePictureContainer:{
        height:120,
        width:120,
        borderRadius:300,
        marginBottom:8
    },name:{
        color:'#624D3B',
        fontSize:22
    },category:{
        fontSize:22,
        color:'white',
        fontWeight:'bold'
    },value:{
        fontSize:12,
        color:'#624D3B',
        marginTop:2
    },activity:{
        marginHorizontal:30,
        paddingVertical:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
        marginBottom:20
    },activityImage:{
        width:70,
        height:70,
        borderRadius:900
    },activityDetails:{
        alignItems:'center'
    },text1:{
        fontSize:15
    }
    ,text2:{
        fontWeight:'bold'
    }
  });
export default HomeScreen
