import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'lucide-react-native';
import { CollectionBasicInfo } from '../../types';
import { colors } from '../../../../shared/theme/colors';

interface StepBasicInfoProps {
    data: CollectionBasicInfo;
    onChange: (data: CollectionBasicInfo) => void;
}

export default function StepBasicInfo({ data, onChange }: StepBasicInfoProps) {
    const handlePickPhoto = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.8,
        });
        if (!result.canceled) {
            onChange({ ...data, coverImageUri: result.assets[0].uri });
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Información básica</Text>
                <Text style={styles.subtitle}>Cuéntanos lo principal sobre tu colección.</Text>
            </View>

            <TouchableOpacity style={styles.photoBox} onPress={handlePickPhoto}>
                {data.coverImageUri ? (
                    <Image source={{ uri: data.coverImageUri }} style={styles.photoPreview} />
                ) : (
                    <>
                        <View style={styles.photoIconWrap}>
                            <Camera size={20} color={colors.skyBlue} />
                        </View>
                        <Text style={styles.photoLabel}>Agregar foto de portada</Text>
                        <Text style={styles.photoHint}>máximo 5MB</Text>
                    </>
                )}
            </TouchableOpacity>

            <View>
                <Text style={styles.label}>Nombre de la colección</Text>
                <TextInput
                    placeholder="Ej. Monedas Antiguas"
                    value={data.name}
                    onChangeText={(text) => onChange({ ...data, name: text })}
                    style={styles.input}
                />
            </View>

            <View>
                <Text style={styles.label}>Descripción (opcional)</Text>
                <TextInput
                    placeholder="Describe tu colección..."
                    value={data.description}
                    onChangeText={(text) => onChange({ ...data, description: text.slice(0, 150) })}
                    maxLength={150}
                    multiline
                    numberOfLines={3}
                    style={[styles.input, styles.textArea]}
                />
                <Text style={styles.counter}>{data.description.length}/150</Text>
            </View>

            <View>
                <Text style={styles.label}>¿Quién puede verla?</Text>
                {[
                    { value: 'public', title: 'Todos', desc: 'Cualquier usuario puede ver tu colección' },
                    { value: 'private', title: 'Solo yo', desc: 'Solo tú puedes ver tu colección' },
                ].map((opt) => (
                    <TouchableOpacity
                        key={opt.value}
                        style={[styles.radioRow, data.visibility === opt.value && styles.radioRowActive]}
                        onPress={() => onChange({ ...data, visibility: opt.value as 'public' | 'private' })}
                    >
                        <View style={styles.radioCircleOuter}>
                            {data.visibility === opt.value && <View style={styles.radioCircleInner} />}
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.radioTitle}>{opt.title}</Text>
                            <Text style={styles.radioDesc}>{opt.desc}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { gap: 20 },
    title: { fontSize: 16, fontWeight: '600', color: colors.dark },
    subtitle: { fontSize: 13, color: colors.textSecondary, marginTop: 2 },
    photoBox: {
        borderWidth: 2,
        borderColor: colors.lightBlue,
        borderStyle: 'dashed',
        borderRadius: 12,
        backgroundColor: colors.background,
        paddingVertical: 28,
        alignItems: 'center',
        gap: 6,
        overflow: 'hidden',
    },
    photoIconWrap: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.borderLight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoLabel: { fontSize: 13, fontWeight: '600', color: colors.skyBlue },
    photoHint: { fontSize: 11, color: colors.placeholder },
    photoPreview: { width: '100%', height: 140, borderRadius: 8 },
    label: { fontSize: 13, fontWeight: '500', color: colors.dark, marginBottom: 6 },
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: colors.dark,
    },
    textArea: { height: 80, textAlignVertical: 'top' },
    counter: { fontSize: 11, color: colors.placeholder, textAlign: 'right', marginTop: 4 },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        borderWidth: 1,
        borderColor: colors.borderLight,
        borderRadius: 10,
        padding: 12,
        marginTop: 8,
    },
    radioRowActive: { borderColor: colors.skyBlue, backgroundColor: colors.background },
    radioCircleOuter: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: colors.skyBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
    },
    radioCircleInner: { width: 9, height: 9, borderRadius: 5, backgroundColor: colors.skyBlue },
    radioTitle: { fontSize: 13, fontWeight: '600', color: colors.dark },
    radioDesc: { fontSize: 12, color: colors.textSecondary },
});