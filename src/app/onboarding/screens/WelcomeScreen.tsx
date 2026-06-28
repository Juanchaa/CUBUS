import React, { useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { OnboardingLayout } from '../../../shared/layouts/OnboardingLayout';
import { colors } from '../../../shared/theme/colors';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Intro');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <OnboardingLayout backgroundColor={colors.dark}>
      <OnboardingLayout.Centered>
        <Image
          source={require('../../../../assets/images/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </OnboardingLayout.Centered>
    </OnboardingLayout>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
  },
});
