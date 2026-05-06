import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Menu, Search, MessageSquareText, PlusCircle, Camera, Package, FileText, Gavel, Gift, Users, ShoppingBag, MoreVertical, Globe, ThumbsUp, MessageCircle, Share2 } from 'lucide-react-native';

const FEED_DATA = [
    {
        id: '1',
        user: {
            name: 'David Collector',
            avatar: 'https://i.pravatar.cc/150?img=11',
            time: 'Hace 2h'
        },
        content: 'La nueva coleccion de Formula uno Genial',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        likes: 25,
        comments: 25
    },
    {
        id: '2',
        user: {
            name: 'David Collector',
            avatar: 'https://i.pravatar.cc/150?img=11',
            time: 'Hace 2h'
        },
        content: 'La nueva coleccion de Formula uno Genial',
        image: 'https://images.unsplash.com/photo-1532561685579-890d7ed111e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        likes: 12,
        comments: 8
    }
];

export const HomeScreen = () => {

    const renderPost = ({ item }: { item: typeof FEED_DATA[0] }) => (
        <View style={styles.postCard}>
            {/* Post Header */}
            <View style={styles.postHeader}>
                <Image source={{ uri: item.user.avatar }} style={styles.postAvatar} />
                <View style={styles.postUserInfo}>
                    <Text style={styles.postUserName}>{item.user.name}</Text>
                    <View style={styles.postTimeRow}>
                        <Text style={styles.postTime}>{item.user.time}</Text>
                        <Globe size={12} color="#777" style={{ marginLeft: 4 }} />
                    </View>
                </View>
                <TouchableOpacity>
                    <MoreVertical size={20} color="#070d1e" />
                </TouchableOpacity>
            </View>

            {/* Post Content */}
            <Text style={styles.postContent}>{item.content}</Text>

            {/* Post Image */}
            <Image source={{ uri: item.image }} style={styles.postImage} resizeMode="cover" />

            {/* Post Actions */}
            <View style={styles.postActions}>
                <TouchableOpacity style={styles.actionButton}>
                    <ThumbsUp size={24} color="#070d1e" />
                    <Text style={styles.actionText}>{item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <MessageCircle size={24} color="#070d1e" />
                    <Text style={styles.actionText}>{item.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, { marginLeft: 'auto' }]}>
                    <Share2 size={24} color="#070d1e" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Menu size={28} color="#070d1e" />
                </TouchableOpacity>

                {/* Logo Placeholder */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/images/Logo.png')}
                        style={styles.headerLogo}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Search size={24} color="#070d1e" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                        <MessageSquareText size={24} color="#070d1e" />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={FEED_DATA}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={renderPost}
                contentContainerStyle={styles.feedContainer}
                ListHeaderComponent={
                    <>
                        {/* Share Widget */}
                        <View style={styles.shareWidget}>
                            <View style={styles.shareInputRow}>
                                <Image
                                    source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                                    style={styles.avatar}
                                />
                                <TextInput
                                    style={styles.shareInput}
                                    placeholder="¿Qué quieres compartir hoy?"
                                    placeholderTextColor="#9e9e9e"
                                />
                                <TouchableOpacity>
                                    <PlusCircle size={32} color="#00b4d8" />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.divider} />

                            <View style={styles.shareActions}>
                                <TouchableOpacity style={styles.shareActionButton}>
                                    <Camera size={20} color="#070d1e" />
                                    <Text style={styles.shareActionText}>Foto / Video</Text>
                                </TouchableOpacity>

                                <View style={styles.verticalDivider} />

                                <TouchableOpacity style={styles.shareActionButton}>
                                    <Package size={20} color="#070d1e" />
                                    <Text style={styles.shareActionText}>Nueva pieza</Text>
                                </TouchableOpacity>

                                <View style={styles.verticalDivider} />

                                <TouchableOpacity style={styles.shareActionButton}>
                                    <FileText size={20} color="#070d1e" />
                                    <Text style={styles.shareActionText}>Publicacion</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Quick Access */}
                        <View style={styles.quickAccessContainer}>
                            <View style={styles.quickAccessHeader}>
                                <Text style={styles.quickAccessTitle}>Accesos rápidos</Text>
                                <TouchableOpacity>
                                    <Text style={styles.quickAccessLink}>Ver todos</Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickAccessScroll}>
                                <View style={styles.quickAccessItem}>
                                    <View style={styles.quickAccessIconContainer}>
                                        <Package size={30} color="#00b4d8" />
                                    </View>
                                    <Text style={styles.quickAccessItemText}>Colecciones</Text>
                                </View>

                                <View style={styles.quickAccessItem}>
                                    <View style={styles.quickAccessIconContainer}>
                                        <Gavel size={30} color="#facc15" />
                                    </View>
                                    <Text style={styles.quickAccessItemText}>Subastas</Text>
                                </View>

                                <View style={styles.quickAccessItem}>
                                    <View style={styles.quickAccessIconContainer}>
                                        <Gift size={30} color="#00b4d8" />
                                    </View>
                                    <Text style={styles.quickAccessItemText}>Sorteos</Text>
                                </View>

                                <View style={styles.quickAccessItem}>
                                    <View style={styles.quickAccessIconContainer}>
                                        <Users size={30} color="#4ade80" />
                                    </View>
                                    <Text style={styles.quickAccessItemText}>Comunidades</Text>
                                </View>

                                <View style={styles.quickAccessItem}>
                                    <View style={styles.quickAccessIconContainer}>
                                        <ShoppingBag size={30} color="#00b4d8" />
                                    </View>
                                    <Text style={styles.quickAccessItemText}>Tiendas</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </>
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#f8f9fa',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    headerLogo: {
        height: 30,
        width: 140,
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 16,
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: '#facc15',
        borderRadius: 10,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#070d1e',
    },
    feedContainer: {
        paddingBottom: 20,
    },
    shareWidget: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        marginTop: 10,
        borderRadius: 12,
        paddingTop: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
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
        backgroundColor: '#e0e0e0',
    },
    shareInput: {
        flex: 1,
        marginHorizontal: 12,
        fontSize: 14,
        color: '#070d1e',
    },
    divider: {
        height: 1,
        backgroundColor: '#eeeeee',
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
        color: '#070d1e',
    },
    verticalDivider: {
        width: 1,
        height: '60%',
        backgroundColor: '#eeeeee',
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
        color: '#070d1e',
    },
    quickAccessLink: {
        fontSize: 14,
        fontWeight: '600',
        color: '#00b4d8',
    },
    quickAccessScroll: {
        paddingLeft: 16,
    },
    quickAccessItem: {
        alignItems: 'center',
        marginRight: 16,
        width: 70,
    },
    quickAccessIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    quickAccessItemText: {
        fontSize: 11,
        color: '#070d1e',
        fontWeight: '500',
        textAlign: 'center',
    },
    postCard: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
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
        backgroundColor: '#e0e0e0',
    },
    postUserInfo: {
        flex: 1,
        marginLeft: 12,
    },
    postUserName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#070d1e',
        marginBottom: 2,
    },
    postTimeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postTime: {
        fontSize: 12,
        color: '#777',
    },
    postContent: {
        fontSize: 14,
        color: '#070d1e',
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
        color: '#070d1e',
    }
});
