import React from 'react'
import {TextInput, View,Text} from 'react-native'

const Input = ({label,value,onChangeText,placeholder}) => {

    const {inputStyle,lableStyle,containerStyle} = styles
    return (
        <View style={containerStyle}>
            <Text style={lableStyle}>{label}</Text>
            <TextInput
            value ={value}
            style = {inputStyle}
            onChangeText = {onChangeText}
            placeholder={placeholder}
            // style ={{height:20,width:'100%'}}
            />
        </View>
    )

}
const styles = {
    inputStyle : {
        color: '#000',
        paddingHorizontal:5,
        fontSize :18,
        width:'70%',
        lineHeight:12,
     
       
         
    },
    lableStyle : {
        fontSize:18,
        // paddingLeft:20,
        width:'30%',
         color:'black',
        //  backgroundColor:'red' 
    },
    containerStyle : 
    {
        height:40,
        width:'100%',
        
        flexDirection:'row',
        alignItems:'center',
      
        borderBottomWidth:1,
        paddingHorizontal:12
        

    }
}
export  {Input} //ask