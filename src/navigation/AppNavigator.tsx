import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

import { WelcomeScreen } from '../app/onboarding/screens/WelcomeScreen';
import { IntroScreen } from '../app/onboarding/screens/IntroScreen';
import { LoginScreen } from '../app/auth/screens/LoginScreen';
import { RegisterScreen } from '../app/auth/screens/RegisterScreen';
import { ForgotPasswordScreen } from '../app/auth/screens/ForgotPasswordScreen';
import { EmailVerificationScreen } from '../app/auth/screens/EmailVerificationScreen';
import { BlockedScreen } from '../app/auth/screens/BlockedScreen';
import { SuccessScreen } from '../app/auth/screens/SuccessScreen';
import { MainTabNavigator } from './MainTabNavigator';
import { CreateCollection } from '../app/collections/screens/CreateCollection';
import { CollectionCreatedScreen } from '../app/collections/screens/CollectionCreatedScreen';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTabs" // CAMBIAR
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#FFFFFF' },
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

        <Stack.Screen name="CreateCollection" component={CreateCollection} />
        <Stack.Screen name="CollectionCreated" component={CollectionCreatedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
