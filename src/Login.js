// import React,{useState} from 'react';
// import {View, Text, TouchableOpacity, Button, Alert, TextInput} from 'react-native';
// import {Background1} from './Background';
// import Field from './field';
// import { useNavigation } from '@react-navigation/native';

// const Login=(props)=>{
//   const navigation = useNavigation();
//     // const [form,setForm] = useState({
//     //   email:'',
//     //   password:''
//     // })

// //For showing email and Password in alert box
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // const handleLogin = () => {
//     //     Alert.alert('Credentials');
//     //     console.log(email+','+password);
//     //   };
  
//     const handleLogin = async () => {
//       try{
//             await fetch('http://localhost:5000', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({
//                 email: email,
//                 password: password
//               })
//             })
           
//             .then(response => {
//               Alert("Response")
//               return response.json()

//             })      
//             .then(data => {
//               console.log(data)
//               // Handle the response from the server
//               // if (data) {
//               //   navigation.navigate('Home');
//               // } else {
//               //     Alert.alert('login failed');
//               // }
//             })
//             .catch(error => {
//               console.error('Error:', error);
//               console.log(error);
//             });
            
//       }
//       catch(err)
//       {
//         Alert.alert("Catch block")
//       }
     
      
//     };

    
      
//     //   e.preventDefault();
//     //   try {
//     //     const response = await fetch('/login', {
//     //       method: 'POST',
//     //       headers: {
//     //         'Content-Type': 'application/json'
//     //       },
//     //       body: JSON.stringify(data)
//     //     });
        
//     //     console.log("1");
//     //     const data = await response.json();
//     //     if (response.ok) {
//     //       Alert.alert('Welcome');
//     //     console.log("2");

//     //     } else {
//     //       Alert.alert(data.message);
//     //       console.log("3");

//     //     }
//     //  } 
//     // catch (error) {
//     //    Alert.alert('Error', error.message);
//     //   }
      
    
//     // }
    
//     return (
//        <Background1>
//         <View style={{alignItems:'center', width: 400}}>

//         <View style={{height: 700, width: 460, paddingTop: 250, alignItems: 'center'}}>
//             <Text style={{fontSize: 40, color: 'dodgerblue', fontWeight:'bold'}}>Welcome Back</Text>
//             <Text style={{fontSize: 19, color: 'grey', fontWeight:'bold', marginBottom: 20}}>Login to your account</Text>
//             <TextInput placeholder="Email / Username" keyboardType={"email-address"} onChangeText={setEmail} value={email} />
//             <TextInput placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password}/>
            
//             <TouchableOpacity  onPress={handleLogin}
//             style={{borderRadius: 100, color:'white',paddingHorizontal:20, width:'78%', backgroundColor:'dodgerblue', marginVertical: 10, height:'8%'}}
//             >
//                 <Text style={{color:"white", fontSize: 22, fontWeight: "bold", justifyContent:'center', paddingVertical: 5, textAlign:'center'}}>
//                 Login
//                 </Text>

//             </TouchableOpacity>
//             <View style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
//                  <Text style={{fontSize: 16,fontWeight:'bold', color:'grey'}}>Don't have an account ? </Text>
//                  <TouchableOpacity onPress={()=>
//                     props.navigation.navigate("Signup")}>
//                  <Text style={{color: "dodgerblue", fontWeight:'bold', fontSize: 16}}>Signup</Text>
//             </TouchableOpacity>

//             </View>
//         </View>
//         </View>

//    </Background1>
//     )
// }

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';



  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
      console.log(email, password);
      const handleLogin = () => {
        axios
          .post('http://localhost:3000/login', {email, password})
          .then(response => {
            Alert.alert(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Button title="Login" onPress={handleLogin}/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      width: '100%',
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
    },
  });

  export default Login;
  
  