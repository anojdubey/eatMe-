import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({cityHandler}) {
    return (
        <View style={{
            flexDirection:'row',
            marginTop:15,
        }}>
            <GooglePlacesAutocomplete
            // query={{key:"AIzaSyD8qxLT6MM4_jP2n9x3rCoIsTI4weUsjn4"}}
            placeholder='Search'
            predefinedPlaces={[home1,home2,home3,home4,home5,home6,home7,
            home8]}
            onPress={(data,details=null)=>{
                console.log(data.description);
                const city=data.description;
                cityHandler(city);
                
            
            }}   
            styles={{
                textInput:{
                    borderRadius:20,
                    fontWeight:'700',
                    marginTop:7,
                    color:'black'
                },
                textInputContainer:{
                    borderRadius:50,
                    flexDirection:'row',
                    alignItems:'center',
                    marginRight:10,
                }
            }}
            renderLeftButton={()=>(
            <View >
                <Ionicons color='black' name='location-sharp' size={24} />
            </View>)}
            renderRightButton={()=>(
                <View style={{flexDirection:'row',
                marginRight:8,
                backgroundColor:'white',
                borderRadius:70,
                padding:5,
                height:30,
                alignItems:'center'
                }} >
                    <AntDesign name='clockcircle' size={13} style={{marginRight:4,color:'black'}}/>
                    <Text style={{color:'black'}} >Search</Text>
                </View>
            )}
            />
        </View>
    )
}


// search Data
const home1=
    {
        description:'Russia',
    }
const home2=
{
    description:'Hollywood',
}
const home3={
    description:'San Fransisco',
}
const home4={
    description:'USA'
}
const home5={
    description:'Vinece'
}
const home6={
    description:'NYC'
}
const home7={
    description:'Roma'
}
const home8={
    description:'Indianapolis'
}