import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Styles } from './style';
import HomeScreen from '../screens/home/styles/homeScreen';
import { OverviewScreen, UserListScreen } from '../screens';
import Router from '../utils/router';
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const One = () => {
    return (<View>

    </View>)
}

const TabBar = () => {
    return (
        <Tab.Navigator initialRouteName={Router.HOME}
            screenOptions={({ route }) => ({
                tabBarLabel: () => false,
                tabBarStyle: Styles.tabContainer,
                tabBarIconStyle: Styles.IconContainer,
                // tabBarBackground: () => (
                //     <View
                //         style={{
                //             width: 361,
                //             height: 76,

                //             padding: 16,
                //             borderRadius: 80,
                //              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                //              backdropFilter: 'blur(40px)',
                //             //backgroundColor: "blue",
                //             // flexDirection: "row",
                //             // alignItems: "flex-start" ,


                //         }}
                //     />
                // ),
                tabBarIcon: ({ color, size }) => {
                    switch (route.name) {
                        case Router.HOME:
                            return <Icon name={'home'} size={30} color={"black"}

                            />
                            break;
                        case "one":
                            return <Icon name={'home'} size={30} color={"black"}
                            />
                            break;
                        case "two":
                            return <Icon name={'home'} size={30} color={"black"}
                            />
                            break;
                        case "three":
                            return <Icon name={'home'} size={30} color={"black"}
                            />
                            break;
                        case "four":
                            return <Icon name={'home'} size={30} color={"black"}
                            />
                            break;
                        case "five":
                            return <Icon name={'home'} size={30} color={"black"}
                            />
                            break;

                        default:
                            break;
                    }
                }
            })}
        >
            <Tab.Screen
                name={Router.HOME}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen name='two' component={One} />
            <Tab.Screen name='three' component={One} />
            <Tab.Screen name='four' component={One} />
            <Tab.Screen name='five' component={One} />

        </Tab.Navigator>
    );
};

const AppStack = () => {

    return <Stack.Navigator
    initialRouteName={Router.HOME}
screenOptions={{
    headerShown:false
}
}
>
    <Stack.Screen
        name={Router.HOME}
        component={HomeScreen}
    
    />
    <Stack.Screen
        name={Router.OVERVIEW}
        component={OverviewScreen}
        options={{
            title:"Overview",
            headerTitleAlign:"center",
            headerBackTitle:"back to login",
            headerShown:true,
        }}

    />
    <Stack.Screen
        name={Router.USER_lIST}
        component={UserListScreen}
        options={{
            title:"user List",
            headerTitleAlign:"center",
    headerBackTitle:"back",
    headerShown:true,
        }}
    />
</Stack.Navigator>
}


export default AppStack;
