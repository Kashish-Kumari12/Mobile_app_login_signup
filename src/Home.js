import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {Background} from './Background';

import Btn from './button';
import Btn2 from './btn2';
import {blue, orange} from './Constants';
const Home=(props)=>{
    return (
        <Background>
            <View style={{marginHorizontal: 40, marginVertical: 100}}>
            <Btn btnLabel="Login" bgColor="dodgerblue" textColor="white" Press={()=>
            props.navigation.navigate("Login")
            }/>
            <Btn2 btnLabel="Signup" Press={()=>{props.navigation.navigate("SignupScreen")}}/>
            </View>
        </Background>
    )
}

export default Home;