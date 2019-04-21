import React, { Component } from 'react'
import AppContainer from "./navigation"
import AppContext from './context'

export default class App extends Component {
  render() {
    return (
      <AppContext.Provider value={{foo: 'bar'}}>
        <AppContainer/>
      </AppContext.Provider>
    );
  }
}
