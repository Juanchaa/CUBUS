import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GripVertical, Plus, MoreVertical } from 'lucide-react-native';
import { FieldDefinition, FieldType } from '../../types';
import { colors } from '../../../../shared/theme/colors';

const TYPE_LABELS: Record<FieldType, string> = {
    text: 'Texto',
    boolean: 'Sí / No',
    select: 'Opción',
    image: 'Imagen',
};

const TYPE_COLORS: Record<FieldType, { bg: string; text: string }> = {
    text: { bg: '#DCFCE7', text: '#15803D' },
    boolean: { bg: '#FFEDD5', text: '#C2410C' },
    select: { bg: '#F3E8FF', text: '#7E22CE' },
    image: { bg: '#DBEAFE', text: '#1D4ED8' },
};

interface StepDefineFieldsProps {
    fields: FieldDefinition[];
    onAddField: () => void;
    onReorder: (fields: FieldDefinition[]) => void;
}

export default function StepDefineFields({ fields, onAddField }: StepDefineFieldsProps) {
    const sorted = [...fields].sort((a, b) => a.order - b.order);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Ahora, define qué información tendrá cada pieza de tu colección.
            </Text>

            <View style={{ gap: 10 }}>
                {sorted.map((field) => (
                    <View key={field.id} style={styles.row}>
                        <GripVertical size={16} color={colors.placeholder} />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.fieldLabel}>{field.label}</Text>
                            {field.helperText ? <Text style={styles.fieldHint}>{field.helperText}</Text> : null}
                        </View>
                        <View style={[styles.badge, { backgroundColor: TYPE_COLORS[field.type].bg }]}>
                            <Text style={[styles.badgeText, { color: TYPE_COLORS[field.type].text }]}>
                                {TYPE_LABELS[field.type]}
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <MoreVertical size={16} color={colors.placeholder} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <TouchableOpacity style={styles.addButton} onPress={onAddField}>
                <Plus size={16} color={colors.textSecondary} />
                <Text style={styles.addButtonText}>Agregar otro campo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { gap: 20 },
    title: { fontSize: 16, fontWeight: '600', color: colors.dark, lineHeight: 22 },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: colors.borderLight,
        borderRadius: 10,
        padding: 12,
    },
    fieldLabel: { fontSize: 13, fontWeight: '600', color: colors.dark },
    fieldHint: { fontSize: 12, color: colors.textSecondary },
    badge: { borderRadius: 999, paddingHorizontal: 8, paddingVertical: 4 },
    badgeText: { fontSize: 11, fontWeight: '600' },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        borderWidth: 1,
        borderColor: colors.border,
        borderStyle: 'dashed',
        borderRadius: 10,
        paddingVertical: 12,
    },
    addButtonText: { fontSize: 13, fontWeight: '600', color: colors.textSecondary },
});