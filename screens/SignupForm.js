import React, { Component, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Input, Button } from '../Components/common'
// import { connect } from 'react-redux'
// import { emailChanged, passwordChanged, loginUser } from '../actions/index'
// import Header from './Header'

class SignupForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            Loading: false,
        }
    }



    onLoginPress = () => {
  
        this.setState({ Loading: true })

        fetch("http://10.0.2.2:3000/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                email: this.state.email,
                password: this.state.password
            })


        })
            .then(updatedDate => updatedDate.json())
            .then(jsonResp => {
                this.setState({ Loading: false })
                //Toas Message + Navigation
            })
            .catch(er => {
                this.setState({ Loading: false })
            })


    }



    render() {


        return <View style={{ height: '100%', width: '100%', backgroundColor: '#989DA0' }}>


            <View style={{ height: '30%', alignItems: "center" }}>

                <Image
                    style={{ height: 150, width: 200, marginTop: 10 }}
                    resizeMode="contain"
                    source={require('../src/assets/icons/businessman.png')}

                />

            </View>
            <View style={{ height: '20%', paddingHorizontal: 20 }}>
                <View>
                    <Text style={{ fontSize: 20 }}>Proceed with your</Text>
                    <Text style={{ fontStyle: 'bold' }}>Signup</Text>
                </View>

            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Input
                    label="Email:"
                    placeholder="email@gmail.com"
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                />
                <Input
                    label="Password:"
                    placeholder="Password"
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                />


                {this.state.Loading ?
                    <ActivityIndicator size="large" color="#0000ff" />
                    :
                    <TouchableOpacity
                    onPress={() => this.onLoginPress()}
                    style={{ flexDirection: "row", backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, width: '40%', alignContent: "center", justifyContent: "center", alignSelf: "center", marginTop: 10 }}
                >
                    <View style={{ alignSelf: "center", marginRight: 5 }}>
                        <Image
                            style={{ height: 15, width: 15 }}
                            resizeMode="contain"
                            source={require('../src/assets/icons/upload.png')}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, color: 'white' }}>Signup</Text>
                    </View>

                </TouchableOpacity>


                }


            
            </View>

        </View>
    }
}

export default SignupForm 