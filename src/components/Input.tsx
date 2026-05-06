import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, style, ...props }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput 
                style={[
                    styles.input, 
                    error ? styles.inputError : null, 
                    style
                ]} 
                placeholderTextColor="#999"
                {...props} 
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#070d1e',
        marginBottom: 5,
    },
    input: {
        height: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000',
    },
    inputError: {
        borderWidth: 1,
        borderColor: '#EF4444',
    },
    errorText: {
        color: '#EF4444',
        fontSize: 12,
        marginTop: 5,
    },
});
