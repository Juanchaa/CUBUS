import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import StepIndicator from './StepIndicatorForm';
import StepBasicInfo from './BasicInfoForm';
import StepDefineFields from './DefineFieldsForm';
import { CollectionBasicInfo, FieldDefinition } from '../../types';
import { colors } from '../../../../shared/theme/colors';

const TOTAL_STEPS = 2;

interface CreateCollectionWizardProps {
    onComplete: (basicInfo: CollectionBasicInfo, fields: FieldDefinition[]) => void;
    onCancel: () => void;
}

export default function CreateCollectionWizard({ onComplete, onCancel }: CreateCollectionWizardProps) {
    const [step, setStep] = useState(1);
    const [basicInfo, setBasicInfo] = useState<CollectionBasicInfo>({
        coverImageUri: null,
        name: '',
        description: '',
        visibility: 'public',
    });
    const [fields, setFields] = useState<FieldDefinition[]>([]);

    const handleAddField = () => {
        const newField: FieldDefinition = {
            id: `field_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
            label: 'Nuevo campo',
            type: 'text',
            order: fields.length,
        };
        setFields([...fields, newField]);
    };

    const handleBack = () => {
        if (step === 1) return onCancel();
        setStep(step - 1);
    };

    const handleNext = () => {
        if (step < TOTAL_STEPS) {
            setStep(step + 1);
        } else {
            onComplete(basicInfo, fields);
        }
    };

    const isNextDisabled = step === 1 && basicInfo.name.trim() === '';

    return (
        <View style={styles.container}>
            <StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} />

            <ScrollView contentContainerStyle={styles.content}>
                {step === 1 && <StepBasicInfo data={basicInfo} onChange={setBasicInfo} />}
                {step === 2 && (
                    <StepDefineFields fields={fields} onAddField={handleAddField} onReorder={setFields} />
                )}
            </ScrollView>

            <View style={styles.footer}>
                {step > 1 && (
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={handleBack}
                    >
                        <Text style={styles.backButtonText}>Atrás</Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    style={[styles.nextButton, isNextDisabled && styles.nextButtonDisabled]}
                    onPress={handleNext}
                    disabled={isNextDisabled}
                >
                    <Text style={styles.nextButtonText}>{step === TOTAL_STEPS ? 'Crear' : 'Siguiente'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.white },
    content: { paddingHorizontal: 16, paddingBottom: 16 },
    footer: { 
        padding: 16, 
        borderTopWidth: 1, 
        borderTopColor: colors.borderLight,
        flexDirection: 'row',
        gap: 12
    },
    nextButton: { 
        flex: 1,
        backgroundColor: colors.skyBlue, 
        borderRadius: 10, 
        paddingVertical: 14, 
        alignItems: 'center' 
    },
    nextButtonDisabled: { backgroundColor: colors.border },
    nextButtonText: { color: colors.white, fontSize: 16, fontWeight: '700' },
    backButton: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.border
    },
    backButtonText: {
        color: colors.dark,
        fontSize: 16,
        fontWeight: '700'
    }
});