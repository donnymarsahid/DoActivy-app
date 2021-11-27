import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './welcome/Welcome'
import Login from './auth/Login'
import Register from './auth/Register'
import ForgotPassword from './auth/ForgotPassword'

const Stack = createStackNavigator()

const Routes = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Welcome"
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default Routes
