import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TextInput as RNTextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { Button } from '../../../shared/components/Button';
import { OnboardingLayout } from '../../../shared/layouts/OnboardingLayout';
import { colors } from '../../../shared/theme/colors';

type EmailVerificationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EmailVerification'>;
type EmailVerificationScreenRouteProp = RouteProp<RootStackParamList, 'EmailVerification'>;

export const EmailVerificationScreen = () => {
  const navigation = useNavigation<EmailVerificationScreenNavigationProp>();
  const route = useRoute<EmailVerificationScreenRouteProp>();
  const email = route.params?.email || '';

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<Array<RNTextInput | null>>([]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const verificationCode = code.join('');
    navigation.navigate('Success', { message: 'Correo verificado correctamente' });
  };

  return (
    <OnboardingLayout>
      <OnboardingLayout.Header showBack onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <Text style={styles.title}>Verifica tu correo</Text>
        <Text style={styles.subtitle}>
          Ingresa el código de 6 dígitos que enviamos a{'\n'}
          <Text style={styles.emailText}>{email}</Text>
        </Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <RNTextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              ref={(ref) => {
                inputs.current[index] = ref;
              }}
            />
          ))}
        </View>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>¿No recibiste el código? </Text>
          <TouchableOpacity>
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
    marginBottom: 40,
    lineHeight: 24,
  },
  emailText: {
    fontWeight: 'bold',
    color: colors.dark,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput: {
    width: 45,
    height: 55,
    backgroundColor: colors.inputBg,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  resendText: {
    color: colors.textSubtle,
    fontSize: 14,
  },
  resendLink: {
    color: colors.lightBlue,
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonWrapper: {
    marginTop: 20,
  },
});
