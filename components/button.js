import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ButtonLink({name}) {
  return (
    <View style={styles.btnWrapper}>
        <Text style={styles.linkText}>{name}</Text>
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    btnWrapper: {
        marginTop: 28,
        marginLeft: 35,
        width: 150, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FABC2A'
    },
    linkText: {
        color: 'white',
        fontSize: 19.2
    }
})
