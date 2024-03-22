import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/home';
import Login from './Pages/login';
import SignUp from './Pages/signUp';
import Product from './Pages/product';
import Cart from './Pages/cart';
export default function App() {
  const stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
          <stack.Navigator>
            <stack.Screen name='Cart' component={Cart}/>
            <stack.Screen name='Product' component={Product}/>
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="SignUp" component={SignUp} />
          </stack.Navigator>
      </NavigationContainer>
      
  );
}
