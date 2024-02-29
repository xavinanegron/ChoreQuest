import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { name } from './WelcomeUser'

function UserStats() {
  return (
    <div className='user-stat-container'>
      <div className='user-header row'>
        <h2 className='stats-title col-lg-12'>My Stats <FontAwesomeIcon icon={faUser} size='md' /></h2>

        <div className='col-lg-4'>
          <h3>125</h3>
          <h4>Current Points</h4>
        </div>

        <div className='col-lg-4'>
          <h3>525</h3>
          <h4>Total Earned</h4>
        </div>

        <div className='col-lg-4'>

        </div>

      </div>
    </div>
  )
}

export default UserStats