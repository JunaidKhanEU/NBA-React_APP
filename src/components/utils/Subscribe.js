import React, { Component } from 'react'
import axios from 'axios'
import paths from './paths'
class Subscribe extends Component {
  state={
    email: '',
    error: false,
    success: false,
    alreadyIn: false
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

 saveSubscription = (email) => {
   axios.get(`${paths.URLSUBS}?email=${email}`)
     .then(res => {
       if (!res.data.length) {
         // post user
         axios(paths.URLSUBS, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
           },
           data: JSON.stringify({ email: email })
         }).then(res => {
           this.setState({
             email: '',
             success: true
           })
           this.clearMessages()
         })
       } else {
         // already in
         this.setState({
           email: '',
           alreadyIn: true
         })
         this.clearMessages()
       }
     })
 }

 clearMessages = () => {
   setTimeout(() => {
     this.setState({
       error: false,
       success: false,
       alreadyIn: false
     })
   }, 2000)
 }

  handleSubmit = (e) => {
    e.preventDefault()
    const email = this.state.email
    const regex = /^\S+@\S+\.\S+$/
    if (regex.test(email)) {
      this.saveSubscription(email)
    } else {
      this.setState({
        error: true
      })
      this.clearMessages()
    }
  }

  render () {
    const state = this.state

    return (
      <div className='subcribe_panel'>
        <h3>Subscribe to use</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type='email' placeholder='youremail@gmail.com'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div className={state.error ? 'error show' : 'error'}> check Your Email</div>
            <div className={state.success ? 'success show' : 'success'}> Thank you</div>
            <div className={state.alreadyIn ? 'success show' : 'success'}> Already register</div>
          </form>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odit saepe in nobis atque reiciendis velit nemo odio aut eos quis.</p>
      </div>
    )
  }
}

export default Subscribe
