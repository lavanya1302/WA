import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader'
import Button from '../components/Button'
import img from '../components/img'
import Background from '../components/Background'



export default function Dashboard({ navigation }) {
  return (
    <Background>
      <img />
      <AppHeader>News Letter</AppHeader>
        
      <Button
        mode="contained"
        onPress={() => navigation.navigate('NewsScreen')}
      >
        News
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Weather')}
      >
        Weather
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Horoscope')}
      >
        Horoscope
      </Button>
    </Background>
  )
}