import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../theme/colors';

const Line = () => {
    return (
        <View
        style={{
            width:"90%"
            , height:1.5,
            backgroundColor:Colors.DEFAULT_GREY, 
            alignSelf:"flex-end"
        }}
        >
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Line;
