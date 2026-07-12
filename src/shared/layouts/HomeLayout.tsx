import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Menu, Search, MessageSquareText, ChevronLeft } from 'lucide-react-native';
import { colors } from '../theme/colors';

interface HomeLayoutProps {
  children: ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
  showBack?: boolean;
  title?: string;
  headerRight?: ReactNode;
}

export const HomeLayout = ({
  children,
  backgroundColor = colors.background,
  style,
  showBack,
  title,
  headerRight,
}: HomeLayoutProps) => {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.screen, { backgroundColor }, style]}
    >
      <View style={styles.header}>
        {showBack ? (
          <TouchableOpacity>
            <ChevronLeft size={28} color={colors.dark} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Menu size={28} color={colors.dark} />
          </TouchableOpacity>
        )}

        <View style={styles.logoContainer}>
          {title ? (
            <Text style={styles.headerTitle}>{title}</Text>
          ) : (
            <Image
              source={require('../../../assets/images/Logo.png')}
              style={styles.headerLogo}
              resizeMode="contain"
            />
          )}
        </View>

        <View style={styles.headerIcons}>
          {headerRight ? (
            headerRight
          ) : (
            <>
              <TouchableOpacity style={styles.iconButton}>
                <Search size={24} color={colors.dark} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>3</Text>
                </View>
                <MessageSquareText size={24} color={colors.dark} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerLogo: {
    height: 30,
    width: 140,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.dark,
  },
});
