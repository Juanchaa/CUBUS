import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import StepIndicator from '../../../../shared/components/StepIndicator';
import StepBasicInfo from './BasicInfoForm';
import StepDefineFields from './DefineFieldsForm';
import PreviewCollection from './PreviewCollection';
import { Button } from '../../../../shared/components/Button';
import { CollectionBasicInfo, FieldDefinition } from '../../types';
import { colors } from '../../../../shared/theme/colors';

const TOTAL_STEPS = 3;

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
                {step === 3 && <PreviewCollection basicInfo={basicInfo} fields={fields} />}
            </ScrollView>

            <View style={styles.footer}>
                {step > 1 && (
                    <Button
                        title="Atrás"
                        onPress={handleBack}
                        variant="secondaryOutline"
                        style={{ flex: 1, marginVertical: 0 }}
                    />
                )}
                <Button
                    title={step === TOTAL_STEPS ? 'Crear' : 'Siguiente'}
                    onPress={handleNext}
                    variant={isNextDisabled ? 'disabledBlue' : 'primaryBlue'}
                    disabled={isNextDisabled}
                    style={{ flex: 1, marginVertical: 0 }}
                />
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
    }
});