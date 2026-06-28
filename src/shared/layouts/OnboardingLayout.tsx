import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ViewStyle,
  ScrollViewProps,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface OnboardingLayoutProps {
  children: ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
}

export const OnboardingLayout = ({
  children,
  backgroundColor = colors.white,
  style,
}: OnboardingLayoutProps) => {
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor }, style]}>
      {children}
    </SafeAreaView>
  );
};

interface ScrollProps extends ScrollViewProps {
  children: ReactNode;
  padded?: boolean;
}

OnboardingLayout.Scroll = ({
  children,
  padded = true,
  style,
  ...props
}: ScrollProps) => (
  <ScrollView
    contentContainerStyle={[padded && styles.scrollContent, style as ViewStyle]}
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}
    {...props}
  >
    {children}
  </ScrollView>
);

interface CenteredProps {
  children: ReactNode;
  style?: ViewStyle;
}

OnboardingLayout.Centered = ({ children, style }: CenteredProps) => (
  <View style={[styles.centered, style]}>{children}</View>
);

interface HeaderProps {
  showBack?: boolean;
  onBack?: () => void;
  centerLogo?: boolean;
  rightElement?: ReactNode;
}

OnboardingLayout.Header = ({
  showBack = false,
  onBack,
  centerLogo = false,
  rightElement,
}: HeaderProps) => (
  <View style={styles.header}>
    {showBack && (
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color={colors.dark} />
      </TouchableOpacity>
    )}

    {centerLogo && (
      <View style={styles.logoCentered}>
        <Image
          source={require('../../../assets/images/Logo.png')}
          style={styles.headerLogo}
          resizeMode="contain"
        />
      </View>
    )}

    {rightElement && <View style={styles.headerRight}>{rightElement}</View>}
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 40,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 20,
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
    marginLeft: -5,
  },
  logoCentered: {
    flex: 1,
    alignItems: 'center',
  },
  headerLogo: {
    height: 60,
    width: 200,
  },
  headerRight: {
    marginLeft: 'auto',
  },
});
