import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import { ButtonStyle } from './style';

const CustomButton = ({label, Icon, onPress, backgroundColor, isFlex, marginhorizontal
, Padding

}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
   
        flex : isFlex? 1 :0 ,
        backgroundColor: backgroundColor,
        borderRadius: 25,
        padding: Number(Padding),
        marginHorizontal: Number(marginhorizontal),
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        elevation:15
      }}>
      {Icon !== undefined ? (
        <View
          style={ButtonStyle.containerIcon}>
          {Icon}
        </View>
      ) : null}

      <Text
        style={ButtonStyle.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
