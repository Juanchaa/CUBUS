import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

// Screens
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { IntroScreen } from '../screens/IntroScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';
import { EmailVerificationScreen } from '../screens/EmailVerificationScreen';
import { BlockedScreen } from '../screens/BlockedScreen';
import { SuccessScreen } from '../screens/SuccessScreen';
import { MainTabNavigator } from './MainTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#FFFFFF' }
                }}
            >
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Intro" component={IntroScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />
                <Stack.Screen name="Blocked" component={BlockedScreen} />
                <Stack.Screen name="Success" component={SuccessScreen} />
                <Stack.Screen name="MainTabs" component={MainTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};