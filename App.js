import React, { Component } from 'react';
import { ScrollView, Text, Image, StyleSheet, View, TouchableOpacity,Modal } from 'react-native';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen'
import InputField from "./Components/InputField";
import CreateEmployee from './screens/CreateEmployee';
import EmployeeProfile from './screens/EmployeeProfile';
import splash from './screens/splash'
import SignupForm from './screens/SignupForm'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// Your web app's Firebase configuration



const Stack = createStackNavigator();
const headerObject={
    headerTintColor:"white",
    headerStyle:{
        backgroundColor:"red",
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    }
}

function App() {    
        return (
            <View style={styles.parentContainer}>
                <Stack.Navigator 
                initialRouteName="SignupForm"
                >
                <Stack.Screen name="Home"
                 component={Home}
                 options={headerObject}
                />
                        <Stack.Screen name="SignupForm" component={SignupForm} options={headerObject} />
                <Stack.Screen name="CreateEmployee" component={CreateEmployee} options={headerObject} />
   
                <Stack.Screen name="splash" component={splash} options={headerObject} />
                <Stack.Screen name="LoginScre122en" component={LoginScreen} options={headerObject} />
                <Stack.Screen name="Employee Profile" component={EmployeeProfile} options={headerObject} />
               
                </Stack.Navigator>
            </View>
        );
    
}
export default()=>{
  
    return(
        <NavigationContainer>
            <App/>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create(
    {
        parentContainer:
        {
            flex: 1,
             backgroundColor: 'white',
        },
        childContainer1:
        {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'red',
            alignItems: 'center',

        },
        childContainer2:
        {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row-reverse',
            backgroundColor: 'yellow',
        },
        childContainer3:
        {
            flex: 4,
            backgroundColor: 'blue',
        },
        childContainer4:
        {
            flex: 1,
            backgroundColor: 'green',
        },
        childContainer5:
        {
            flex: 1,
            backgroundColor: 'orange',
        },
        childContainer6:
        {
            flex: 1,
            backgroundColor: 'brown',
        },
        childOfChild1:
        {
            height: 50,
            width: 50,
            backgroundColor: 'white',
            margin: 5,
        },
        childOfChild2:
        {
            height: 50,
            width: 50,
            backgroundColor: 'white',
            margin: 5,
        },
        childOfChild3:
        {
            height: 50,
            width: 50,
            backgroundColor: 'white',
            margin: 5,
        },
        childOfChild4:
        {
            height: 50,
            width: 50,
            backgroundColor: 'white',
            margin: 5,
        }
    });
