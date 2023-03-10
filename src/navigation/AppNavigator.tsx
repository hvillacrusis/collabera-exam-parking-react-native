import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/screens/HomeScreen';
import CreateParkingScreen from '../components/screens/CreateParkingScreen';
import {StackNavigatorParamList} from '../types';
import ParkingLotScreen from '../components/screens/ParkingLotScreen';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Initialize Parking System Parameters',
          }}
        />
        <Stack.Screen
          name="CreateParking"
          component={CreateParkingScreen}
          options={{
            title: 'Create Parking Slots',
          }}
        />
        <Stack.Screen
          name="ParkingLot"
          component={ParkingLotScreen}
          options={{
            title: 'Parking Slot',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
