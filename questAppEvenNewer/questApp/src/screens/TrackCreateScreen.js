import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { requestForegroundPermissionsAsync } from 'expo-location';


const TrackCreateScreen = () => {

  const startTracking = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted){
          throw new Error('Location permission not granted');
        }
      }
        catch(e){
          setErr(e);
        }
      }

  return (
    <SafeAreaView forceInset={{top: 'always'}} >
        <Text h3>Create a Track</Text>
        <Map/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;
