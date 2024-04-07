import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function UserProfile() {
	return (
		<Link
			type='submit'
			className='my-profile-btn'
			to='/stats'
		>
			<FontAwesomeIcon
				icon={faUser}
				size='sm'
			/>{' '}
			My Stats{' '}
		</Link>
	);
}

export default UserProfile;
