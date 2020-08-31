import React, {useEffect,useState, Component } from 'react';
import {Text, Image, StyleSheet, View, FlatList, ScrollView, ActivityIndicator} from 'react-native';
import {Card,FAB} from 'react-native-paper'
const Home=(props)=> {
    const[data,setDat] = useState([]) //here is an array
    const[Loading,setLoading] = useState(true)

    const fetchData = () => {
        fetch("http://10.0.2.2:3000/")
        .then(res=>res.json())
        .then(result=>{
            console.log('we received :',result)
            setDat(result)
            setLoading(false)

        })
        console.log('called');

    }
    useEffect(()=>{
       
    },[])
    // const data =[
    //     {_id:"1",Name:"Danyal",Phone:"+92 181206144",Salary:"2,00,00",Position:"React Native Developoer",picture:"https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",email:"Danyal@gmail.com"},
    //     {_id:"2",Name:"Hajra Nisar",Phone:"+92 181206144",Salary:"2,00,00",Position:"React.js Developer",picture:"https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",email:"Hajra@gmail.com"},
    //     {_id:"3",Name:"Shehryar",Phone:"+92 181206144",Salary:"2,00,00",Position:"Flutter Developer",picture:"https://images.unsplash.com/photo-1521027210396-849951a118c9?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",email:"Shehryar@gmail.com"},
    //     {_id:"4",Name:"Hamza",Phone:"+92 181206144",Salary:"2,00,00",Position:"Andro_id App Developer",picture:"https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",email:"Hamza@gmail.com"},
    //     {_id:"5",Name:"Nadia",Phone:"+92 181206144",Salary:"2,00,00",Position:"Nalli Developer",picture:"https://images.unsplash.com/photo-1510832198440-a52376950479?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",email:"Nadia@gmail.com"},
    //     // {_id:"6",Name:"Hur",Position:"Flutter Developer"},
    //     // {_id:"7",Name:"Owais",Position:"Flutter Developer"},
    //     // {_id:"8",Name:"Shahzaib",Position:"Flutter Developer"},
    //     // {_id:"9",Name:"Adnan",Position:"Flutter Developer"},
    //     // {_id:"10",Name:"Noman",Position:"Flutter Developer"},

    // ];
    console.log('The data is',data)
    const RenderList = data.map((item)=>{
        return(
            <Card 
            style ={Style.myCardContainer}
             key={item._id}
             onPress={()=>props.navigation.navigate("Employee Profile",{item})}
            
             >
                <View style={Style.cardView1}>
                    <Image
                        style={{width: 50, height: 50,borderRadius:25}}
                        source={{uri :'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80'}}
                    />
                    <View style={Style.TextStyle}>
                    <Text >Hello From {item.name}</Text>
                    <Text style={Style.TextStylePosition}>{item.position}</Text>
                    </View>
                </View>
            </Card>
        )
    });

 return(
     <View style={{flex:1}}>
         {Loading?
          <ActivityIndicator size="large" color="#0000ff" />
        :
        <ScrollView>
        {RenderList}
        </ScrollView>
        }
        
         <FAB
             style={Style.fab}
             small = {false}
             icon={require('../src/assets/icons/add.png')}
          
             onPress={()=>props.navigation.navigate("CreateEmployee")}
         />

     </View>

 )
};
const Style = StyleSheet.create(
    {
        myCardContainer:
            {
                backgroundColor : '#8e9eab',
                 margin:5,
                padding:5
            },
        cardView1:
            {
                flexDirection:'row',
            },
            TextStyle:
                {
                    margin: 10,

                },
        TextStylePosition:
            {
                fontStyle:'italic',
                fontSize:14,


            },
        fab: {
           position:"absolute",
            margin: 16,
            right: 0,   
            bottom:0,
          
            backgroundColor: 'red',

        },
    }
);

export default Home
