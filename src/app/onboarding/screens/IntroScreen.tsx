import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { Button } from '../../../shared/components/Button';
import { OnboardingLayout } from '../../../shared/layouts/OnboardingLayout';
import { colors } from '../../../shared/theme/colors';

type IntroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Intro'>;

export const IntroScreen = () => {
  const navigation = useNavigation<IntroScreenNavigationProp>();

  return (
    <OnboardingLayout>
      <View style={styles.content}>
        <Image
          source={require('../../../../assets/images/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Iniciar sesión"
            variant="primary"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title="Crear cuenta"
            variant="secondary"
            onPress={() => navigation.navigate('Register')}
          />
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>O continua con</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialContainer}>
          <Button title="Google" variant="google" style={styles.socialButton} />
          <Button title="Apple" variant="apple" style={styles.socialButton} />
        </View>
      </View>
    </OnboardingLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 30,
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
  },
  socialButton: {
    width: '47%',
  },
});
