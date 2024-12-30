import { StyleSheet } from "react-native";
import { Colors } from "../../theme";
import FontSize from "../../theme/fontSize";
export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        borderBottomRightRadius: 300,
    },
    containerTxt:
    {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
    },
    LoginTxt: {
        fontSize: FontSize.font34,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    Connect_Container: {
        marginHorizontal: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    }
 ,
  ContainerBtn:{
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 15,
  }
});
