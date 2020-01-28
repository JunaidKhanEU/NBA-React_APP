import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Teams from './components/Teams/Teams'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/teams' render={() => <Teams />} />
        <Route exact path='/' render={() => <Home />} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
