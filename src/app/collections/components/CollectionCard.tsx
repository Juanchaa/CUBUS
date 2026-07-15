import { TouchableOpacity, FlatList, Image, View, Text, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { colors } from '../../../shared/theme/colors';

interface Collection {
    id: string;
    title: string;
    itemCount: number;
    thumbnail: string;
}

const MOCK_COLLECTIONS: Collection[] = [
    {
        id: '1',
        title: 'Favoritos',
        itemCount: 24,
        thumbnail: 'https://picsum.photos/200/200?random=1',
    },
    {
        id: '2',
        title: 'Vacaciones 2024',
        itemCount: 56,
        thumbnail: 'https://picsum.photos/200/200?random=2',
    },
    {
        id: '3',
        title: 'Mascotas',
        itemCount: 12,
        thumbnail: 'https://picsum.photos/200/200?random=3',
    },
    {
        id: '4',
        title: 'Recetas',
        itemCount: 8,
        thumbnail: 'https://picsum.photos/200/200?random=4',
    },
];

export const CollectionCard = () => {
    const renderItem = ({ item }: { item: Collection }) => (
        <TouchableOpacity style={styles.item}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemCount}>{item.itemCount} items</Text>
            </View>
            <ChevronRight size={20} color={colors.dark} />
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={MOCK_COLLECTIONS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        paddingTop: '4%',
        paddingHorizontal: '4%',
        paddingBottom: '4%',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: colors.border,
        paddingVertical: '4%',
        paddingHorizontal: '3%',
        marginBottom: '3%',
        boxShadow: '5px 4px 2px rgba(7, 13, 30, 0.12)',
    },
    thumbnail: {
        width: '20%',
        aspectRatio: 1,
        borderRadius: 5,
        position: 'absolute',
        left: '1%',
        top: '5%',
        bottom: '5%'
    },
    itemInfo: {
        flex: 1,
        marginLeft: '25%',
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.dark,
    },
    itemCount: {
        fontSize: 14,
        color: colors.textSecondary,
        marginTop: '0.5%',
    },
});