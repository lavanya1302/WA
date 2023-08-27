import React from 'react'
import Background from '../components/Background'
import img from '../components/img'
import Header from '../components/Header'
import Para from '../components/Para'
import Button from '../components/Button'

export default function LastScreen({ navigation }) {
  return (
    <Background>
      <img />
      <Header>Welcome</Header>
      <Para>
         You are logged in.
      </Para>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
          })
        }
      >
        Sign out
      </Button>
    </Background>
  )
}