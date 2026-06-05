import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';
import { Button } from '../components/Button';

type BlockedScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Blocked'>;

export const BlockedScreen = () => {
    const navigation = useNavigation<BlockedScreenNavigationProp>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Ionicons name="lock-closed" size={150} color="#FF0000" style={styles.icon} />

                <Text style={styles.title}>Acceso bloqueado</Text>
                <Text style={styles.subtitle}>
                    Has superado el numero maximo{'\n'}de intentos fallidos
                </Text>

                <View style={styles.timerContainer}>
                    <Text style={styles.timerText}>Intenta nuevamente en</Text>
                    <Text style={styles.timerBold}>15:00 minutos</Text>
                </View>

                <TouchableOpacity style={styles.helpContainer}>
                    <Text style={styles.helpText}>¿Necesitas ayuda?</Text>
                </TouchableOpacity>

                <Button
                    title="Volver al inicio"
                    variant="primary"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    icon: {
        marginBottom: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#070d1e',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#070d1e',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 40,
    },
    timerContainer: {
        backgroundColor: '#D9D9D9',
        width: '100%',
        paddingVertical: 30,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    timerText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
        fontWeight: '600',
    },
    timerBold: {
        fontSize: 18,
        color: '#070d1e',
        fontWeight: 'bold',
    },
    helpContainer: {
        marginBottom: 30,
    },
    helpText: {
        color: '#FACC15',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
    },
});
