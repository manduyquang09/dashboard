import { StyleSheet } from 'react-native';
import { Colors, FontSize,Padding ,Margin} from '../theme';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export const InputStyle = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        backgroundColor: '#e9e8e8',
        alignItems: 'center',
        borderRadius: 25,
        paddingHorizontal: Padding.padding20,
        paddingVertical: 3,
        elevation: 4,
    },
    erorrTxt: { color: 'red', marginTop: 5, marginLeft: 10 }
})

const ButtonStyle = StyleSheet.create({
    containerIcon: {
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 4,
        position: 'absolute',
        left:Margin.margin20 ,
        //borderRadius: 10,
        alignItems: 'flex-end',

    },
    label: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: FontSize.font16,
        color: Colors.DEFAULT_WHITE,
        flex: 1,
    }
})

const SearchField_Style = StyleSheet.create({
    container_Search: {
        width: scale(361),
        height: verticalScale(36),
        //36
        paddingHorizontal: Padding.padding8,
        paddingVertical: Padding.padding7,
        borderRadius: 10,
        backgroundColor: Colors.DEFAULT_GREY,
        flexDirection: "row",
        alignItems: 'center',
   
    },
    textField: {
flex:1,
        height: verticalScale(0),
        width: scale(303),
        fontSize: FontSize.font16+1,
        letterSpacing: -0.43,
        fontWeight: "400",
        lineHeight:moderateScale(17),
        color: Colors.ICON_GREY,
    }
})

const CardStyle = StyleSheet.create({
    container_Card: {
    //    width: "100%",
    alignSelf:"center",
   width: scale(361),
        borderRadius: 16,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        elevation: 1,
        opacity: 1,
        marginBottom: Margin.margin16,
    },
    titleText: {
        fontSize: FontSize.font18,
        paddingTop: Padding.padding16,
        paddingHorizontal: Padding.padding16,
        fontWeight: "regular",

        marginBottom: 8,
    },
    container_CardContent: {
        width: 361,
        height: 60,
        padding: 16,
        marginBottom: Margin.margin16,
        flexDirection: "row",
        alignItems: 'center',


    },
    contexText: {
        marginLeft: Margin.margin16,
        fontWeight: "400",
        fontSize: FontSize.font18,
        color: Colors.DEFAULT_BLACK
    }
})
const TinyCard_Style =StyleSheet.create({
    container: {
        backgroundColor:Colors.DEFAULT_BLUE,
        padding: Padding.padding16,
        borderRadius: 16,
        elevation: 3,
        width: scale(176),
        minWidth: scale(160),
        height: verticalScale(100)
    }
    ,
    text: {
        fontWeight: "regular",
        fontSize: moderateScale(FontSize.font14),
        lineHeight: verticalScale(20),
        color: Colors.DEFAULT_WHITE
    },
    container_Row:{
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    },
    numberTxt: {
        fontWeight: "bold",
        fontSize:moderateScale( FontSize.font18),
        lineHeight: verticalScale(28),
        color: Colors.DEFAULT_WHITE
    },
    percentTxt: {
        fontSize: moderateScale(FontSize.font14),

        lineHeight: verticalScale(20),
        fontWeight: "regular",
        color: Colors.DEFAULT_WHITE,

    } ,
    containerIcon:{
        padding:moderateScale(Padding.padding7-2),
        paddingHorizontal:moderateScale(Padding.padding10), 
        elevation:4,
        borderRadius:40,
        backgroundColor:Colors.DEFAULT_BLUE
    }
})

export {
    CardStyle,
    SearchField_Style,
    ButtonStyle,
    TinyCard_Style
}