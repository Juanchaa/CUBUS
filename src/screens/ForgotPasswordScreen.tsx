import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPassword'>;
type ForgotPasswordScreenRouteProp = RouteProp<RootStackParamList, 'ForgotPassword'>;

export const ForgotPasswordScreen = () => {
    const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();
    const route = useRoute<ForgotPasswordScreenRouteProp>();
    
    const [email, setEmail] = useState(route.params?.email || '');

    const handleSendResetLink = async () => {
        // API Call goes here
        console.log('Sending reset link to', email);
        navigation.navigate('Success', { message: 'Enlace de recuperación enviado' });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={28} color="#070d1e" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Recuperar contraseña</Text>
                <Text style={styles.subtitle}>
                    Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                </Text>

                <View style={styles.formContainer}>
                    <Input 
                        label="Correo electrónico"
                        placeholder="Andres@correo.com"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <View style={styles.buttonWrapper}>
                        <Button 
                            title="Enviar enlace" 
                            variant="primary" 
                            onPress={handleSendResetLink} 
                        />
                    </View>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 20,
        marginBottom: 20,
    },
    backButton: {
        padding: 5,
        marginLeft: -5,
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#070d1e',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
        lineHeight: 24,
    },
    formContainer: {
        width: '100%',
    },
    buttonWrapper: {
        marginTop: 20,
    },
});
