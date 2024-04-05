import rewardsData from './RewardsData';
import HomeButton from '../Header/HomeButton';
import { useState } from 'react';
import AddRewardForm from './AddRewardForm';
import UserProfile from '../User/UserProfile';
import ExploreTaskButton from '../Tasks/ExploreTaskButton';

function RewardCatalog() {
	const [rewards, setRewards] = useState(rewardsData);
	const [nextId, setNextId] = useState(rewardsData.length + 1);

	// Function to add new custom reward to the rewards list
	const addReward = (newReward) => {
		// the variable below is just to test in the console
		const rewardWithId = { ...newReward, id: nextId };
		setRewards([...rewards, { ...newReward, id: nextId }]);
		setNextId(nextId + 1);
		console.log('Adding reward:', rewardWithId);
	};

	return (
		<>
			<div className='MenuRewardList d-flex justify-content-end'>
				<HomeButton />
				<ExploreTaskButton />
				<UserProfile />
			</div>
			<div className='rewards-list row'>
				<div className='rewards col-lg-12'>
					<h2 className='reward-title'>Explore Rewards 🏆</h2>
					<h2 className='reward-title-statement col-lg-12'>
						Unlock Your Treasures! Which reward will you claim?
					</h2>
					<div className='row'>
						{rewards.map((reward) => (
							<div
								key={reward.id}
								className='col-lg-4'
							>
								<div className='reward'>
									<span className='emoji'>{reward.emoji}</span>
									<h3 className='task-name'>{reward.name}</h3>
									{/* <h2 className="points-earned">{reward.points} points to redeem</h2> */}
									<button className='redeem-button col-lg-12'>
										{' '}
										Redeem for {reward.points} points
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='col-lg-12'>
					<div className='form'>
						<AddRewardForm addReward={addReward} />
					</div>
				</div>
			</div>
		</>
	);
}

export default RewardCatalog;
