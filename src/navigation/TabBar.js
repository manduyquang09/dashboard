import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../screens/home/styles/homeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import OverviewScreen from '../screens/overview/OverviewScreen';
import { Styles } from './style';
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const One = () => {
    return (<View>

    </View>)
}

const TabBar = () => {
    return (
        <Tab.Navigator initialRouteName='two'
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
                        case "Home":
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
                name='Home'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen name='two' component={OverviewScreen} />
            <Tab.Screen name='three' component={One} />
            <Tab.Screen name='four' component={One} />
            <Tab.Screen name='five' component={One} />

        </Tab.Navigator>
    );
};

const Detail = () => {
    return <View></View>
}
const AppStack = () => {

    <Stack.Navigator
        initialRouteName='tab'

    >
        <Stack.Screen

            name='tab'
            component={TabBar}

        />
        <Stack.Screen
            name='detail'
            component={Detail}
        />
    </Stack.Navigator>
}


export default TabBar;
