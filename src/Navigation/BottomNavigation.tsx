import { StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import CostumesScreen from '../screens/CostumesScreen';
import ShowsScreen from '../screens/ShowsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false
        }}>
            <Tab.Screen name='HomeScreen' component={HomeScreen}
                options={{
                    title: 'UV Dance',
                    headerTintColor: 'purple'
                }}></Tab.Screen>
            <Tab.Screen name='Show' component={ShowsScreen}
                options={{
                    title: 'UV Dance',
                    headerTintColor: 'purple'
                }}></Tab.Screen>
            <Tab.Screen name='Costumes' component={CostumesScreen}
                options={{
                    title: 'UV Dance',
                    headerTintColor: 'purple'
                }}></Tab.Screen>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})