import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Movies from "../pages/Movies";
import StackRoutes from "./stackroutes";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { color } from "react-native-reanimated";

const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle:{
                    backgroundColor: '#111111',
                    paddingTop: 20,  
                   
                },
                drawerActiveBackgroundColor: '#239db0',
                drawerActiveTintColor: '#111111',
                drawerInactiveTintColor: '#fff',

            }}
        >
            <Drawer.Screen 
            name="HomeDrawer" 
            component={StackRoutes}
            options={{
                title: "Home",
                drawerIcon: ({ focused, size, color}) => (
                    <MaterialCommunityIcons
                        name={focused ? 'movie-open' : 'movie-outline'}
                        size={size}
                        color={color}
                    />
                )
            }}
            />
            <Drawer.Screen 
            name="Movies" 
            component={Movies}
            options={{
                title: 'Meus Filmes',

                drawerIcon: ({focused, size, color}) => (
                    <MaterialCommunityIcons
                        name={focused ? 'archive' : 'archive-outline'}
                        size={size}
                        color={color}
                    />
                )
            }}
            />
        </Drawer.Navigator>
    );
}