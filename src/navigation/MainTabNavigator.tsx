import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Gavel, Package, Users, ShoppingBag } from 'lucide-react-native';

// Import Screens (we only have HomeScreen implemented so far, using it as placeholder for others for now)
import { HomeScreen } from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    switch (route.name) {
                        case 'Inicio':
                            return <Home {...({ color, size } as any)} />;
                        case 'Subastas':
                            return <Gavel {...({ color, size } as any)} />;
                        case 'Colecciones':
                            return <Package {...({ color, size } as any)} />;
                        case 'Comunidades':
                            return <Users {...({ color, size } as any)} />;
                        case 'Tiendas':
                            return <ShoppingBag {...({ color, size } as any)} />;
                        default:
                            return <Home {...({ color, size } as any)} />;
                    }
                },
                tabBarActiveTintColor: '#00b4d8',
                tabBarInactiveTintColor: '#9e9e9e',
                tabBarStyle: {
                    paddingBottom: 5,
                    height: 60,
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 1,
                    borderTopColor: '#EEEEEE',
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontWeight: '500',
                }
            })}
        >
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Subastas" component={HomeScreen} />
            <Tab.Screen name="Colecciones" component={HomeScreen} />
            <Tab.Screen name="Comunidades" component={HomeScreen} />
            <Tab.Screen name="Tiendas" component={HomeScreen} />
        </Tab.Navigator>
    );
};
