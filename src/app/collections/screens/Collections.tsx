import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeLayout } from '../../../shared/layouts/HomeLayout';
import { colors } from '../../../shared/theme/colors';
import { CollectionCard } from '../components/CollectionCard';

export const Collections = () => {
  const navigation = useNavigation<any>();

  return (
    <HomeLayout
      showBack
      title="Colecciones"
      headerRight={
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CreateCollection')}>
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
      <CollectionCard />
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
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
  homeText: {
    paddingBottom: '3%',
    marginHorizontal: '6%'
  }
});
