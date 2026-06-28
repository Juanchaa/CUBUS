import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  PlusCircle,
  Camera,
  Package,
  FileText,
  Gavel,
  Gift,
  Users,
  ShoppingBag,
  MoreVertical,
  Globe,
  ThumbsUp,
  MessageCircle,
  Share2,
} from 'lucide-react-native';
import { HomeLayout } from '../../../shared/layouts/HomeLayout';
import { colors } from '../../../shared/theme/colors';

const FEED_DATA = [
  {
    id: '1',
    user: {
      name: 'David Collector',
      avatar: 'https://i.pravatar.cc/150?img=11',
      time: 'Hace 2h',
    },
    content: 'La nueva coleccion de Formula uno Genial',
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    likes: 25,
    comments: 25,
  },
  {
    id: '2',
    user: {
      name: 'David Collector',
      avatar: 'https://i.pravatar.cc/150?img=11',
      time: 'Hace 2h',
    },
    content: 'La nueva coleccion de Formula uno Genial',
    image:
      'https://images.unsplash.com/photo-1532561685579-890d7ed111e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    likes: 12,
    comments: 8,
  },
];

export const HomeScreen = () => {
  const renderPost = ({ item }: { item: (typeof FEED_DATA)[0] }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.user.avatar }} style={styles.postAvatar} />
        <View style={styles.postUserInfo}>
          <Text style={styles.postUserName}>{item.user.name}</Text>
          <View style={styles.postTimeRow}>
            <Text style={styles.postTime}>{item.user.time}</Text>
            <Globe size={12} color={colors.textSecondary} style={{ marginLeft: 4 }} />
          </View>
        </View>
        <TouchableOpacity>
          <MoreVertical size={20} color={colors.dark} />
        </TouchableOpacity>
      </View>

      <Text style={styles.postContent}>{item.content}</Text>

      <Image source={{ uri: item.image }} style={styles.postImage} resizeMode="cover" />

      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <ThumbsUp size={24} color={colors.dark} />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle size={24} color={colors.dark} />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, { marginLeft: 'auto' }]}>
          <Share2 size={24} color={colors.dark} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <HomeLayout>
      <FlatList
        data={FEED_DATA}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderPost}
        contentContainerStyle={styles.feedContainer}
        ListHeaderComponent={
          <>
            <View style={styles.shareWidget}>
              <View style={styles.shareInputRow}>
                <Image
                  source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                  style={styles.avatar}
                />
                <TextInput
                  style={styles.shareInput}
                  placeholder="¿Qué quieres compartir hoy?"
                  placeholderTextColor={colors.placeholder}
                />
                <TouchableOpacity>
                  <PlusCircle size={32} color={colors.skyBlue} />
                </TouchableOpacity>
              </View>

              <View style={styles.divider} />

              <View style={styles.shareActions}>
                <TouchableOpacity style={styles.shareActionButton}>
                  <Camera size={20} color={colors.dark} />
                  <Text style={styles.shareActionText}>Foto / Video</Text>
                </TouchableOpacity>

                <View style={styles.verticalDivider} />

                <TouchableOpacity style={styles.shareActionButton}>
                  <Package size={20} color={colors.dark} />
                  <Text style={styles.shareActionText}>Nueva pieza</Text>
                </TouchableOpacity>

                <View style={styles.verticalDivider} />

                <TouchableOpacity style={styles.shareActionButton}>
                  <FileText size={20} color={colors.dark} />
                  <Text style={styles.shareActionText}>Publicacion</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.quickAccessContainer}>
              <View style={styles.quickAccessHeader}>
                <Text style={styles.quickAccessTitle}>Accesos rápidos</Text>
                <TouchableOpacity>
                  <Text style={styles.quickAccessLink}>Ver todos</Text>
                </TouchableOpacity>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.quickAccessItem}>
                  <View style={styles.quickAccessIconContainer}>
                    <Package size={30} color={colors.skyBlue} />
                  </View>
                  <Text style={styles.quickAccessItemText}>Colecciones</Text>
                </View>

                <View style={styles.quickAccessItem}>
                  <View style={styles.quickAccessIconContainer}>
                    <Gavel size={30} color={colors.yellow} />
                  </View>
                  <Text style={styles.quickAccessItemText}>Subastas</Text>
                </View>

                <View style={styles.quickAccessItem}>
                  <View style={styles.quickAccessIconContainer}>
                    <Gift size={30} color={colors.skyBlue} />
                  </View>
                  <Text style={styles.quickAccessItemText}>Sorteos</Text>
                </View>

                <View style={styles.quickAccessItem}>
                  <View style={styles.quickAccessIconContainer}>
                    <Users size={30} color={colors.green} />
                  </View>
                  <Text style={styles.quickAccessItemText}>Comunidades</Text>
                </View>

                <View style={styles.quickAccessItem}>
                  <View style={styles.quickAccessIconContainer}>
                    <ShoppingBag size={30} color={colors.skyBlue} />
                  </View>
                  <Text style={styles.quickAccessItemText}>Tiendas</Text>
                </View>
              </ScrollView>
            </View>
          </>
        }
      />
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    paddingBottom: 20,
  },
  shareWidget: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 12,
    paddingTop: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  shareInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.border,
  },
  shareInput: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 14,
    color: colors.dark,
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderLight,
  },
  shareActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  shareActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareActionText: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  verticalDivider: {
    width: 1,
    height: '60%',
    backgroundColor: colors.borderLight,
  },
  quickAccessContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  quickAccessHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  quickAccessTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.dark,
  },
  quickAccessLink: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.skyBlue,
  },
  quickAccessItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 70,
    marginLeft: 16,
  },
  quickAccessIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  quickAccessItemText: {
    fontSize: 11,
    color: colors.dark,
    fontWeight: '500',
    textAlign: 'center',
  },
  postCard: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.border,
  },
  postUserInfo: {
    flex: 1,
    marginLeft: 12,
  },
  postUserName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 2,
  },
  postTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postTime: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  postContent: {
    fontSize: 14,
    color: colors.dark,
    marginBottom: 12,
    lineHeight: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
    color: colors.dark,
  },
});
