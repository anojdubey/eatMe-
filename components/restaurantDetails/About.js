import * as React from 'react'
import { View, Text, Image } from 'react-native'

export default function About({route,...props}) {
    const {name,image,price,reviews,rating,categories}= route.params ;
    const formatCategories = categories.map((cat)=>cat.title).join(' - ')
    const description=`${formatCategories} ${price ? " - "+price:""} - 🎫-${rating} ⭐(${reviews}+)`;
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description}/>
        </View>
    )
}
const RestaurantImage=(props)=>{
    return(
        <Image source={{uri:props.image}} style={{
            width:'100%',
            height:180,
        }} />
    )
}
const RestaurantName=(props)=>{
    return(
        <Text style={{
            fontWeight:'700',
            fontSize:20,
            color:'black',
            marginTop:10,
            marginHorizontal:15
        }} >
            {props.name}
        </Text>
    )
}
const RestaurantDescription=(props)=>{
    return(
        <Text style={{
            marginTop:10,
            marginHorizontal:15,
            color:'black'
        }} >
            {props.description}
        </Text>
    )
}