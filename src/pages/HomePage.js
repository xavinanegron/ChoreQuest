import React from 'react';
import Header from '../features/Header/Header';
import SubHeader from '../features/Header/SubHeader';
import AboutChoreQuest from '../features/About/AboutChoreQuest';
import TaskList from '../features/Tasks/TaskList';
import RewardCatalog from '../features/Rewards/RewardCatalog';
import UserStats from '../features/User/UserStats';
import Footer from '../features/Footer/Footer';

function HomePage() {
	return (
		<>
			<Header />
			<SubHeader />
			<AboutChoreQuest />
			<TaskList />
			<RewardCatalog />
			<UserStats />
			<Footer />
		</>
	);
}

export default HomePage;
