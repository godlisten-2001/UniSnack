import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';
export default function Home() {
  return (
    <>
      <Text style={styles.header}>Choose the <Text style={{color: '#FABC2A', fontWeight: 'bold'}}>Snack</Text> of your liking
      </Text>
      <View style={styles.link}>
        <Button name='Cassava chips'/>
        <Button name='Potato chips'/>
        <Button name= 'Banana chips'/>
      </View>
      <StatusBar style="auto" />
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
