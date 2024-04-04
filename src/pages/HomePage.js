import React from 'react';
import Header from '../features/Header/Header';
import SubHeader from '../features/Header/SubHeader';
import AboutChoreQuest from '../features/About/AboutChoreQuest';
import Lottie from 'react-lottie';
import cutesies from '../Cutesies.json';
import TaskList from '../features/Tasks/TaskList';
import RewardCatalog from '../features/Rewards/RewardCatalog';
import UserStats from '../features/User/UserStats';

function HomePage() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: cutesies,
	};
	return (
		<>
			<Header />
			<SubHeader />
			<AboutChoreQuest />
			<TaskList />
			<RewardCatalog />
			<UserStats />
			{/* <Lottie
				className='cutesies'
				options={defaultOptions}
				height={350}
			/> */}
		</>
	);
}

export default HomePage;
