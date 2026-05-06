import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';
import { Button } from '../components/Button';

type SuccessScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Success'>;
type SuccessScreenRouteProp = RouteProp<RootStackParamList, 'Success'>;

export const SuccessScreen = () => {
    const navigation = useNavigation<SuccessScreenNavigationProp>();
    const route = useRoute<SuccessScreenRouteProp>();
    const message = route.params?.message || 'Operación exitosa';

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Ionicons name="checkmark-circle" size={120} color="#48CAE4" style={styles.icon} />
                
                <Text style={styles.title}>¡Listo!</Text>
                <Text style={styles.subtitle}>{message}</Text>

                <View style={styles.buttonWrapper}>
                    <Button 
                        title="Continuar" 
                        variant="primary" 
                        onPress={() => navigation.navigate('Login')} 
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
        fontSize: 32,
        fontWeight: 'bold',
        color: '#070d1e',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        marginBottom: 50,
    },
    buttonWrapper: {
        width: '100%',
    },
});
