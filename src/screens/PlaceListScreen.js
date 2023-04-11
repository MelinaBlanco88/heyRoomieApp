import React from 'react'
import { FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import PlaceItem from '../components/PlaceItem'
import { loadPlaces } from '../store/places.actions'

const PlaceListScreen = ({navigation}) => {
    const dispatch = useDispatch();

    React.useEffect(()=>{
     dispatch(loadPlaces())
    },[])

    const places = useSelector(state=>state.places.places)

    console.log(places)
    const renderPlaceItem = (data) => (
        <PlaceItem  
            title={data.item.title}
            image={data.item.image}
            address="Calle falsa 123"
            onSelect={()=>navigation.navigate("Detalle")}
        />
    )

    return (
        <FlatList style={{flex:1}}
            data={places}
            renderItem={renderPlaceItem}
            keyExtractor ={item => item.id}
        />
    )
}



export default PlaceListScreen