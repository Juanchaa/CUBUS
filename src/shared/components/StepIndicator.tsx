import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../shared/theme/colors';
interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    return (
        <View style={styles.container}>
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                <View key={step} style={styles.stepGroup}>
                    <View
                        style={[
                            styles.circle,
                            step === currentStep && styles.circleActive,
                            step < currentStep && styles.circleDone,
                        ]}
                    >
                        <Text
                            style={[
                                styles.circleText,
                                (step === currentStep || step < currentStep) && styles.circleTextActive,
                            ]}
                        >
                            {step}
                        </Text>
                    </View>
                    {step < totalSteps && (
                        <View style={[styles.line, step < currentStep && styles.lineDone]} />
                    )}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 16 },
    stepGroup: { flexDirection: 'row', alignItems: 'center' },
    circle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: colors.borderLight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleActive: { backgroundColor: colors.skyBlue },
    circleDone: { backgroundColor: colors.lightBlue },
    circleText: { fontSize: 13, fontWeight: '600', color: colors.placeholder },
    circleTextActive: { color: colors.white },
    line: { width: 32, height: 2, backgroundColor: colors.borderLight, marginHorizontal: 8 },
    lineDone: { backgroundColor: colors.lightBlue },
});