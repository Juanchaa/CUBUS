import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export const WelcomeScreen = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Intro');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/images/Logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#070d1e',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 250,
        height: 250,
    },
});
