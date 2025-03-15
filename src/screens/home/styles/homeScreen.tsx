import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Colors from '../../../theme/colors';
import { SearchField, CardContent, Card, Line } from '../../../components';
import { Styles } from './style';
import router from '../../../utils/router';
const HomeScreen = () => {
    return (
        <View
            style={Styles.container}
        >
            <Text
                style={
                    Styles.titleTxt
                }
            >Home</Text>
            <View
                style={Styles.searchContainer}
            >
                <SearchField />
            </View>
            {/* {/* body /} */}
            <View
                style={{
                    paddingHorizontal: 16,

                }}
            >
                <Card
                    title={"Favorite"}
                >
                    <CardContent
                        iconName={"search"}
                        content={"Overview"}
                        routeName={router.OVERVIEW}
                    />
                    <Line />
                    <CardContent
                        iconName={"search"}
                        content={"user List"}
                        routeName={router.USER_lIST}
                    />
                    <Line />
                    <CardContent
                        iconName={"search"}
                        content={"My project"}
                    />
                </Card>
                <Card
                    title={"dashboards"}
                >
                    <CardContent
                        iconName={"search"}
                        content={"My project"}
                    />
                    <Line />
                    <CardContent
                        iconName={"search"}
                        content={"My project"}
                    />
                    <Line />
                    <CardContent
                        iconName={"search"}
                        content={"My project"}
                    />
                    <Line />
                    <CardContent
                        iconName={"search"}
                        content={"My project"}
                    />

                </Card>
            </View>
        </View>
    );
}



export default HomeScreen;
