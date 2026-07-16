import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeLayout } from '../../../shared/layouts/HomeLayout';
import { Button } from '../../../shared/components/Button';
import { colors } from '../../../shared/theme/colors';
import { CollectionCard } from '../components/CollectionCard';
import { Ionicons } from '@expo/vector-icons';

export const Collections = () => {
  const navigation = useNavigation<any>();

  return (
    <HomeLayout
      showBack
      title="Colecciones"
      headerRight={
        <Button
          onPress={() => navigation.navigate('CreateCollection')}
          variant="primaryBlue"
          style={styles.addButton}
          icon={<Ionicons name="add" size={20} color={colors.white} />}
        />
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
    marginVertical: 0,
    paddingHorizontal: 0,
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
