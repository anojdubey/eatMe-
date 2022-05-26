import {useEffect, useState} from 'react'
import * as React from 'react'
import { View, Text, ScrollView,SafeAreaView} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BottomTab from '../components/home/BottomTab'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'
const YELP_API_KEY=
"r_oQW5OrhyrFVGJdLq3N-j-BE-ize5lOjKpvSTfciM82opK6OteAycqjAHWhaj5_IqkKM6ImPuE7X2sGmTBljGWngwFKIqubf8pgYjXK1XaCkxc-APIh9wNAyDBYYXYx"

export default function Home({navigation}) {
    const [activeTab, setActiveTab] = useState("Delivery");
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city,setCity]=useState('NYC');
    
    
    const getRestaurantFromYelp=()=>{
        const yelpUrl=
        `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions={
        headers:{
            Authorization:`Bearer ${YELP_API_KEY}`
        },
    };
        return fetch(yelpUrl,apiOptions)
        .then((res)=>res.json())
        .then(json=>setRestaurantData(json.businesses.filter((businesses)=> 
            businesses.transactions.includes(activeTab.toLowerCase())
            )
          )
        );
    };
    useEffect(()=>{
        getRestaurantFromYelp();
    },[city,activeTab]);
    return (
        <View style={{marginTop:10 , backgroundColor:'white',flex:1}} >
            <View style={{
                backgroundColor:'#eee',
                padding:20,
            }} >
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{height:520,
                        }}
            >
                <Categories/>
                <View style={{flex:1}}  >
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
                </View>
            </ScrollView>
            <Divider width={1} />
            <View style={{backgroundColor:'#eee'}} >
                <BottomTab/>
            </View>
        </View>
        
    )
}
