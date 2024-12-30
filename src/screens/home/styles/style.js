import { StyleSheet } from 'react-native';
import Colors from '../../../theme/Colors';
import { FontSize } from '../../../theme';
export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.HOME_BACKGROUND
    },
    titleTxt: {
        color: Colors.DEFAULT_BLACK,
        fontWeight: "700",
        fontSize: FontSize.font34,

        letterSpacing: 0.4,
        lineHeight: 41,
        paddingTop: 3,
        paddingBottom: 8,
        marginBottom: 16,
        paddingHorizontal: 16

    }, 
   searchContainer: {
        width: 393,
        height: 52,
        paddingTop: 1,
        paddingHorizontal: 16,
        paddingBottom: 15,


    }
})
