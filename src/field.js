import React from 'react'
import { TextInput } from 'react-native';

const Field =props=>{
    return (
        <TextInput
        {...props}
        style={{borderRadius: 100, color:'black',paddingHorizontal:20, width:'78%', backgroundColor:'rgb(220,220,220)', marginVertical: 10, height:'8%'}}
        placeholderTextColor="black">
        

        </TextInput>
    )
}
export default Field;