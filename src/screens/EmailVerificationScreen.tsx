import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';
import { Button } from '../components/Button';

type EmailVerificationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EmailVerification'>;
type EmailVerificationScreenRouteProp = RouteProp<RootStackParamList, 'EmailVerification'>;

export const EmailVerificationScreen = () => {
    const navigation = useNavigation<EmailVerificationScreenNavigationProp>();
    const route = useRoute<EmailVerificationScreenRouteProp>();
    const email = route.params?.email || '';

    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputs = useRef<Array<TextInput | null>>([]);

    const handleCodeChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        // Move to next input
        if (text && index < 5) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleVerify = async () => {
        const verificationCode = code.join('');
        console.log('Verifying code:', verificationCode);
        navigation.navigate('Success', { message: 'Correo verificado correctamente' });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={28} color="#070d1e" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Verifica tu correo</Text>
                <Text style={styles.subtitle}>
                    Ingresa el código de 6 dígitos que enviamos a{'\n'}
                    <Text style={styles.emailText}>{email}</Text>
                </Text>

                <View style={styles.codeContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={styles.codeInput}
                            keyboardType="numeric"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => handleCodeChange(text, index)}
                            ref={(ref) => { inputs.current[index] = ref; }}
                        />
                    ))}
                </View>

                <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>¿No recibiste el código? </Text>
                    <TouchableOpacity onPress={() => console.log('Resend code')}>
                        <Text style={styles.resendLink}>Reenviar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonWrapper}>
                    <Button 
                        title="Verificar" 
                        variant="primary" 
                        onPress={handleVerify} 
                        disabled={code.join('').length < 6}
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
        marginBottom: 40,
        lineHeight: 24,
    },
    emailText: {
        fontWeight: 'bold',
        color: '#070d1e',
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    codeInput: {
        width: 45,
        height: 55,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#070d1e',
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    resendText: {
        color: '#666',
        fontSize: 14,
    },
    resendLink: {
        color: '#48CAE4',
        fontWeight: 'bold',
        fontSize: 14,
    },
    buttonWrapper: {
        marginTop: 20,
    },
});
