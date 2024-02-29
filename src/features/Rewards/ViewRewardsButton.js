import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'


function ViewRewardsButton() {
  return (
    <button 
          type='submit' 
          className='view-rewards-btn'>
            Explore Rewards <FontAwesomeIcon icon={faTrophy} size='lg' />
    </button>
  )
}

export default ViewRewardsButton