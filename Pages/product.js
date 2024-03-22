import React, { useState }from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
const Product = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    return (
        <ScrollView>
             <View style={styles.container}>
        <Text style={styles.logo}>
            Uni<Text style={{color: '#FABC2A'}}>Snack</Text>
        </Text>
        <Text style={styles.productHeader}>Cassava <Text style={{color: '#FABC2A', fontWeight: 'bold'}}>Chips</Text></Text>
        <View style={styles.imageWrapper}>
        <Image
            source={require('../assets/chips.jpg')}
            style={styles.productImg}
        />
        <View style={styles.productInfo}>
            <Text>$ 0.8</Text>
            <Text>Icon</Text>
        </View>
        <View style={styles.main}>
            <View style={styles.mainTop}>
                <Checkbox
                    value={isChecked1}
                    onValueChange={() => {setIsChecked1(!isChecked1)}}
                />
                <Text style={{width: 140}}>Without Chilli</Text>
            </View>
            <View style={styles.mainMid}>
            <Pressable style={styles.button}>
                <Text style={{color: '#ffffff', fontSize: 27.65, fontWeight: 'bold'}}>
                   +
                </Text>
            </Pressable>
             <Text style={{ fontSize: 27.65, fontWeight: 'bold'}}>
                2
            </Text>
        
          <Pressable style={styles.button} >
               <Text style={{color: '#ffffff', fontSize: 27.65, fontWeight: 'bold'}}>
                   -
                </Text>
            </Pressable>
            </View>
            <View style={styles.mainFooter}>
               <Text style={{color: '#ffffff', fontSize: 27.65}}>
                 Tsh 1000
               </Text>
            </View>
        </View>
        <View style={styles.main}>
            <View style={styles.mainTop}>
                <Checkbox
                    value={isChecked2}
                    onValueChange={() => {setIsChecked2(!isChecked2)}}
                />
                <Text style={{width: 140}}>With Chilli</Text>
            </View>
            <View style={styles.mainMid}>
            <Pressable style={styles.button}>
                <Text style={{color: '#ffffff', fontSize: 27.65, fontWeight: 'bold'}}>
                   +
                </Text>
            </Pressable>
             <Text style={{ fontSize: 27.65, fontWeight: 'bold'}}>
                2
            </Text>
        
          <Pressable style={styles.button} >
               <Text style={{color: '#ffffff', fontSize: 27.65, fontWeight: 'bold'}}>
                   -
                </Text>
            </Pressable>
            </View>
            <View style={styles.mainFooter}>
               <Text style={{color: '#ffffff', fontSize: 27.65}}>
                 Tsh 1000
               </Text>
            </View>
        </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.cart}>
                <View style={styles.cartInfo}>
                <View style={styles.button}>
                    <Text style={{color: '#ffffff'}}>1</Text>
                </View>
                <Text style={styles.cartText}>1 item</Text>
            </View>
            <Pressable style={styles.imgBtn}>
                <Image
                source={require('../assets/chips.jpg')}
                style={styles.cartImg}
                />
            </Pressable>
             </View>  
        </View>
    </View>
 </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#293132',
        paddingHorizontal: 35
    },
    logo: {
        color: '#FFFFFF', 
        fontSize: 33.18, 
        fontWeight: 'bold', 
        textAlign: 'center',
        marginTop: 50
    },
    productHeader: {
        width: 149,
        fontSize: 27.65,
        color: '#ffffff',
        marginTop: 20
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: 35,
        position: 'relative'
    },
    productImg: {
        width: 280,
        height: 300,
        borderRadius: 24
    },
    productInfo: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        width: 230,
        height: 50,
        backgroundColor: '#ffffff',
        opacity: 0.5,
        borderRadius: 100,
        position: 'absolute',
        top: 239,
        zIndex: 2
    },
    main: {
        width: 380,
        height: 205,
        backgroundColor: '#ffffff',
        marginTop: 20,
        borderRadius: 24,
        paddingVertical: 29,
        paddingHorizontal: 29,
        position: 'relative'
    },
    mainTop: {
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
        left: '45%',
        
    },
    mainMid: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 38
    }, 
    mainFooter: {
        width: 162,
        height: 70,
        backgroundColor: '#000000',
        marginTop: 10,
        marginLeft: 80,
        borderRadius: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    cart: {
        width: 380,
        height: 80,
        backgroundColor: '#ffffff',
        borderRadius: 24,
        paddingHorizontal: 21,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cartInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartText: {
        marginLeft: 5
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
    }
});

export default Product;