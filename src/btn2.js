import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';

function Btn2({btnLabel, Press}){
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
                marginLeft: 75,
                marginVertical: 10,
                paddingHorizontal:20
                
            }}>
                <Text style={{color:"white", fontSize: 22, fontWeight: "bold"}}>
                 {btnLabel}
                </Text>

            </TouchableOpacity>
        </View>
    )
}
export default Btn2;
