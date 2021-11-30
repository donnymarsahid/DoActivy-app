import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './welcome/Welcome'
import Login from './auth/Login'
import Register from './auth/Register'
import ForgotPassword from './auth/ForgotPassword'
import Home from './home/Home'
import Add from './actions/Add'
import Detail from './detail/Detail'
import Edit from './actions/Edit'
import Setting from './setting/Setting'

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
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddActivity" component={Add} />
            <Stack.Screen name="EditActivity" component={Edit} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    )
}

export default Routes
