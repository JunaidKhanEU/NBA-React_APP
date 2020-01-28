import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <header>
      <div className='container'>
        <div className='row'>
          <div className='three columns'>
            <Link to='/' className='logo'>
              <span />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Footer
