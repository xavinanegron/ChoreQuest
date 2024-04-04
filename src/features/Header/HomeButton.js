import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function HomeButton() {
	return (
		<Link
			type='submit'
			className='home-btn'
			to='/'
		>
			Home{' '}
			<FontAwesomeIcon
				icon={faHouse}
				size='md'
			/>
		</Link>
	);
}

export default HomeButton;
