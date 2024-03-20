import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Text, Button } from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import ViewProduct from './components/screens/ViewProducts';
import AddProduct from './components/screens/AddProduct';

const Stack = createNativeStackNavigator();

import { init } from "./sql";

export default function App() {

  React.useEffect(() => {
      init()
        .then(() => {
          console.log('Initialized database');
        })
        .catch(err => {
          console.log('Initializing db failed.');
          console.log(err);
        });
  })

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};