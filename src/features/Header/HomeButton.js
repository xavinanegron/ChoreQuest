import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function HomeButton() {
	return (
		<Link
			type='submit'
			to='/'
			className='home-btn'
		>
			<FontAwesomeIcon
				icon={faHouse}
				size='sm'
			/>{' '}
			Home
		</Link>
	);
}

export default HomeButton;
