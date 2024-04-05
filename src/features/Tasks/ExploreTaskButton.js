import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ExploreTaskButton() {
	return (
		<Link
			type='submit'
			className='explore-task-btn'
			to='/tasks'
		>
			<FontAwesomeIcon
				icon={faSearch}
				size='sm'
			/>{' '}
			Chores{' '}
		</Link>
	);
}

export default ExploreTaskButton;
