import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';

export default function BottomTab() {
    return (
        <View style={{
            flexDirection:'row',
            margin:10,
            marginHorizontal:20,
            justifyContent:"space-between"
        }} >
            <Icon icon="home" text="Home"/>
            <Icon icon="search" text="Browse"/>
            <Icon icon="receipt" text="Orders"/>
            <Icon icon="user" text="Account"/>
        </View>
    )
}

const Icon=(props)=>{
    return(
        <TouchableOpacity>
            <View style={{alignItems:'center',width:60,height:55,borderRadius:15,backgroundColor:'white'}} >
            <FontAwesome5 name={props.icon} size={25} style={{
            marginBottom:3, alignSelf:'center',color:'black'
        }}/>
        <Text style={{color:'black'}} >{props.text}</Text>
        </View>
        </TouchableOpacity>
    );    
}