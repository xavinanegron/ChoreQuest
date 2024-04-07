import React from 'react';
import ExploreTaskButton from '../Tasks/ExploreTaskButton';
import ViewRewardsButton from '../Rewards/ViewRewardsButton';
import UserProfile from '../User/UserProfile';

function AboutChoreQuest() {
	return (
		<article className='about-container'>
			<div className='row align-items-center'>
				<div className='col-lg-8'>
					<div className='about-info-container'>
						<h2>About</h2>
						<p className='about-info'>
							ChoreQuest is a chore tracker app targeting kids and their
							parents, aiming to gamify household responsibilities. This
							friendly app transforms chores from mundane tasks into engaging,
							interactive quests, making chores a shared adventure rather than a
							burden. Users can easily assign tasks, track points, get rewarded
							for completing chores and create custom ones. ChoreQuest promotes
							teamwork and instills a sense of achievement in both parents and
							kids.
						</p>
					</div>
				</div>
				<div className='col-lg-4'>
					<div className='about-image d-flex justify-content-center align-items-center'>
						{/* Trophy stickers created by bukeicon - Flaticon */}
						<img
							src='/media/trophy.png'
							alt='trophy'
							className='img-fluid' // Add Bootstrap class for responsive images
						/>
					</div>
				</div>
			</div>
		</article>
	);
}

export default AboutChoreQuest;
