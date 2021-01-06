import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../utils/index.js';

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDetails({ location, unitsSystem }) {

  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = location

  //metric: meters/second.
  //imperial: miles/hour. 
  const windSpeed = unitsSystem == 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`;

  return (
    <View style={ styles.weatherDetails }>
      <View style={ styles.weatherDetailsRow }>
        <View style={styles.weatherDetailsBox}>
          <View style={ styles.weatherDetailsRow }>
            <FontAwesome5 name='temperature-low' size={30} color={PRIMARY_COLOR}  />
            <View>
              <Text>Feels like:</Text>
              <Text style={ styles.secondaryText}>{feels_like}°</Text>
            </View>
          </View>
        </View>

        <View style={ styles.weatherDetailsBox }>
          <View style={ styles.weatherDetailsRow }>
              <MaterialCommunityIcons name='water' size={35} color={PRIMARY_COLOR}  />
              <View>
                <Text>Humidity:</Text>
                <Text style={ styles.secondaryText}>{humidity} %</Text>
              </View>
            </View>
          </View>
      </View>

      <View style={ styles.weatherDetailsRow }>
        <View style={styles.weatherDetailsBox}>
          <View style={ styles.weatherDetailsRow }>
            <MaterialCommunityIcons name='weather-windy' size={30} color={PRIMARY_COLOR}  />
            <View>
              <Text>Wind Speed:</Text>
              <Text style={ styles.secondaryText}>{windSpeed}</Text>
            </View>
          </View>
        </View>

        <View style={ styles.weatherDetailsBox }>
          <View style={ styles.weatherDetailsRow }>
              <MaterialCommunityIcons name='speedometer' size={35} color={PRIMARY_COLOR}  />
              <View>
                <Text>Pressure:</Text>
                <Text style={ styles.secondaryText}>{pressure} hPa</Text>
              </View>
            </View>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: 60,
    margin: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 30
  },
  weatherDetailsItems: {
    alignItems: 'flex-end',

  },
  secondaryText: {
    fontSize: 15,
    color: SECONDARY_COLOR,
    fontWeight: '700',

  }
})
