import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../../navigation/types';
import { Button } from '../../../shared/components/Button';
import { OnboardingLayout } from '../../../shared/layouts/OnboardingLayout';
import { colors } from '../../../shared/theme/colors';

type BlockedScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Blocked'>;

export const BlockedScreen = () => {
  const navigation = useNavigation<BlockedScreenNavigationProp>();

  return (
    <OnboardingLayout>
      <OnboardingLayout.Centered>
        <Ionicons name="lock-closed" size={150} color={colors.blocked} style={styles.icon} />

        <Text style={styles.title}>Acceso bloqueado</Text>
        <Text style={styles.subtitle}>
          Has superado el numero maximo{'\n'}de intentos fallidos
        </Text>

        <TouchableOpacity style={styles.timerContainer}>
          <Text style={styles.timerLabel}>Intenta nuevamente en</Text>
          <Text style={styles.timerValue}>15:00 minutos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.helpContainer}>
          <Text style={styles.helpText}>¿Necesitas ayuda?</Text>
        </TouchableOpacity>

        <Button
          title="Volver al inicio"
          variant="primary"
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        />
      </OnboardingLayout.Centered>
    </OnboardingLayout>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.dark,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  timerContainer: {
    backgroundColor: colors.inputBg,
    width: '100%',
    paddingVertical: 30,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  timerLabel: {
    fontSize: 16,
    color: colors.textSubtle,
    marginBottom: 5,
    fontWeight: '600',
  },
  timerValue: {
    fontSize: 18,
    color: colors.dark,
    fontWeight: 'bold',
  },
  helpContainer: {
    marginBottom: 30,
  },
  helpText: {
    color: colors.yellow,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
  },
});
