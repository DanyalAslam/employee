import React, { Component } from 'react';
import { View, Text } from 'react-native';
const InputField  = (props) => {
    return (
        <View>
            <Text>old name: {props.name}</Text>
    <Text>{props.Text}</Text>
        </View>
    )

};

export default InputField