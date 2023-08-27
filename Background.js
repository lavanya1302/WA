import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../theme/color'

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../assets/t.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 2,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 2,
    padding: 21,
    width: '100%',
    maxWidth: 335,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
