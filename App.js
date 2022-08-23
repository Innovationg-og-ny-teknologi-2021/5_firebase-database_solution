import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import firebase from "firebase";
import firebase from "firebase/compat";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CarList from "./components/CarList";
import Add_edit_Car from "./components/Add_edit_Car";
import CarDetails from "./components/CarDetails";
import Ionicons from "react-native-vector-icons/Ionicons";



export default function App() {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const firebaseConfig = {
      apiKey: "AIzaSyApYm1DlU_ZbKCeOAFgcCqJ--AVjtSgZXk",
      authDomain: "exercise-4-a1489.firebaseapp.com",
      databaseURL: "https://exercise-4-a1489-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "exercise-4-a1489",
      storageBucket: "exercise-4-a1489.appspot.com",
      messagingSenderId: "546102905599",
      appId: "1:546102905599:web:876e20d8c35e2c1ebbdaca"
  };


  // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
  // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const StackNavigation = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen name={'Car List'} component={CarList}/>
          <Stack.Screen name={'Car Details'} component={CarDetails}/>
          <Stack.Screen name={'Edit Car'} component={Add_edit_Car}/>
        </Stack.Navigator>
    )
  }

  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name={'Home'} component={StackNavigation} options={{tabBarIcon: () => ( <Ionicons name="home" size={20} />),headerShown:null}}/>
          <Tab.Screen name={'Add'} component={Add_edit_Car} options={{tabBarIcon: () => ( <Ionicons name="add" size={20} />)}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
