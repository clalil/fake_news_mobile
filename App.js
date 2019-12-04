import React from "react"
import HomeScreen from "./Screens/Home/HomeScreen"
import AppNavigator from './AppNavigator'

export default class App extends React.Component {
  render() {
    return (
      <>
    <AppNavigator />
    <HomeScreen />
    </>
    )
  }
}
