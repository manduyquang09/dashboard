import React, { memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardStyle } from './style';
import { useNavigation } from '@react-navigation/native';

const CardContent = ({ iconName, content,routeName}) => {
    const navigation =useNavigation()
    return (
        <TouchableOpacity
        onPress={()=> {
            navigation.navigate(routeName)
        }}
        >
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
        </TouchableOpacity>
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

export default memo( CardContent);
