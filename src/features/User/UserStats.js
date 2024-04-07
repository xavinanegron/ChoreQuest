import React, { useState, useEffect } from 'react';
import HomeButton from '../Header/HomeButton';
import ExploreTaskButton from '../Tasks/ExploreTaskButton';
import ViewRewardsButton from '../Rewards/ViewRewardsButton';

function UserStats() {
	return (
		<>
			<div className='MenuStats d-flex justify-content-end'>
				<HomeButton />
				<ExploreTaskButton />
				<ViewRewardsButton />
			</div>
			<div className='user-stat-container row'>
				<div className='user-header col-lg-12'>
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
								<h3 className='stats-points'></h3>
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
								<h3 className='stats-points'></h3>
							</div>
							<h4 className='points-description'>Total Lifetime Points</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserStats;
