import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Colors from '../../../theme/Colors';
import { SearchField, CardContent, Card, Line } from '../../../components';
import { Styles } from './style';
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
                    content={"My project"}
                    />
                    <Line/> 
                     <CardContent
                    iconName={"search"}
                    content={"My project"}
                    /> 
                    <Line/>
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
                      <Line/>
                     <CardContent
                    iconName={"search"}
                    content={"My project"}
                    /> 
                      <Line/>
                     <CardContent
                    iconName={"search"}
                    content={"My project"}
                    /> 
                      <Line/>
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
