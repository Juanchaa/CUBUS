import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { GripVertical, Plus } from 'lucide-react-native';
import { Ionicons } from '@expo/vector-icons';
import { FieldDefinition, FieldType } from '../../types';
import { colors } from '../../../../shared/theme/colors';
import { useDragReorder } from '../../../../shared/hooks/useDragReorder';
import { Button } from '../../../../shared/components/Button';
import { TYPE_LABELS, TYPE_COLORS } from './constants';

interface StepDefineFieldsProps {
    fields: FieldDefinition[];
    onAddField: () => void;
    onReorder: (fields: FieldDefinition[]) => void;
}

export default function StepDefineFields({ fields, onAddField, onReorder }: StepDefineFieldsProps) {
    const [editingFieldId, setEditingFieldId] = useState<string | null>(null);
    const [editValue, setEditValue] = useState('');

    const sorted = [...fields].sort((a, b) => a.order - b.order);

    const { activeDragId, getDragHandlers } = useDragReorder({
        items: sorted,
        rowHeight: 65,
        onReorder: (newFields) => {
            onReorder(newFields.map((f, i) => ({ ...f, order: i })));
        }
    });

    const cycleType = (current: FieldType): FieldType => {
        const types: FieldType[] = ['text', 'boolean', 'select', 'image'];
        const index = types.indexOf(current);
        return types[(index + 1) % types.length];
    };

    const handleStartEdit = (field: FieldDefinition) => {
        setEditingFieldId(field.id);
        setEditValue(field.label);
    };

    const handleSaveEdit = (fieldId: string) => {
        if (editingFieldId === fieldId) {
            onReorder(fields.map(f => (f.id === fieldId ? { ...f, label: editValue } : f)));
            setEditingFieldId(null);
        }
    };

    const handleCycleType = (fieldId: string, currentType: FieldType) => {
        onReorder(fields.map(f => (f.id === fieldId ? { ...f, type: cycleType(currentType) } : f)));
    };

    const handleDelete = (fieldId: string) => {
        onReorder(fields.filter(f => f.id !== fieldId));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Ahora, define qué información tendrá cada pieza de tu colección.
            </Text>
            <Text style={styles.subtitle}>
                Puedes editar la posición, el nombre y el tipo de cada campo presionando sobre ellos.
            </Text>

            <View style={{ gap: 10 }}>
                {sorted.map((field) => (
                    <View key={field.id} style={styles.fieldWrapper}>
                        <View
                            style={[
                                styles.row,
                                activeDragId === field.id && styles.rowDragging
                            ]}
                        >
                            <View style={styles.gripVertical} {...getDragHandlers(field.id)}>
                                <GripVertical size={20} color={activeDragId === field.id ? colors.skyBlue : colors.placeholder} />
                            </View>
                            <View style={{ flex: 1 }}>
                                {editingFieldId === field.id ? (
                                    <TextInput
                                        style={styles.fieldLabelInput}
                                        value={editValue}
                                        onChangeText={setEditValue}
                                        onBlur={() => handleSaveEdit(field.id)}
                                        onSubmitEditing={() => handleSaveEdit(field.id)}
                                        autoFocus
                                    />
                                ) : (
                                    <TouchableOpacity onPress={() => handleStartEdit(field)}>
                                        <Text style={styles.fieldLabel}>{field.label}</Text>
                                    </TouchableOpacity>
                                )}
                                {field.helperText ? <Text style={styles.fieldHint}>{field.helperText}</Text> : null}
                            </View>
                            <TouchableOpacity onPress={() => handleCycleType(field.id, field.type)}>
                                <View style={[styles.badge, { backgroundColor: TYPE_COLORS[field.type].bg }]}>
                                    <Text style={[styles.badgeText, { color: TYPE_COLORS[field.type].text }]}>
                                        {TYPE_LABELS[field.type]}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(field.id)}>
                            <Ionicons name="trash-outline" size={22} color={colors.error || '#EF4444'} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <Button
                title="Agregar otro campo"
                onPress={onAddField}
                variant="secondaryOutline"
                style={{ borderStyle: 'dashed' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    gripVertical: {
        padding: 6,
        marginRight: 4
    },
    container: { gap: 20 },
    title: { fontSize: 16, fontWeight: '600', color: colors.dark, lineHeight: 22 },
    subtitle: { fontSize: 13, color: colors.textSecondary, marginTop: 2 },
    fieldWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        borderWidth: 1,
        borderColor: colors.borderLight,
        borderRadius: 10,
        padding: 12,
    },
    fieldLabelInput: { fontSize: 13, fontWeight: '600', color: colors.dark, padding: 0, margin: 0 },
    fieldLabel: { fontSize: 13, fontWeight: '600', color: colors.dark, paddingVertical: 2 },
    fieldHint: { fontSize: 12, color: colors.textSecondary },
    badge: { borderRadius: 999, paddingHorizontal: 8, paddingVertical: 4, marginRight: 20 },
    badgeText: { fontSize: 11, fontWeight: '600' },
    deleteButton: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowDragging: {
        borderColor: colors.skyBlue,
        backgroundColor: colors.lightBlue,
        shadowColor: colors.skyBlue,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
});