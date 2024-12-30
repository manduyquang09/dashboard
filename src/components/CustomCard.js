import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../theme/Colors';
import { CardStyle } from './style';
const Card = ({ title, children, color,isBold,height }) => {
    return (
        <View

            style={
              [  CardStyle.container_Card ,{
                height : height ? height : "auto",
              }]
            }>
            <Text
                style={[CardStyle.titleText,{
                    fontWeight :color !=null ? "bold" :"normal",
                    color: color != null ? color :Colors.ICON_GREY 
                }]}
            >{title}</Text>
            {children}
        </View>
    );
}

export default Card;
