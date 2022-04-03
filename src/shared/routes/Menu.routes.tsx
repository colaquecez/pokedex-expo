import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Favorites } from '../../screens/';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export type RootStackParamList = {
  Home: undefined;
  Details: { name: string; url: string; image: string };
};

const MenuTabBar = createBottomTabNavigator();

const MenuTabBarRoute = () => {
  return (
    <MenuTabBar.Navigator>
      <MenuTabBar.Screen
        options={{
          tabBarLabel: 'Pokemons',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="pokemon-go"
              size={size}
              color={color}
            />
          ),
          headerShown: false
        }}
        name="Home"
        component={Home}
      />
      <MenuTabBar.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="heart" size={size} color={color} />
          )
        }}
        name="Favorites"
        component={Favorites}
      />
    </MenuTabBar.Navigator>
  );
};

export default MenuTabBarRoute;
