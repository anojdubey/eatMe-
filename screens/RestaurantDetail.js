import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'

const foods=[
  {
      title:"PavBhaji",
      description:"With bohot Butter",
      price:'$6.7',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wgEBCl1gkNurn17SHcgkITf_AZ63LkC2Gd28gcAO0-V-fxQ&s"
  },
  {
      title:"PavVada",
      description:"With bohot Butter& Masala",
      price:'$10',
      image:"https://www.merisaheli.com/wp-content/uploads/2018/03/vada-pav.jpg"
  },
  {
      title:"MasalPav",
      description:"With bohot Butter",
      price:'$12.5',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wgEBCl1gkNurn17SHcgkITf_AZ63LkC2Gd28gcAO0-V-fxQ&s"
  },
  {
      title:"Vada",
      description:"With bohot Butter& Masala",
      price:'$5.0',
      image:"https://www.merisaheli.com/wp-content/uploads/2018/03/vada-pav.jpg"
  },
  {
      title:"Bhaji",
      description:"With bohot Butter& Masala",
      price:'$5.5',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wgEBCl1gkNurn17SHcgkITf_AZ63LkC2Gd28gcAO0-V-fxQ&s"
  },
  {
      title:"Pava",
      description:"With bohot ButteWith bohot Butter& Masala",
      price:'$7.0',
      image:"https://www.merisaheli.com/wp-content/uploads/2018/03/vada-pav.jpg"
  },
];

export default function RestaurantDetail({route,navigation}) {
    return (
        <View style={{flex:1}} >
          <About route={route} />
          <Divider width={1.8} style={{marginVertical:20}}/>
          <MenuItems restaurantName={route.params.name} foods={foods} />
          <ViewCart navigation={navigation}/>
        </View>
    )
}
