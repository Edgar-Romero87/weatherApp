import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import {colors} from '../utils/index.js';

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfo({location}) {
  const {
    main: {temp},
    weather: [details],
    name,
  } = location
  const { icon, main, description } = details

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style= { styles.weatherInfo }>
      <Text style={ styles.secondaryText }>{name}</Text>
      <Image style={ styles.weatherIcon } source={{ uri: iconUrl }}/>
      <Text style={ styles.primaryText }>{temp}°</Text>
      <Text style={ styles.weatherDescription }>{description}</Text>
      <Text style={ styles.secondaryText }>{main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherDescription: {
    textTransform: 'capitalize'
  },
  weatherIcon: {
    width: 100,
    height: 100
  },
  primaryText: {
    fontSize: 40,
    color: PRIMARY_COLOR
  },
  secondaryText: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
    marginTop: 10
  }
})