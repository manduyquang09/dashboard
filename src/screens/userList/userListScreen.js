import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const UserListScreen = () => {
    const value = 5
    const [state ,setState]= useState(true)
    return (
        <View
        style={{flex:1, backgroundColor:"red"}}
        >
            <View
            style={{flexDirection:'row', 
width:'100%',
height:100,
backgroundColor:'blue'
            }}
            >
                <View
                style={{flex:1,backgroundColor:"green",
   
   borderTopRightRadius:70              
                }}
                ></View>
                <View
                style={{flex:1,
             backgroundColor:"green"
                }}
                >
     <Text>backgroundColor</Text>
     <Text>vlue : {value}</Text>
     <TouchableOpacity
     onPress={()=>{
setState(!setState)
value+1

     }}
     >
        <Text>press{value}</Text>
     </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default UserListScreen;
