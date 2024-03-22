import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import ButtonLink from '../components/button';
export default function Home() {
  return (
    <>
      <Text style={styles.header}>Choose the <Text style={{color: '#FABC2A', fontWeight: 'bold'}}>Snack</Text> of your liking
      </Text>
      <View style={styles.link}>
        <ButtonLink name='Cassava chips'/>
        <ButtonLink name='Potato chips'/>
        <ButtonLink name= 'Banana chips'/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 27.65,
    color: '#FFFFFF',
    paddingLeft: 35,
    paddingTop: 90,
    width: 260
  }, 
  link: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
