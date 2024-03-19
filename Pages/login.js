import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <>
            <Text style={styles.header}>Hi!</Text>
            <View style={styles.loginForm}>
            <TextInput 
                style={styles.input}
                 placeholder="useless placeholder"
            />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
   header: {
     fontSize: 27.65,
     color: 'white',
     marginTop: 159,
     marginLeft: 31
   },
   loginForm: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.2,
    width: 346,
    height: 509,
    marginTop: 20,
    marginLeft: 31,
    borderRadius: 24
   }
});

export default Login;