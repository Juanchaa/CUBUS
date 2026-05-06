import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

export const RegisterScreen = () => {
    const navigation = useNavigation<RegisterScreenNavigationProp>();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        let newErrors: { [key: string]: string } = {};
        let isValid = true;

        if (!name.trim()) {
            newErrors.name = 'El nombre es obligatorio';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = 'Correo electrónico inválido';
            isValid = false;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            newErrors.password = 'Debe tener al menos 8 caracteres, 1 mayúscula y 1 número';
            isValid = false;
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleRegister = async () => {
        if (validateForm()) {
            // API Call goes here
            console.log('Registering user...');
            navigation.navigate('EmailVerification', { email });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={28} color="#070d1e" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Crea tu cuenta</Text>
                <Text style={styles.subtitle}>Ingresa tus datos para continuar</Text>

                <View style={styles.formContainer}>
                    <Input 
                        label="Nombre completo"
                        placeholder="Andrés Valdés"
                        value={name}
                        onChangeText={(text) => { setName(text); setErrors({ ...errors, name: '' }); }}
                        error={errors.name}
                    />

                    <Input 
                        label="Correo electrónico"
                        placeholder="Andres@correo.com"
                        value={email}
                        onChangeText={(text) => { setEmail(text); setErrors({ ...errors, email: '' }); }}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        error={errors.email}
                    />
                    
                    <Input 
                        label="Contraseña"
                        placeholder="**********"
                        value={password}
                        onChangeText={(text) => { setPassword(text); setErrors({ ...errors, password: '' }); }}
                        secureTextEntry
                        error={errors.password}
                    />

                    <Input 
                        label="Confirmar contraseña"
                        placeholder="**********"
                        value={confirmPassword}
                        onChangeText={(text) => { setConfirmPassword(text); setErrors({ ...errors, confirmPassword: '' }); }}
                        secureTextEntry
                        error={errors.confirmPassword}
                    />

                    <View style={styles.buttonWrapper}>
                        <Button 
                            title="Registrarse" 
                            variant="primary" 
                            onPress={handleRegister} 
                        />
                    </View>
                </View>
                
                <View style={styles.loginContainer}>
                    <Text style={styles.hasAccountText}>¿Ya tienes una cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}>Inicia sesión</Text>
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
        marginBottom: 20,
    },
    backButton: {
        padding: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#070d1e',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
    formContainer: {
        width: '100%',
        marginBottom: 20,
    },
    buttonWrapper: {
        marginTop: 20,
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    hasAccountText: {
        color: '#070d1e',
        fontWeight: '600',
        fontSize: 14,
    },
    loginText: {
        color: '#48CAE4',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
