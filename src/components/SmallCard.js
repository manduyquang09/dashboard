import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors,FontSize } from '../theme';
import { TinyCard_Style } from './style';
const SmallCard = () => {
    return (
        <View
            style={TinyCard_Style.container}
        >
            <View
                style={[TinyCard_Style.container_Row, {
                    marginBottom: 8
                }]}
            >
                <Text
                    style={TinyCard_Style.text}
                >Views</Text>
                <View
                    style={TinyCard_Style.containerIcon}
                >
                    <Text>1</Text>
                </View>
            </View>
            {/*  */}
            <View
                style={TinyCard_Style.container_Row}
            >
                <Text
                    style={TinyCard_Style.numberTxt}
                >7,265</Text>
                <Text
                    style={TinyCard_Style.percentTxt}
                >+11.01%</Text>
            </View>
        </View>
    );
}

export default SmallCard;
