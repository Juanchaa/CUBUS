import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../../navigation/types';
import { Button } from '../../../shared/components/Button';
import { Input } from '../../../shared/components/Input';
import { OnboardingLayout } from '../../../shared/layouts/OnboardingLayout';
import { colors } from '../../../shared/theme/colors';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email.toLowerCase().trim() === 'admin@admin.com' && password === 'admin1234') {
      navigation.navigate('MainTabs');
    } else {
      Alert.alert(
        'Error de inicio de sesión',
        'Credenciales incorrectas. Para probar usa:\nUsuario: admin@admin.com\nContraseña: admin1234',
      );
    }
  };

  return (
    <OnboardingLayout>
      <OnboardingLayout.Scroll>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={28} color={colors.dark} />
          </TouchableOpacity>
          <Image
            source={require('../../../../assets/images/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>¡Bienvenido de nuevo!</Text>

        <View style={styles.formContainer}>
          <Input
            label="Correo electronico o usuario"
            placeholder="Andres@correo.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Input
            label="Contraseña"
            placeholder="**********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            onPress={() => navigation.navigate('ForgotPassword', { email })}
          >
            <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <Button title="Iniciar sesión" variant="primary" onPress={handleLogin} />
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>O continua con</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialContainer}>
          <Button title="" variant="google" style={styles.socialButton} />
          <Button title="" variant="apple" style={styles.socialButton} />
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.noAccountText}>¿No tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Registrate</Text>
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
    marginBottom: 40,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  logo: {
    height: 60,
    width: 200,
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 40,
  },
  formContainer: {
    width: '100%',
    marginBottom: 30,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  forgotPasswordText: {
    color: colors.yellow,
    fontWeight: 'bold',
    fontSize: 14,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.textSecondary,
  },
  dividerText: {
    marginHorizontal: 10,
    color: colors.dark,
    fontSize: 14,
    fontWeight: '600',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  socialButton: {
    width: '47%',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAccountText: {
    color: colors.dark,
    fontWeight: '600',
    fontSize: 14,
  },
  registerText: {
    color: colors.lightBlue,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
