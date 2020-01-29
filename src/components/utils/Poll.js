import React, { Component } from 'react'
import axios from 'axios'
import paths from './paths'
import cookie from 'react-cookies'

class Poll extends Component {
  state = {
    pollTeams: [],
    error: false
  }

 getPoll = async () => {
   try {
     const res = await axios.get(`${paths.URLTEAMS}?poll=true&_sort=count`)
     this.setState({
       pollTeams: res.data
     })
   } catch (error) {
     this.setState({
       error: true
     })
   }
 }

 componentDidMount () {
   this.getPoll()
 }

handleClick=(count, id) => {
  const getCookie = cookie.load('poll')
  if (getCookie === undefined) {
    axios(`http://localhost:4000/teams/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      data: JSON.stringify({ count: count + 1 })
    }).then(res => {
      cookie.save('poll', true)
      this.getPoll()
    })
  } else {
    this.setState({
      error: true
    })
  }
}

showPoll= () => {
  const position = ['1ST', '2ND', '3RD']
  return this.state.pollTeams.map((team, i) => (
    <div key={i} className='poll_item' onClick={() => this.handleClick(team.count, team.id)}>
      <img src={`/images/teams/${team.logo}`} alt={team.team} />
      <h4>{position[i]}</h4>
      <div>{team.count} votes</div>
    </div>
  ))
}

render () {
  return (
    <>
      <div className='home_poll'>
        <h3>Who will be the next champion ?</h3>
        <>
          <div className='poll_container'>
            {this.showPoll()}
          </div>
          {
            this.state.error && <div>Sorry you already voted</div>
          }
        </>
      </div>
    </>
  )
}
}

export default Poll
