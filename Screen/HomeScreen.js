import React, { Component ,useState,useEffect} from 'react'

import {NavigationContainer,StackActions, NavigationActions} from '@react-navigation/native'

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

// function UserAuth(props) {
//     // Set an initializing state whilst Firebase connects
//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();
  

//     // Handle user state changes
//     function onAuthStateChanged(user) {
//       setUser(user);
//       if (initializing) setInitializing(false);
//     }
  
//     useEffect(() => {
//       const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//       return subscriber; // unsubscribe on unmount
//     }, []);
  
//     if (initializing) return null;
  
//     if (!user) {
//       props.nav.push("Login");
//     }
  
//     return (
//       <View>
//         <Text>Welcome {user.email}</Text>
//         <Button onPress={()=>signOut(props.nav)} title="Sign Out"></Button>
//       </View>
//     );
//   }

// const signOut =(navigation)=>{
//     try {
//         auth()
//           .signOut()
//           .then(() => {
//             const resetAction = StackActions.reset({
//               index: 0,
//               actions: [NavigationActions.navigate({ routeName: "Login" })],
//             });
//             return navigation.dispatch(resetAction);
//             //console.log("You have signed out");
//           });
//       } catch (error) {
//         console.log("err", error);
//       }

// }

const HomeScreen =({navigation})=>{
    return (
        // <UserAuth nav={navigation}/>
        <View style={styles.container}>
            
            <ScrollView>
                <View style={[styles.header,{marginHorizontal:30,flexDirection:'row'}]}>
                    <Icon style={{marginRight:30,marginLeft:7}} size={30} name="compass"/>
                    <Text style={styles.screenTitle}>Discover</Text>
                    <Icon2 style={{marginLeft:150}} size={30} name="notifications"/>
                </View>
                <View style={{marginHorizontal:30}}>
                    <TouchableOpacity style={styles.workout} onPress={()=>navigation.push("Detail")}>
                        <Image style={styles.image} source={require('./images/workout/yoga.jpg')}/>
                        <View style={styles.blurEffect}>

                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.difficulty}>Level : Beginner</Text>
                            <Text style={styles.textWorkoutTitle}>YOGA</Text>
                            <Text style={styles.instructor}>by Karen Michelle</Text>
                            <Text style={styles.weeks}>6 Weeks</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.workout} onPress={()=>navigation.push("Detail")}>
                        <Image style={styles.image} source={require('./images/workout/yoga.jpg')}/>
                        <View style={styles.blurEffect}>

                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.difficulty}>Level : Beginner</Text>
                            <Text style={styles.textWorkoutTitle}>YOGA</Text>
                            <Text style={styles.instructor}>by Karen Michelle</Text>
                            <Text style={styles.weeks}>6 Weeks</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.workout} onPress={()=>navigation.push("Detail")}>
                    <Image style={styles.image} source={require('./images/workout/yoga.jpg')}/>
                        <View style={styles.blurEffect}>

                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.difficulty}>Level : Beginner</Text>
                            <Text style={styles.textWorkoutTitle}>YOGA</Text>
                            <Text style={styles.instructor}>by Karen Michelle</Text>
                            <Text style={styles.weeks}>6 Weeks</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.workout} onPress={()=>navigation.push("Detail")}>
                    <Image style={styles.image} source={require('./images/workout/yoga.jpg')}/>
                        <View style={styles.blurEffect}>

                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.difficulty}>Level : Beginner</Text>
                            <Text style={styles.textWorkoutTitle}>YOGA</Text>
                            <Text style={styles.instructor}>by Karen Michelle</Text>
                            <Text style={styles.weeks}>6 Weeks</Text>
                        </View>
                    </TouchableOpacity>
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
    },workout:{
        height:500,
        alignItems:'center'
        ,overflow:'hidden',
        borderRadius:16 ,
        marginBottom:40
    },image:{
        flex: 1,
        resizeMode: 'contain',
    },textContainer:{
        position:'absolute',
        flex:1,
        bottom:0,
        marginBottom:100,
        left:0,
        alignItems:'flex-end',
        marginLeft:50
    },textWorkoutTitle:{
        color:'white',
        fontSize:60,
        fontWeight:'bold'
    },instructor:{
        color:'white',
        fontSize:16,
        marginTop:-10
    },weeks:{
        color:'white',
        fontSize:17,
        fontWeight:'bold'
    },blurEffect:{
        flex:1,
        borderWidth:1,
        width:900,
        backgroundColor:'black',
        opacity:0.5,
        position:'absolute',
        height:1000
    },difficulty:{
        color:'white',
        marginBottom:-15,
        marginRight:3,
        fontSize:15
    },screenTitle:{
        fontSize:20,
        fontWeight:'bold',
    }
  });
export default HomeScreen
