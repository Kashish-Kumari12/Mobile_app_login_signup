import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';

function Btn({btnLabel, Press}){
    return (
        <View>
            <TouchableOpacity  
            onPress={Press}
            style={{
                backgroundColor:"dodgerblue",
                borderRadius: 100,
                alignItems: 'center',
                width: 200,
                paddingVertical: 5, 
                justifyContent: 'center',
                marginTop: 470,
                marginLeft: 75,
                marginVertical: 10
                
            }}>
                <Text style={{color: "white", fontSize: 22, fontWeight: "bold"}}>
                 {btnLabel}
                </Text>

            </TouchableOpacity>
        </View>
    )
}
export default Btn;
