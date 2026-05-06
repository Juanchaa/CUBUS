import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Test user for home screen visualization
        if (email.toLowerCase().trim() === 'admin@admin.com' && password === 'admin1234') {
            navigation.navigate('MainTabs');
        } else {
            Alert.alert(
                'Error de inicio de sesión',
                'Credenciales incorrectas. Para probar usa:\nUsuario: admin@admin.com\nContraseña: admin1234'
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={28} color="#070d1e" />
                    </TouchableOpacity>
                    <Image 
                        source={require('../../assets/images/Logo.png')} 
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.title}>¡Bienvenido de nuevo!</Text>

                <View style={styles.formContainer}>
                    <Input 
                        label="Correo electronico o usuario"
                        placeholder="Andres@correo.com"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    
                    <Input 
                        label="Contraseña"
                        placeholder="**********"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TouchableOpacity 
                        style={styles.forgotPasswordContainer}
                        onPress={() => navigation.navigate('ForgotPassword', { email })}
                    >
                        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>

                    <Button 
                        title="Iniciar sesión" 
                        variant="primary" 
                        onPress={handleLogin} 
                    />
                </View>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>O continua con</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.socialContainer}>
                    <Button 
                        title="" 
                        variant="google" 
                        style={styles.socialButton} 
                    />
                    <Button 
                        title="" 
                        variant="apple" 
                        style={styles.socialButton} 
                    />
                </View>

                <View style={styles.registerContainer}>
                    <Text style={styles.noAccountText}>¿No tienes una cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
    },
    logo: {
        height: 60,
        width: 200,
        alignSelf: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#070d1e',
        textAlign: 'center',
        marginBottom: 40,
    },
    formContainer: {
        width: '100%',
        marginBottom: 30,
    },
    forgotPasswordContainer: {
        alignItems: 'center',
        marginVertical: 15,
    },
    forgotPasswordText: {
        color: '#FACC15',
        fontWeight: 'bold',
        fontSize: 14,
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
        marginBottom: 30,
    },
    socialButton: {
        width: '47%',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noAccountText: {
        color: '#070d1e',
        fontWeight: '600',
        fontSize: 14,
    },
    registerText: {
        color: '#48CAE4',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
