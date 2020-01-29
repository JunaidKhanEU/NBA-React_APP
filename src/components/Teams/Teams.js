import React, { useEffect, useState } from 'react'
import axios from 'axios'
import paths from '../utils/paths'

const Teams = () => {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    const getTeams = async () => {
      const res = await axios.get(paths.URLTEAMS)
      setTeams(res.data)
    }

    getTeams()
  }, [])

  const renderedTeams = () => {
    const teamRender = teams.map(team => <div key={team.id} style={{ flex: '0 1 calc(21rem - 1rem)', background: `url(/images/teams/${team.logo}) center/cover no-repeat`, height: '200px', margin: '2rem', cursor: 'pointer' }} className='team'/>)
    return teamRender
  }
  return (
    <div className='container'>
      <div>
        {teams.length > 0 ? <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>{renderedTeams()}</div> : null}

      </div>
    </div>
  )
}

export default Teams
