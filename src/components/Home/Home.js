import React, { Component } from 'react'
import SliderComponent from '../SliderComponent/SliderComponent'
import Subscribe from '../utils/Subscribe'
import Articles from '../Articles/Articles'

class Home extends Component {
  state = { }
  render () {
    return (
      <>
        <SliderComponent />
        <Subscribe />
        
        <Articles />
      </>
    )
  }
}

export default Home
