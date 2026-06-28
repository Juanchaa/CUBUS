import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Star, MapPin, ShoppingBag } from 'lucide-react-native';
import { HomeLayout } from '../../../shared/layouts/HomeLayout';
import { colors } from '../../../shared/theme/colors';

const STORES_DATA = [
  {
    id: '1',
    name: 'ColeccionArte MX',
    logo: 'https://i.pravatar.cc/150?img=3',
    cover: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    sales: 234,
    location: 'Ciudad de México',
    category: 'Arte',
  },
  {
    id: '2',
    name: 'Vintage Relojes',
    logo: 'https://i.pravatar.cc/150?img=8',
    cover: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    sales: 189,
    location: 'Bogotá',
    category: 'Relojería',
  },
  {
    id: '3',
    name: 'Figuras & Comics',
    logo: 'https://i.pravatar.cc/150?img=16',
    cover: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    sales: 412,
    location: 'Lima',
    category: 'Coleccionables',
  },
  {
    id: '4',
    name: 'Numismática Pro',
    logo: 'https://i.pravatar.cc/150?img=24',
    cover: 'https://images.unsplash.com/photo-1605106250963-4da5c3f44adf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    sales: 156,
    location: 'Santiago',
    category: 'Numismática',
  },
];

export const StoresScreen = () => {
  const renderStore = ({ item }: { item: (typeof STORES_DATA)[0] }) => (
    <TouchableOpacity style={styles.storeCard}>
      <Image source={{ uri: item.cover }} style={styles.storeCover} resizeMode="cover" />
      <View style={styles.storeInfo}>
        <Image source={{ uri: item.logo }} style={styles.storeLogo} />
        <View style={styles.storeDetails}>
          <Text style={styles.storeName}>{item.name}</Text>
          <Text style={styles.storeCategory}>{item.category}</Text>
          <View style={styles.storeMeta}>
            <View style={styles.ratingRow}>
              <Star size={14} color={colors.yellow} fill={colors.yellow} />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
            <Text style={styles.metaSeparator}>|</Text>
            <Text style={styles.salesText}>{item.sales} ventas</Text>
          </View>
        </View>
      </View>
      <View style={styles.storeFooter}>
        <MapPin size={14} color={colors.textSecondary} />
        <Text style={styles.locationText}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <HomeLayout>
      <FlatList
        data={STORES_DATA}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderStore}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <View style={styles.headerIcon}>
              <ShoppingBag size={32} color={colors.skyBlue} />
            </View>
            <Text style={styles.headerTitle}>Tiendas</Text>
            <Text style={styles.headerSubtitle}>
              Explora tiendas de coleccionismo y encuentra piezas únicas
            </Text>
          </View>
        }
      />
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerIcon: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  storeCard: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  storeCover: {
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0',
  },
  storeInfo: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 0,
    marginTop: -24,
    alignItems: 'flex-end',
  },
  storeLogo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: colors.white,
    backgroundColor: colors.white,
  },
  storeDetails: {
    flex: 1,
    marginLeft: 12,
    paddingBottom: 8,
  },
  storeName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.dark,
  },
  storeCategory: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  storeMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  metaSeparator: {
    marginHorizontal: 8,
    color: colors.border,
    fontSize: 12,
  },
  salesText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  storeFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  locationText: {
    marginLeft: 6,
    fontSize: 12,
    color: colors.textSecondary,
  },
});
