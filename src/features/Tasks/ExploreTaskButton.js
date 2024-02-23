import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function ExploreTaskButton() {
  return (
      <button 
            type='submit' 
            className='explore-task-btn'>
              Discover Chores <FontAwesomeIcon icon={faSearch} size='lg' />
      </button>
  )
}

export default ExploreTaskButton