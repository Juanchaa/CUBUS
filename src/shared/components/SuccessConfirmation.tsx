import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from './Button';
import { colors } from '../theme/colors';

interface SuccessConfirmationProps {
    image?: ImageSourcePropType;
    title: string;
    subtitle?: string;
    primaryActionLabel: string;
    onPrimaryAction: () => void;
    secondaryActionLabel?: string;
    onSecondaryAction?: () => void;
}

// Posicionados en el margen del imageWrap (180x180), fuera del recuadro del
// ícono (que ocupa el centro, 110x110) para no quedar tapados por él.
const CONFETTI: { top: number; left: number; size: number; color: string; rotate: string }[] = [
    { top: 2, left: 40, size: 7, color: colors.yellow, rotate: '20deg' },
    { top: 8, left: 150, size: 6, color: colors.skyBlue, rotate: '-10deg' },
    { top: 40, left: 2, size: 5, color: colors.error, rotate: '45deg' },
    { top: 150, left: 20, size: 8, color: colors.green, rotate: '0deg' },
    { top: 170, left: 150, size: 6, color: colors.cyan, rotate: '-25deg' },
    { top: 0, left: 100, size: 5, color: colors.green, rotate: '10deg' },
    { top: 160, left: 60, size: 6, color: colors.yellow, rotate: '30deg' },
    { top: 60, left: 165, size: 6, color: colors.skyBlue, rotate: '-15deg' },
    { top: 100, left: 0, size: 7, color: colors.error, rotate: '5deg' },
    { top: 150, left: 170, size: 6, color: colors.lightBlue, rotate: '15deg' },
];

export const SuccessConfirmation = ({
    image,
    title,
    subtitle,
    primaryActionLabel,
    onPrimaryAction,
    secondaryActionLabel,
    onSecondaryAction,
}: SuccessConfirmationProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrap}>
                {CONFETTI.map((dot, index) => (
                    <View
                        key={index}
                        style={[
                            styles.confettiDot,
                            {
                                top: dot.top,
                                left: dot.left,
                                width: dot.size,
                                height: dot.size,
                                backgroundColor: dot.color,
                                transform: [{ rotate: dot.rotate }],
                            },
                        ]}
                    />
                ))}

                <View style={styles.iconBox}>
                    <Image
                        source={image ?? require('../../../assets/images/icono.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    <View style={styles.badge}>
                        <Ionicons name="checkmark" size={16} color={colors.white} />
                    </View>
                </View>
            </View>

            <Text style={styles.title}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

            <Button
                title={primaryActionLabel}
                onPress={onPrimaryAction}
                variant="primaryBlue"
                style={styles.primaryButton}
            />

            {secondaryActionLabel && onSecondaryAction ? (
                <TouchableOpacity onPress={onSecondaryAction}>
                    <Text style={styles.secondaryLink}>{secondaryActionLabel}</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    imageWrap: {
        width: 180,
        height: 180,
        marginBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confettiDot: {
        position: 'absolute',
        borderRadius: 2,
    },
    iconBox: {
        width: 110,
        height: 110,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    badge: {
        position: 'absolute',
        bottom: -6,
        right: -6,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: colors.green,
        borderWidth: 3,
        borderColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.dark,
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        color: colors.textSubtle,
        textAlign: 'center',
        marginBottom: 32,
    },
    primaryButton: {
        width: '100%',
    },
    secondaryLink: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.skyBlue,
        marginTop: 6,
    },
});
