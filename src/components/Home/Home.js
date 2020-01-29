import React, { Component } from 'react'
import SliderComponent from '../SliderComponent/SliderComponent'
import Subscribe from '../utils/Subscribe'
import Articles from '../Articles/Articles'
import Poll from '../utils/Poll'
class Home extends Component {
  state = { }
  render () {
    return (
      <>
        <SliderComponent />
        <Subscribe />
        <div className='container'>
          <Articles />
          <Poll />
        </div>
      </>
    )
  }
}

export default Home
