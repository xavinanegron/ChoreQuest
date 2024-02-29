import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function UserProfile() {
  return (
    <button 
          type='submit' 
          className='my-profile-btn'>
            My Current Stats <FontAwesomeIcon icon={faUser} size='lg' />
            
    </button>
  )
}

export default UserProfile