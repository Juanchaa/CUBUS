import React from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { Button } from '../components/Button';

type IntroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Intro'>;

export const IntroScreen = () => {
    const navigation = useNavigation<IntroScreenNavigationProp>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topDecoration} />
            <View style={styles.content}>
                <Image 
                    source={require('../../assets/images/Logo.png')} 
                    style={styles.logo}
                    resizeMode="contain"
                />

                <View style={styles.buttonContainer}>
                    <Button 
                        title="Iniciar sesión" 
                        variant="primary" 
                        onPress={() => navigation.navigate('Login')} 
                    />
                    <Button 
                        title="Crear cuenta" 
                        variant="secondary" 
                        onPress={() => navigation.navigate('Register')} 
                    />
                </View>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>O continua con</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.socialContainer}>
                    <Button 
                        title="Google" 
                        variant="google" 
                        style={styles.socialButton} 
                    />
                    <Button 
                        title="Apple" 
                        variant="apple" 
                        style={styles.socialButton} 
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topDecoration: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 150,
        height: 150,
        // Abstract decoration can be an image or SVG. We'll leave space or use absolute positioning
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 80,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 40,
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 30,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#777',
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#070d1e',
        fontSize: 14,
        fontWeight: '600',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    socialButton: {
        width: '47%',
    },
});
