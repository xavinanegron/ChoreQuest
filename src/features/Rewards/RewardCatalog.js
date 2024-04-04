import rewardsData from './RewardsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import HomeButton from '../Header/HomeButton';
import ExploreTaskButton from '../Tasks/ExploreTaskButton';
import UserProfile from '../User/UserProfile';

function RewardCatalog() {
	return (
		<div className='rewards-list row'>
			<div className='rewards col-lg-12'>
				<div className='d-flex justify-content-end mt-4'>
					<HomeButton />
				</div>
				<h2 className='reward-title'>Explore Rewards 🏆</h2>
				<h2 className='reward-title-statement col-lg-12'>
					Unlock Your Treasures! Which reward will you claim?
				</h2>
				<div className='row'>
					{rewardsData.map((reward) => (
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
		</div>
	);
}

export default RewardCatalog;
