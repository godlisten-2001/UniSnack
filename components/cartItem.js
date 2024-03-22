import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const CartItem = () => {
    return (
        <View style={styles.itemWrapper}>
         <View style={styles.cart}>
            <View style={styles.cartInfo}>
              <Pressable style={styles.imgBtn}>
                <Image
                source={require('../assets/chips.jpg')}
                style={styles.cartImg}
                />
              </Pressable>
              <Text style={styles.cartText}>Cassava chips</Text>
            </View>
            <View style={styles.price}>
               <Text style={{color: '#ffffff', fontSize: 19.2}}>
                 Tsh 1000
               </Text>
            </View>
        </View>
        </View>
        
       
    );
};

const styles = StyleSheet.create({
    itemWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    cart: {
        marginHorizontal: 26,
        width: 380,
        height: 80,
        borderRadius: 24,
        paddingHorizontal: 21,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgBtn: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartImg: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    cartText: {
        marginLeft: 10,
        color: '#ffffff',
        fontSize: 21,
    },
    cartInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        width: 120,
        height: 70,
        backgroundColor: '#000000',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CartItem;