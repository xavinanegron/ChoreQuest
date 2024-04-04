import ExploreTaskButton from '../Tasks/ExploreTaskButton';
import ViewRewardsButton from '../Rewards/ViewRewardsButton';
import UserProfile from '../User/UserProfile';

const SubHeader = () => {
	return (
		<div className='menu-buttons'>
			<ExploreTaskButton />
			<ViewRewardsButton />
			<UserProfile />
		</div>
	);
};

export default SubHeader;
