import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CollectionBasicInfo, FieldDefinition } from '../../types';
import { colors } from '../../../../shared/theme/colors';

interface PreviewCollectionProps {
    basicInfo: CollectionBasicInfo;
    fields: FieldDefinition[];
}

export default function PreviewCollection({ basicInfo, fields }: PreviewCollectionProps) {
    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'text': return 'Texto';
            case 'boolean': return 'Sí / No';
            case 'select': return 'Opción';
            case 'image': return 'Imagen';
            default: return type;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Así se verá tu colección</Text>
            <Text style={styles.subtitle}>Revisa los detalles antes de crearla.</Text>

            <View style={styles.card}>
                <View style={styles.header}>
                    <View style={styles.imagePlaceholder}>
                        {basicInfo.coverImageUri ? (
                            <Image source={{ uri: basicInfo.coverImageUri }} style={styles.image} />
                        ) : (
                            <Ionicons name="image" size={40} color={colors.lightBlue} />
                        )}
                    </View>
                    <View style={styles.headerInfo}>
                        <Text style={styles.collectionName}>{basicInfo.name || 'Sin nombre'}</Text>
                        <View style={styles.visibilityRow}>
                            <Text style={styles.visibilityText}>
                                Colección {basicInfo.visibility === 'public' ? 'pública' : 'privada'}
                            </Text>
                            <Ionicons
                                name={basicInfo.visibility === 'public' ? 'earth' : 'lock-closed'}
                                size={14}
                                color={colors.textSecondary}
                                style={{ marginLeft: 4 }}
                            />
                        </View>
                    </View>
                </View>

                {basicInfo.description ? (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Descripción</Text>
                        <Text style={styles.descriptionText}>{basicInfo.description}</Text>
                    </View>
                ) : null}

                {basicInfo.description && fields.length > 0 && <View style={styles.divider} />}

                {fields.length > 0 ? (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Campos de información ({fields.length})</Text>
                        <View style={styles.fieldsList}>
                            {fields.map((field) => (
                                <View key={field.id} style={styles.fieldItem}>
                                    <Text style={styles.bullet}>•</Text>
                                    <Text style={styles.fieldText}>
                                        <Text style={styles.fieldLabel}>{field.label}</Text> ({getTypeLabel(field.type)})
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: 20,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: colors.borderLight,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    imagePlaceholder: {
        width: 80,
        height: 60,
        backgroundColor: colors.background,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    headerInfo: {
        flex: 1,
    },
    collectionName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.dark,
        marginBottom: 4,
    },
    visibilityRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    visibilityText: {
        fontSize: 14,
        color: colors.textSecondary,
    },
    section: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.dark,
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 14,
        color: colors.dark,
        lineHeight: 20,
    },
    divider: {
        height: 1,
        backgroundColor: colors.borderLight,
        marginBottom: 16,
    },
    fieldsList: {
        gap: 8,
    },
    fieldItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    bullet: {
        fontSize: 14,
        color: colors.textSecondary,
        marginRight: 8,
        marginTop: 1,
    },
    fieldText: {
        fontSize: 14,
        color: colors.textSecondary,
        flex: 1,
    },
    fieldLabel: {
        color: colors.dark,
        fontWeight: 'bold',
    },
});
