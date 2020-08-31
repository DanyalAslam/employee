import React, { Component } from 'react';

import {Text, Image, StyleSheet, View, FlatList, ScrollView,  TouchableHighlight } from 'react-native';
import {Card,FAB} from 'react-native-paper';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const LoginScreen=(props)=>{
    return(
        <View style={Style.MainContainer}>
            <View style={Style.ButtonContainer}>
                <TouchableHighlight style={Style.AdminButtonContainer} onPress={()=>{}}>
                    <View>
                        <Icon >
                            <Text style={Style.ButtonText}>Admin/CEO LogIn</Text>
                        </Icon>
                      </View>
            </TouchableHighlight>

                <TouchableHighlight style={Style.EmployeeButtonContainer} onPress={()=>props.navigation.navigate("CreateEmployee")}>
                    <View>
                        <Icon >
                            <Text style={Style.ButtonText}>Employee LogIn</Text>
                        </Icon>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )

};
const Style = StyleSheet.create({
    MainContainer:
        {
            flex:1,
            backgroundColor : '#8e9eab',

        },
    ButtonContainer:
        {
            flex:1,
            alignItems:'center',
            justifyContent:'center',


        },

    AdminButtonContainer:
        {
            backgroundColor: 'red',
             paddingHorizontal:20,
            paddingVertical:10,
            borderRadius:10,
            margin:10,
        },
    EmployeeButtonContainer:
        {
            backgroundColor: 'red',
            paddingVertical:10,
            paddingHorizontal:28,
            borderRadius:10,
            margin:10,
        },
        ButtonText:
            {
                color: '#ffffff',
                fontWeight: '900',
                fontSize: 18,

            }


});
export default LoginScreen
