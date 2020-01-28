import React, { Component } from 'react'
import SliderComponent from '../SliderComponent/SliderComponent'
import Subscribe from '../utils/Subscribe'
class Home extends Component {
  state = { }
  render () {
    return (
      <>
        <SliderComponent />
        <Subscribe />
      </>
    )
  }
}

export default Home
