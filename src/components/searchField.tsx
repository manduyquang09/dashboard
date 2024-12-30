import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Colors from '../theme/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchField_Style } from './style';
const SearchField = () => {
    return (
        <View
            style={SearchField_Style.container_Search}
        >
            <Icon name="search" size={17} color={Colors.ICON_GREY}

            />

            <TextInput
                placeholder="Search"
                placeholderTextColor={Colors.ICON_GREY}
                style={SearchField_Style.textField}
            />

            <Icon name="microphone" size={17} color={Colors.ICON_GREY}

            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchField;
