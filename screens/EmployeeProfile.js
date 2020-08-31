import React, { Component } from 'react';
import { ScrollView, Text, Image, StyleSheet, View,Platform, TouchableOpacity, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const EmployeeProfile = (props) => {
    
    const { _id, name, phone, salary, position, picture, email } = props.route.params.item
    console.log(_id);


    const deleteEmployee = () => {
        console.log("Deleted pressed")
        fetch("http://10.0.2.2:3000/delete",{
            method:"post",
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify({
                id : _id
            })
        })
        // .then(res => res.json())
        .then(deletedEmployee => {
           //Toas message aega
           props.navigation.navigate('Home')
        })
        .catch(err => {
            console.log('something went wrong',err);
        })
    
    }

    const openDial = () => {
        console.log('Called Right');
        if(Platform.OS === "android")
        {
            Linking.openURL("tel: 1233")

        }
        else
        {
            Linking.openURL("telprompt: 1233")

        }

    
    }
    
    return (

        <View style={styles.root}>
            <LinearGradient
                colors={['red', 'white']}
                style={{ height: "25%" }}
            />
            <View style={styles.pictureView}>
                <Image
                    style={{ width: 150, height: 150, borderRadius: 150 / 2, marginTop: -65, }}
                    source={{ uri: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80' }}
                />
            </View>
            <View style={styles.DescriptionView}>
                <Title style={{ fontSize: 25 }}>{name}</Title>

                <Text style={{ fontSize: 14 }}>{position}</Text>
            </View>

            {/* card 1 */}
            <Card style={styles.mycard}
            onPress={() =>{
                Linking.openURL("mailto:abc@gmail.com")
            }}
            >
                <LinearGradient
                    colors={['red', 'white']}
                    style={{ borderRadius: 15 }}
                >
                    <View style={styles.cardContent}>
                        <Image
                            style={{ height: 20, width: 20,marginRight:10 }}
                            resizeMode="contain"
                            source={require('../src/assets/icons/mail.png')}
                        />
                        <Text style={styles.myText}>{email}</Text>
                    </View>
                </LinearGradient>
            </Card>


            {/* Card 2 */}
            <Card style={styles.mycard}
            onPress={() => openDial()

            }
            >
                <LinearGradient
                    colors={['red', 'white']}
                    style={{ borderRadius: 12 }}
                >
                    <View style={styles.cardContent}>
                    <Image
                            style={{ height: 20, width: 20,marginRight:10 }}
                            resizeMode="contain"
                            source={require('../src/assets/icons/phone.png')}
                        />
                        <Text style={styles.myText}>{phone}</Text>
                    </View>
                </LinearGradient>
            </Card>

            <Card style={styles.mycard}>
                <LinearGradient
                    colors={['red', 'white']}
                    style={{ borderRadius: 15 }}
                >
                    <View style={styles.cardContent}>
                    <Image
                            style={{ height: 20, width: 20,marginRight:10 }}
                            resizeMode="contain"
                            source={require('../src/assets/icons/salary.png')}
                        />
                        <Text style={styles.myText}>{salary}</Text>
                    </View>
                </LinearGradient>
            </Card>
            <View style={{ flexDirection: "row", justifyContent: "space-around", margin: 10 }}>


            <TouchableOpacity
          onPress={() => {
              props.navigation.navigate('CreateEmployee',
              { _id, name, phone, salary, position, picture, email }
              )
          }}
          style={{ flexDirection: "row", backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, width: '40%', alignContent: "center", justifyContent: "center", alignSelf: "center", marginTop: 10 }}
        >
          <View style={{ alignSelf: "center", marginRight: 5 }}>
            <Image
              style={{ height: 15, width: 15 }}
              resizeMode="contain"
              source={require('../src/assets/icons/edit.png')}
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, color: 'white' }}>Update</Text>
          </View>

        </TouchableOpacity>

         

        <TouchableOpacity
          onPress={() => deleteEmployee()}
          style={{ flexDirection: "row", backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, width: '40%', alignContent: "center", justifyContent: "center", alignSelf: "center", marginTop: 10 }}
        >
          <View style={{ alignSelf: "center", marginRight: 5 }}>
            <Image
              style={{ height: 15, width: 15 }}
              resizeMode="contain"
              source={require('../src/assets/icons/delete.png')}
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, color: 'white' }}>Delete</Text>
          </View>

        </TouchableOpacity>


            </View>




        </View>
    )
}

const theme = {
    colors: {

        primary: 'red',
        accent: 'red',

    },
}


const styles = StyleSheet.create({
    root:
    {
        flex: 1,
        backgroundColor: '#8e9eab'

    },
    pictureView:
    {
        alignItems: "center",


    },
    DescriptionView:
    {
        alignItems: "center",
    },
    mycard:
    {
        borderRadius: 15,
        margin: 10,


    },
    cardContent:
    {
        padding: 8,
        flexDirection: "row",
        // justifyContent:"center",
        alignItems: "center"
    },
    myText:
    {
        fontSize: 20,
        marginTop: 0,
    }
})
export default EmployeeProfile;