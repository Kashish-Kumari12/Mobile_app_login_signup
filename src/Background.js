import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
export const Background=({children})=>{
    return (
        <View>
            <ImageBackground source={require('../assets/1.png')} style={{height: '100%'}}/>
            <View style={{position:'absolute'}}>
                {children}
            </View>
        </View>
    )
}
export const Background1=({children})=>{
    return (
        <View>
            <ImageBackground source={require('../assets/3.png')} style={{height: '100%'}}/>
            <View style={{position:'absolute'}}>
                {children}
            </View>
        </View>
    )
}

