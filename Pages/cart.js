import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native';
import CartItem from '../components/cartItem';
const Cart = () => {
    return (
        <KeyboardAvoidingView behaviour='padding' keyboardVerticalOffset={400} style={styles.container}>
            <ScrollView>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <View style={styles.order}>
                <Text style={styles.orderText}>Order name: </Text>
                <TextInput
                    style={styles.input}
                />
            </View> 
            </View>
           <View style={styles.footer}>
           <Pressable style={styles.button}>
                <Text style={{color: '#FABC2A', fontSize: 21, fontWeight: 'bold'}}>
                   Place Order
                </Text>
            </Pressable>
           </View>
            </ScrollView>
           
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#293132'
    },
    input: {
        width: 240,
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        backgroundColor: '#ffffff',
        borderRadius: 24
      },
      order: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      orderText: {
        color: '#ffffff',
        fontSize: 21
      },
      button: {
        backgroundColor: '#ffffff',
        width: 162,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
      footer: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    
});

export default Cart;