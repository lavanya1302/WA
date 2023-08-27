import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../theme/core'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 13,
  },
})
