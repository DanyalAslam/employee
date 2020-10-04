import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text,
    TouchableOpacity

} from 'react-native';
import memoizeOne from 'memoize-one';

// import { TouchableOpacity } from 'react-native-gesture-handler';

// // import { Surface, ART, Shape, Path,Text } from '@react-native-community/art';
// // import { VERSION } from 'lodash';

class Home extends Component {
    constructor (props) 
    {
        super(props)
        this.state = {
            counterone : 0,
            countertwo :0
        }
    }

    onIncrement = () => {
        console.log('called');
        this.setState({counterone:this.state.counterone +1})
    }
    onIncrementtwo = () => {
        console.log('called');
        this.setState({countertwo:this.state.countertwo +1})
    }
    isEven = () => {
        console.log('called isEven');
        return this.state.counterone %2 == 0
    }

    //  add = (a = 1, b = 2) => a + b;
    memoizedAdd = memoizeOne(this.isEven);

    render()
    {
        console.log('the data in memoize is',this.memoizedAdd());
        return (
            <View style={{justifyContent:"center",alignContent:"center",flex:1}}> 
                <TouchableOpacity
                onPress={this.onIncrement}
                >
        <Text>Count 1 - {this.state.counterone} {this.memoizeOne() ? 'Even' : 'odd'} </Text>
                </TouchableOpacity>
                {/* <Text>{this.memoizedAdd()
                }</Text> */}


<TouchableOpacity
                onPress={this.onIncrementtwo}
                >
        <Text>Count 2 - {this.state.countertwo} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (<View style={{ backgroundColor: '#8e9eab', height: '100%', width: '100%' }}>
//             <View style={{ backgroundColor: 'white', height: '30%', borderBottomEndRadius: 300,justifyContent:"center",alignItems:"center"}}>

//                 <Image
//                     style={{ height: 150, width: 200}}
//                     resizeMode="contain"
//                     source={require('../src/assets/icons/businessman.png')}

//                 />

//             </View>


//             <View style={{ justifyContent: "center", alignItems: "center", width: '100%', height: '50%', backgroundColor: '#8e9eab' }}>
//                 <TouchableOpacity
//                 onPress={() =>{this.props.navigation.navigate('LoginForm')}}

//                 >
//                     <View style={{ backgroundColor: 'red', padding: 15, borderRadius: 10, margin: 10 }}>
//                         <Text style={{ color: 'white' }}>Admin/Ceo Login</Text>
//                     </View>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//              onPress={() =>{this.props.navigation.navigate('LoginForm')}}
//                 >
//                     <View style={{ backgroundColor: 'red', paddingVertical: 15, borderRadius: 10,paddingHorizontal:18.5 }}>
//                         <Text style={{ color: 'white' }}>Employee Login</Text>
//                     </View>
//                 </TouchableOpacity>
//             </View>


//         </View>

//         )
//     }
// }

export default Home

