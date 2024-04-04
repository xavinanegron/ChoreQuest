import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ViewRewardsButton() {
	return (
		<Link
			type='submit'
			className='view-rewards-btn'
			to='/rewards'
		>
			Explore Rewards{' '}
			<FontAwesomeIcon
				icon={faTrophy}
				size='md'
			/>
		</Link>
	);
}

export default ViewRewardsButton;
