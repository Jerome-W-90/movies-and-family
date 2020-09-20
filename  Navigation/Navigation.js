/**
 * Imports
 */
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../components/Search';
import FilmDetail from '../components/FilmDetail';
import MyFavorites from '../components/MyFavorites';
import News from '../components/News';

// https://reactnavigation.org/docs/stack-navigator/ (V5)
const Stack = createStackNavigator();

// https://reactnavigation.org/docs/bottom-tab-navigator (V5)
const Tab = createBottomTabNavigator();

function MySearchNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ title: 'Rechercher un film' }}
            />
            <Stack.Screen
                name="FilmDetail"
                component={FilmDetail}
                options={{ title: 'Détail du film' }}
            />
        </Stack.Navigator>
    )
}

function MyFavoritesNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MyFavorites"
                component={MyFavorites}
                options={{ title: 'Mes favoris' }}
            />
            <Stack.Screen
                name="FilmDetail"
                component={FilmDetail}
                options={{ title: 'Détail du film' }}
            />
        </Stack.Navigator>
    )
}

function NewsNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="News"
                component={News}
                options={{ title: 'Nouveautés et meilleures notes' }}
            />
            <Stack.Screen
                name="FilmDetail"
                component={FilmDetail}
                options={{ title: 'Détail du film' }}
            />
        </Stack.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        switch (route.name) {
                            case "Rechercher":
                                return <Image source={require("../Images/search.png")} />
                            case "Mes favoris":
                                return <Image source={require("../Images/InFavorite.png")} />
                            case "News":
                                return <Image source={require("../Images/news.png")} />
                        }
                    },
                })}>
                <Tab.Screen name="Rechercher" component={MySearchNavigation} />
                <Tab.Screen name="Mes favoris" component={MyFavoritesNavigation} />
                <Tab.Screen name="News" component={NewsNavigation} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
