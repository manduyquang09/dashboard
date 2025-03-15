import { StyleSheet } from 'react-native';

import { FontSize,Colors,Padding ,Margin} from '../../../theme';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
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
        paddingTop: verticalScale(Padding.padding3),
        paddingBottom: verticalScale(Padding.padding16),//
        marginBottom:verticalScale( Margin.margin16),
        paddingHorizontal: scale(Padding.padding16)

    }, 
   searchContainer: {
        width: scale(393),
        height: verticalScale(52),
        paddingTop: verticalScale(Padding.padding1),
        paddingHorizontal: scale(Padding.padding16),
        paddingBottom: verticalScale(Padding.padding15),
        alignItems:"center"
        ,
        alignSelf:"center",
     //   backgroundColor:"red"
    }
})
