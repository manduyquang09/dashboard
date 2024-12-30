import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../theme/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardStyle } from './style';
const CardContent = ({ iconName, content }) => {
    return (
        <View>
            <View
                style={
                    CardStyle.container_CardContent
                }
            >
                <Icon name={iconName} size={24} color={"red"} />
                <Text
                    style={CardStyle.contexText}
                >{content}</Text>
        
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    CardContent: {
        width: 361,
        height: 60,
        padding: 16,
        marginBottom: 16,
        flexDirection: "row",
        alignItems: 'center',
    

    },
    contexText: {
        marginLeft: 16,
        fontWeight: "400",
        fontSize: 18,
        color: Colors.DEFAULT_BLACK
    }
})

export default CardContent;
