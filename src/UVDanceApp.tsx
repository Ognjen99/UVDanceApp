import { NavigationContainer } from "@react-navigation/native";
import * as React from 'react';
import BottomNavigation from "./Navigation/BottomNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Coach from "./screens/StackScreen/Coach";
import VideoScreen from "./screens/CostumesScreen/VideoScreen";
import Coaches from "./screens/StackScreen/Coaches";

const UVDanceApp = () => {
    const Stack = createNativeStackNavigator();

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={BottomNavigation} options={{ headerShown: false }} />
                <Stack.Screen name='Coach' component={Coach} options={{ headerShown: false }} />
                <Stack.Screen name='Coaches' component={Coaches} options={{ headerShown: false }} />
                <Stack.Screen name='VideoScreen' component={VideoScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default UVDanceApp;