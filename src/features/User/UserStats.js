import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import HomeButton from '../Header/HomeButton';

function UserStats() {
	return (
		<div className='user-stat-container row'>
			<div className='user-header col-lg-12'>
				<div className='d-flex justify-content-end mt-4'>
					<HomeButton />
				</div>

				<h2 className='stats-title col-lg-12'>My Stats 🥇</h2>
				<h2 className='stats-title-question col-lg-12'>
					Track Your Achievements!
				</h2>
				<div className='row stats-container'>
					<div className='col-lg-6 avail-container'>
						<div className='points-image'>
							<img
								src='/media/coin.jpg'
								alt='coin'
								className='coin-image'
							/>
							<h3 className='stats-points'>625</h3>
						</div>
						<h4 className='points-description'>Available Points</h4>
					</div>
					<div className='col-lg-6 lifetime-container'>
						<div className='points-image'>
							<img
								src='/media/coin.jpg'
								alt='coin'
								className='coin-image'
							/>
							<h3 className='stats-points'>1340</h3>
						</div>
						<h4 className='points-description'>Total Lifetime Points</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserStats;
