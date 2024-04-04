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
			My Current Stats{' '}
			<FontAwesomeIcon
				icon={faUser}
				size='md'
			/>
		</Link>
	);
}

export default UserProfile;
