import { StyleSheet } from 'react-native';
import { Colors, FontSize } from '../theme';
export const InputStyle = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        backgroundColor: '#e9e8e8',
        alignItems: 'center',
        borderRadius: 25,
        paddingHorizontal: 20,
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
        left: 20,
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
        width: 361,
        height: 36,

        //36
        paddingHorizontal: 8,
        paddingVertical: 7,
        borderRadius: 10,
        backgroundColor: Colors.DEFAULT_GREY,
        flexDirection: "row",
        alignItems: 'center'
    },
    textField: {

        height: 22,
        width: 303,
        fontSize: FontSize.font16,

        letterSpacing: -0.43,
        fontWeight: "400",
        color: Colors.ICON_GREY,
    }
})

const CardStyle = StyleSheet.create({
    container_Card: {
        width: "100%",
        borderRadius: 16,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        elevation: 1,
        opacity: 1,
        marginBottom: 16,
    },
    titleText: {
        fontSize: FontSize.font18,
        paddingTop: 16,
        paddingHorizontal: 16,
        fontWeight: "regular",

        marginBottom: 8,
    },
    container_CardContent: {
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
        fontSize: FontSize.font18,
        color: Colors.DEFAULT_BLACK
    }
})
const TinyCard_Style =StyleSheet.create({
    container: {
        backgroundColor:Colors.DEFAULT_BLUE,
        padding: 16,
        borderRadius: 16,
        elevation: 1,
        width: 176,
        minWidth: 160,
        height: 100
    }
    ,
    text: {
        fontWeight: "regular",
        fontSize: FontSize.font14,
        lineHeight: 20,
        color: Colors.DEFAULT_WHITE
    },
    container_Row:{
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    },
    numberTxt: {
        fontWeight: "bold",
        fontSize: FontSize.font18,
        lineHeight: 28,
        color: Colors.DEFAULT_WHITE
    },
    percentTxt: {
        fontSize: FontSize.font14,

        lineHeight: 20,
        fontWeight: "regular",
        color: Colors.DEFAULT_WHITE,

    }
})

export {
    CardStyle,
    SearchField_Style,
    ButtonStyle,
    TinyCard_Style
}