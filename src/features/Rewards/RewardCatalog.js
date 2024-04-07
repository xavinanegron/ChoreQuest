import rewardsData from './RewardsData';
import HomeButton from '../Header/HomeButton';
import { useState } from 'react';
import AddRewardForm from './AddRewardForm';
import UserProfile from '../User/UserProfile';
import ExploreTaskButton from '../Tasks/ExploreTaskButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

function RewardCatalog() {
	const [rewards, setRewards] = useState(rewardsData);
	const [sortBy, setSortBy] = useState('asc');

	// Function to add new custom reward to the rewards list
	const addReward = (newReward) => {
		// the variable below is just to test in the console
		const rewardWithId = { ...newReward, id: rewards.length + 1 };
		setRewards([...rewards, rewardWithId]);

		console.log('Adding reward:', rewardWithId);
	};

	// To delete a task
	const deleteReward = (id) => {
		setRewards(rewards.filter((reward) => reward.id !== id));
	};

	// Function to handle sort changes
	const handleSort = (e) => {
		setSortBy(e.target.value);
		sortRewards(e.target.value);
	};

	// Function to sort tasks
	const sortRewards = () => {
		const sortedRewards = [...rewards];
		sortedRewards.sort((a, b) => {
			if (sortBy === 'asc') {
				return a.points - b.points; // low to high points
			} else {
				return b.points - a.points; // high to low points
			}
		});
		setRewards(sortedRewards);
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
					<div className='sorting'>
						<select
							id='sort'
							onChange={handleSort}
							value={sortBy}
							className='sort-select'
						>
							<option
								value='desc'
								className='add-input'
							>
								Sort By Points: Low to High
							</option>
							<option value='asc'>Sort By Points: High to Low </option>
						</select>
					</div>
					<div className='row'>
						{rewards.map((reward) => (
							<div
								key={reward.id}
								className='col-lg-4'
							>
								<div className='reward'>
									<FontAwesomeIcon
										icon={faX}
										onClick={() => deleteReward(reward.id)}
										className='trash-icon '
										style={{ color: 'red', fontSize: '24px' }}
									/>
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
