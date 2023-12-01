import { StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../../slices/NavSlice.js'
import { useDispatch, useSelector } from 'react-redux';
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from '@env';

const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!origin || !destination) return;
    
    //zoom and fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    });
  }, [origin, destination])

  useEffect(() => {
    if(!origin || !destination) return;

    const getTravelTime = async () => {
      
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?
        &destinations=${destination.description}
        &origins=${origin.description}
        &units=imperial
        &key=${GOOGLE_API_KEY}`
      )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
      })
  }

    getTravelTime()
  }, [origin, destination, GOOGLE_API_KEY])

  return (
    <MapView
    ref={mapRef}
      style={{flex:1, height: 300}}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      { origin && destination && (
        <MapViewDirections
          origin={ origin.description }
          destination={ destination.description }
          apikey = { GOOGLE_API_KEY }
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude:origin.location.lng,
          }}
          title='Origin'
          description={ origin.description }
          identifier='origin'
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title='Destination'
          description={ destination.description }
          identifier='destination'
        />
      )}
    </MapView>
  )
}

export default Map;

const styles = StyleSheet.create({})