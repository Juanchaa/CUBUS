import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../../navigation/types';
import { Button } from '../../../shared/components/Button';
import { OnboardingLayout } from '../../../shared/layouts/OnboardingLayout';
import { colors } from '../../../shared/theme/colors';

type SuccessScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Success'>;
type SuccessScreenRouteProp = RouteProp<RootStackParamList, 'Success'>;

export const SuccessScreen = () => {
  const navigation = useNavigation<SuccessScreenNavigationProp>();
  const route = useRoute<SuccessScreenRouteProp>();
  const message = route.params?.message || 'Operación exitosa';

  return (
    <OnboardingLayout>
      <OnboardingLayout.Centered>
        <Ionicons name="checkmark-circle" size={120} color={colors.lightBlue} style={styles.icon} />

        <Text style={styles.title}>¡Listo!</Text>
        <Text style={styles.subtitle}>{message}</Text>

        <Button
          title="Continuar"
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
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSubtle,
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    width: '100%',
  },
});
