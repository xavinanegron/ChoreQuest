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
			<FontAwesomeIcon
				icon={faTrophy}
				size='sm'
			/>{' '}
			Rewards{' '}
		</Link>
	);
}

export default ViewRewardsButton;
