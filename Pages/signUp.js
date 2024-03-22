import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { FIREBASE_AUTH } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            setEmail(null);
            setPassword(null);
            alert("Registration successful!")
            
        })
        .catch(err => alert('Registration failed: '+ err.message))
    }
    return (
        <View style={styles.container}>
        <Text style={styles.header}>Sign Up!</Text>
        <View style={styles.signUpForm}> 
            <Text style={{color: '#000000', fontSize: 27.65, fontWeight: 'bold', marginBottom: 46}}>
                Uni<Text style={{color: '#FABC2A'}}>Snack</Text>
            </Text> 
            <TextInput 
            editable
            style={styles.input}
            placeholder="email"
            placeholderTextColor="black"
            value={email}
            onChangeText={(text) => {
                setEmail(text)
            }}
            />     
            <TextInput 
            editable
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            value={password}
            onChangeText={(text) => {
                setPassword(text)
            }}
            secureTextEntry={true}
            />     
            <Button 
            title='SIGN UP'
            color='#7CDF64'
            onPress={signUp}
            />  
              
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#293132",
      flex: 1
    },
    header: {
      fontSize: 27.65,
      color: 'white',
      marginTop: 100,
      marginLeft: 31
    },
    signUpForm: {
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'white',
     width: 346,
     height: 509,
     marginTop: 10,
     marginLeft: 31,
     borderRadius: 24
    },
    input: {
      width: 300,
      height: 60,
      opacity: 1,
      borderRadius: 24,
      borderWidth: 2,
      paddingLeft: 17,
      marginBottom: 38
    },
 });
 

export default SignUp;