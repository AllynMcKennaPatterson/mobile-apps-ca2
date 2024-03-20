import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Text, Button } from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import ViewProduct from './components/screens/ViewProducts';
import AddProduct from './components/screens/AddProduct';
import UpdateProduct from './components/screens/UpdateProduct';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="ViewProducts" component={ViewProduct} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="UpdateProduct" component={UpdateProduct} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};