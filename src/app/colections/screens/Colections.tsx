import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { HomeLayout } from '../../../shared/layouts/HomeLayout';
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

export const Colections = () => {
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
    <HomeLayout
      showBack
      title="Colecciones"
      headerRight={
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      }
    >
      <View style={styles.emptyState}>
        <Image
          source={require('../../../../assets/icons/2d8f54f7-1ceb-4277-8853-85a179ae2093.png')}
          style={styles.emptyImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.homeText}>
        <Text style={styles.emptyText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>

      </View>
      <FlatList
        data={MOCK_COLLECTIONS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </HomeLayout>
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
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.skyBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '8%',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  emptyImage: {
    width: '100%',
    maxWidth: 100,
    aspectRatio: 1,
    marginBottom: '4%',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark,
    textAlign: 'center',
  },
  homeText:{
    paddingBottom:'3%',
    marginHorizontal: '6%'
  }
});
