import React from 'react'
import { Text,TouchableOpacity,StyleSheet } from 'react-native';
const Button = ({onPress,title}) =>{
    return (
        <TouchableOpacity
        onPress = {onPress}
        style={styles.ButtonStyle}>
        <Text style={styles.TextStyle}>{title}</Text>
        </TouchableOpacity>
    )

}
const styles= StyleSheet.create({
    ButtonStyle : {
        
        alignSelf:'stretch',
        borderRadius :5,
       borderColor :'red',
       borderWidth:1,
       backgroundColor:'red'
    },
    TextStyle : {
            alignSelf:"center",
            fontSize:20,
            fontWeight:'600',
            color:'white',
            paddingVertical:12
            
    }

})

export {Button}
