import React from 'react'
import Background from '../components/Background'
import img from '../components/img'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Para'

export default function HomeScreen({ navigation }) {
  return (
    <Background>
      <img />
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Create an account
      </Button>
    </Background>
  )
}