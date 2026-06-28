import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { Button } from '../../../shared/components/Button';
import { Input } from '../../../shared/components/Input';
import { OnboardingLayout } from '../../../shared/layouts/OnboardingLayout';
import { colors } from '../../../shared/theme/colors';

type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPassword'>;
type ForgotPasswordScreenRouteProp = RouteProp<RootStackParamList, 'ForgotPassword'>;

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();
  const route = useRoute<ForgotPasswordScreenRouteProp>();

  const [email, setEmail] = useState(route.params?.email || '');

  const handleSendResetLink = async () => {
    navigation.navigate('Success', { message: 'Enlace de recuperación enviado' });
  };

  return (
    <OnboardingLayout>
      <OnboardingLayout.Header showBack onBack={() => navigation.goBack()} />

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
            <Button title="Enviar enlace" variant="primary" onPress={handleSendResetLink} />
          </View>
        </View>
      </View>
    </OnboardingLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSubtle,
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
