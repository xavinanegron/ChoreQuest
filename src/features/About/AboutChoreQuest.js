import React from 'react';
import ExploreTaskButton from '../Tasks/ExploreTaskButton';
import ViewRewardsButton from '../Rewards/ViewRewardsButton';
import UserProfile from '../User/UserProfile';

function AboutChoreQuest() {
	return (
		<div className='about-container'>
			<div className='row'>
				<div className='about-image col-lg-6'>
					<img
						src='/media/motherandchild.jpg'
						alt='mom and her kid'
					/>
				</div>
				<div className='col-lg-6 about-info-container'>
					<h2>Make chores fun! 🎉</h2>
					<p className='about-info'>
						ChoreQuest is a chore tracker app targeting kids and their parents,
						aiming to gamify household responsibilities. This friendly app
						transform chores from mundane tasks into engaging, interactive
						quests, making chores a shared adventure rather than a burden.
					</p>
					<p className='about-info'>
						Allowing children to earn points for completing tasks, users can
						easily assign tasks, track their points, get rewarded for completing
						chores and create custom ones. ChoreQuest promotes teamwork and
						instills a sense of achievement in both parents and kids.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutChoreQuest;
