import React, { Component, useState, useEffect } from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity, FlatList, ScrollView, YellowBox, Alert, PermissionsAndroid } from 'react-native';
import Modal from 'react-native-modal';
import { TextInput, Button } from 'react-native-paper';

import ImagePicker from 'react-native-image-picker';





// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';


const CreateEmployee = ({ navigation, route }) => {
  console.log('receving while update', route.params);

  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case "name":
          return route.params.name
        case "phone":
          return route.params.phone
        case "email":
          return route.params.email
        case "salary":
          return route.params.salary
        case "picture":
          return route.params.Picture
        case "position":
          return route.params.position
      }

    }
    else
      return ""

  }
  const [Name, setName] = useState(getDetails("name"))
  const [Phone, setPhone] = useState(getDetails("phone"))
  const [Email, setEmail] = useState(getDetails("email"))
  const [Salary, setSalary] = useState(getDetails("salary"))
  const [Position, setPosition] = useState(getDetails("position"))
  const [Picture, setPicture] = useState(getDetails("picture"))
  const [modal, setModal] = useState(false)
  const [saveButton, setSaveButton] = useState(true)




  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };


  const Submit = () => {
    console.log("submit pressed")
    fetch("http://10.0.2.2:3000/send", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: Name,
        email: Email,
        phone: Phone,
        // picture:Picture,
        salary: Salary,
        position: Position
      })

    }).then(res => res.json)
      .then(data => {
        console.log(data)
        Alert.alert(`${data.name}  is saved`)
        navigation.navigate("Home")
      })

  }


  const SubmitUpdate = () => {
    console.log("Update pressed")
    fetch("http://10.0.2.2:3000/update", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id : route.params._id,
        name: Name,
        email: Email,
        phone: Phone,
        // picture:Picture,
        salary: Salary,
        position: Position
      })

    })
    .then(updatedDate => {
      // navigation.navigate("Home")
      console.log('yes right',updatedDate);
    
    })
      // .then(data => {
      //   console.log(data)
      //   Alert.alert(`${data.name}  is updated`)
      //   navigation.navigate("Home")
      // })

  }


  const pickImageHandker = () => {

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log(source);
      }
    });

  }

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        let data = await ImagePicker.launchImageLibrary({

          allowsEditing: true,
        })
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const pickfromGallery = async () => {
    console.log('called Gallery function');

    const { granted } = await PermissionsAndroid.askAsync(PermissionsAndroid.CAMERA_ROLL)
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,


      })
      console.log(data)
    } else {
      Alert.alert("Ask permission to work")
    }
  }
  useEffect(() => {

    // Firebase.collection('asd').doc('asd').set({
    //   asd:'asdasda',
    //   name:'zxczxczxczxczxc'
    // },{merge: true})


  }, [])

  return (
    <View style={Style.parentView}>
      <TextInput
        label='Name'
        mode='outlined'
        theme={theme}
        value={Name}
        onChangeText={text => setName(text)}
      />


      <TextInput
        label='Phone'
        mode='outlined'
        theme={theme}
        value={Phone}
        onChangeText={text => setPhone(text)}
      />

      <TextInput
        label='Email'
        mode='outlined'
        theme={theme}
        value={Email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        label='Position'
        mode='outlined'
        theme={theme}
        value={Position}
        onChangeText={text => setPosition(text)}
      />
      <TextInput
        label='Salary'
        mode='outlined'
        theme={theme}
        value={Salary}
        onChangeText={text => setSalary(text)}
      />


      <View>

        <TouchableOpacity
          onPress={() => setModal(true)}
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
            <Text style={{ fontSize: 15, color: 'white' }}>Upload Image</Text>
          </View>

        </TouchableOpacity>



      {route.params ?   <TouchableOpacity
          onPress={() => SubmitUpdate()}
          style={{ flexDirection: "row", backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, width: '40%', alignContent: "center", justifyContent: "center", alignSelf: "center", marginTop: 10 }}
        >
          <View style={{ alignSelf: "center", marginRight: 5 }}>
            <Image
              style={{ height: 15, width: 15 }}
              resizeMode="contain"
              source={require('../src/assets/icons/save.png')}
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, color: 'white' }}>Update</Text>
          </View>

        </TouchableOpacity> :   <TouchableOpacity
          onPress={() => Submit()}
          style={{ flexDirection: "row", backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, width: '40%', alignContent: "center", justifyContent: "center", alignSelf: "center", marginTop: 10 }}
        >
          <View style={{ alignSelf: "center", marginRight: 5 }}>
            <Image
              style={{ height: 15, width: 15 }}
              resizeMode="contain"
              source={require('../src/assets/icons/save.png')}
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, color: 'white' }}>Save</Text>
          </View>

        </TouchableOpacity>}

      </View>


      {<Modal

        animationType="slide"
        transparent={true}
        visible={modal}


      >
        <View style={Style.modalView}>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>

            <TouchableOpacity
              onPress={() => setModal(false)}
              style={{ flexDirection: "row", backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, width: '80%', alignContent: "center", justifyContent: "center", alignSelf: "center", marginRight: 10, }}
            >
              <View style={{ alignSelf: "center", marginRight: 5 }}>
                <Image
                  style={{ height: 15, width: 15 }}
                  resizeMode="contain"
                  source={require('../src/assets/icons/save.png')}
                />
              </View>
              <View>
                <Text style={{ fontSize: 15, color: 'white' }}>Cancel</Text>
              </View>

            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => pickfromGallery()}
              style={{ flexDirection: "row", backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, width: '80%', alignContent: "center", justifyContent: "center", alignSelf: "center", marginRight: 10 }}
            >
              <View style={{ alignSelf: "center", marginRight: 5 }}>
                <Image
                  style={{ height: 15, width: 15 }}
                  resizeMode="contain"
                  source={require('../src/assets/icons/save.png')}
                />
              </View>
              <View>
                <Text style={{ fontSize: 15, color: 'white' }}>Gallery</Text>
              </View>

            </TouchableOpacity>
          </View>

        </View>
      </Modal>}

    </View>
  )

}
const theme = {
  colors: {
    primary: 'red'
  }
}
const Style = StyleSheet.create({
  parentView:
  {
    flex: 1,
    backgroundColor: '#8e9eab',
    padding: 5
  },
  modalView:
  {
    position: "absolute",
    bottom: 7,
    width: "100%",

  }

})
export default CreateEmployee