import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../theme/colors';

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
  disabled = false,
}) => {
  const getVariantStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (variant) {
      case 'primary':
        return {
          container: { backgroundColor: colors.dark },
          text: { color: colors.cyan, fontWeight: 'bold' },
        };
      case 'secondary':
        return {
          container: { backgroundColor: colors.inputBg, borderWidth: 1, borderColor: colors.textSecondary },
          text: { color: colors.dark, fontWeight: 'bold' },
        };
      case 'google':
        return {
          container: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.textSecondary },
          text: { color: colors.dark, fontWeight: 'bold', marginLeft: 10 },
        };
      case 'apple':
        return {
          container: { backgroundColor: colors.yellow, borderWidth: 1, borderColor: colors.textSecondary },
          text: { color: colors.dark, fontWeight: 'bold', marginLeft: 10 },
        };
      case 'disabled':
        return {
          container: { backgroundColor: colors.inputBg },
          text: { color: colors.dark, fontWeight: 'bold' },
        };
      default:
        return {
          container: { backgroundColor: colors.dark },
          text: { color: colors.cyan, fontWeight: 'bold' },
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
      {variant === 'google' && <FontAwesome5 name="google" size={20} color={colors.googleBlue} />}
      {variant === 'apple' && <FontAwesome5 name="apple" size={22} color={colors.black} />}
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
