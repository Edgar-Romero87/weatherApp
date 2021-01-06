import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/index.js';

export default function ReloadIcon({load}) {

  const reloadWeather = Platform.OS == 'ios' ? 'ios-refresh' : 'md-refresh';

  return (
    <View style={ styles.reloadIcon }>
      <Ionicons onPress={load} name={reloadWeather} size={24} color={colors.PRIMARY_COLOR} />
    </View>
  )
}

const styles = StyleSheet.create ({
  reloadIcon: {
    position: 'absolute',
    top: 100,
    right: 20
  },
})
