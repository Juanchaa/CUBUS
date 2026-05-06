import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

type ButtonVariant = 'primary' | 'secondary' | 'google' | 'apple' | 'disabled';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    variant?: ButtonVariant;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    style,
    textStyle,
    disabled = false
}) => {
    const getVariantStyles = (): { container: ViewStyle; text: TextStyle } => {
        switch (variant) {
            case 'primary':
                return {
                    container: { backgroundColor: '#070d1e' },
                    text: { color: '#5CE1E6', fontWeight: 'bold' },
                };
            case 'secondary':
                return {
                    container: { backgroundColor: '#D9D9D9', borderWidth: 1, borderColor: '#777' },
                    text: { color: '#070d1e', fontWeight: 'bold' },
                };
            case 'google':
                return {
                    container: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#777' },
                    text: { color: '#070d1e', fontWeight: 'bold', marginLeft: 10 },
                };
            case 'apple':
                return {
                    container: { backgroundColor: '#FACC15', borderWidth: 1, borderColor: '#777' },
                    text: { color: '#070d1e', fontWeight: 'bold', marginLeft: 10 },
                };
            case 'disabled':
                return {
                    container: { backgroundColor: '#D9D9D9' },
                    text: { color: '#070d1e', fontWeight: 'bold' },
                };
            default:
                return {
                    container: { backgroundColor: '#070d1e' },
                    text: { color: '#5CE1E6', fontWeight: 'bold' },
                };
        }
    };

    const variantStyles = getVariantStyles();

    return (
        <TouchableOpacity
            style={[styles.button, variantStyles.container, style]}
            onPress={onPress}
            disabled={disabled || variant === 'disabled'}
            activeOpacity={0.8}
        >
            {variant === 'google' && (
                <FontAwesome5 name="google" size={20} color="#4285F4" />
            )}
            {variant === 'apple' && (
                <FontAwesome5 name="apple" size={22} color="#000" />
            )}
            <Text style={[styles.text, variantStyles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
    },
    text: {
        fontSize: 16,
    },
});
