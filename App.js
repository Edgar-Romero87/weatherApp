import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/weatherInfo.js';
import UnitsPicker from './components/unitsPicker.js';
import ReloadIcon from './components/reloadIcon.js';
import WeatherDetails from './components/weatherDetails.js'

const API = '0d149d4267a5395c2bf15630323a28c3';
const baseWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?`;
const image = { uri: "https://i.pinimg.com/736x/64/22/14/6422144cc3c6300be3ea86e94f4a2cfe.jpg"}

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [ unitsSystem, setUnitsSystem ] = useState('imperial');

  useEffect(() => {
    load()
  }, [unitsSystem]);

    async function load() {
     
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const { latitude, longitude } = location.coords

      const weatherUrl = `${baseWeatherUrl}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${API}`;

      const response = await fetch(weatherUrl);

      const result = await response.json();
      //console.log(result)
      
      setLocation(result);
     
    };
 
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    // let text = 'Waiting..';
    // text = JSON.stringify(location);
    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
          {/* <Text style={styles.paragraph}>{text}</Text> */}
          {/* <ActivityIndicator size='large'/> */}
          <WeatherInfo location={location} />
          <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem}/>
          <WeatherDetails location={location} unitsSystem={unitsSystem} />
          <ReloadIcon load={load}/>
        </View>
      </ImageBackground>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
