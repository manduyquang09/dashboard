import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../theme/colors';
import { CardStyle } from './style';
import { verticalScale } from 'react-native-size-matters';
const Card = ({ title, children, color,isBold,height }) => {
    return (
        <View

            style={
              [  CardStyle.container_Card ,{
                height : height ? verticalScale(height) : "auto",
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

export default memo(Card);
