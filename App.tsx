import React from 'react'

import { ThemeProvider } from 'styled-components/native'
import { Text } from 'react-native'

import {
  useFonts,
  // eslint-disable-next-line camelcase
  Poppins_400Regular,
  // eslint-disable-next-line camelcase
  Poppins_500Medium,
  // eslint-disable-next-line camelcase
  Poppins_600SemiBold,
  // eslint-disable-next-line camelcase
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import Home from '@screens/Home'
import theme from './src/global/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Poppins_400Regular,
    // eslint-disable-next-line camelcase
    Poppins_500Medium,
    // eslint-disable-next-line camelcase
    Poppins_600SemiBold,
    // eslint-disable-next-line camelcase
    Poppins_700Bold,
  })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <Text>f</Text>}
    </ThemeProvider>
  )
}
