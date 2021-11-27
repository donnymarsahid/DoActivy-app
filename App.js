import React, { Fragment } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/screens/Routes'

const App = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Fragment>
  )
}

export default App
