import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../../navigation/types';
import { Button } from '../../../shared/components/Button';
import { Input } from '../../../shared/components/Input';
import { OnboardingLayout } from '../../../shared/layouts/OnboardingLayout';
import { colors } from '../../../shared/theme/colors';

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
      navigation.navigate('EmailVerification', { email });
    }
  };

  return (
    <OnboardingLayout>
      <OnboardingLayout.Scroll>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={28} color={colors.dark} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Crea tu cuenta</Text>
        <Text style={styles.subtitle}>Ingresa tus datos para continuar</Text>

        <View style={styles.formContainer}>
          <Input
            label="Nombre completo"
            placeholder="Andrés Valdés"
            value={name}
            onChangeText={(text) => {
              setName(text);
              setErrors({ ...errors, name: '' });
            }}
            error={errors.name}
          />

          <Input
            label="Correo electrónico"
            placeholder="Andres@correo.com"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setErrors({ ...errors, email: '' });
            }}
            autoCapitalize="none"
            keyboardType="email-address"
            error={errors.email}
          />

          <Input
            label="Contraseña"
            placeholder="**********"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrors({ ...errors, password: '' });
            }}
            secureTextEntry
            error={errors.password}
          />

          <Input
            label="Confirmar contraseña"
            placeholder="**********"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setErrors({ ...errors, confirmPassword: '' });
            }}
            secureTextEntry
            error={errors.confirmPassword}
          />

          <View style={styles.buttonWrapper}>
            <Button title="Registrarse" variant="primary" onPress={handleRegister} />
          </View>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.hasAccountText}>¿Ya tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </OnboardingLayout.Scroll>
    </OnboardingLayout>
  );
};

const styles = StyleSheet.create({
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
    color: colors.dark,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSubtle,
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
    color: colors.dark,
    fontWeight: '600',
    fontSize: 14,
  },
  loginText: {
    color: colors.lightBlue,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
