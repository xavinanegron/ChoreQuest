import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import RewardsPage from './pages/RewardsPage';
import TasksPage from './pages/TasksPage';
import UserStatsPage from './pages/UserStatsPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path='/'
				element={<HomePage />}
			/>
			<Route
				path='/tasks'
				element={<TasksPage />}
			/>
			<Route
				path='/rewards'
				element={<RewardsPage />}
			/>
			<Route
				path='/stats'
				element={<UserStatsPage />}
			/>
		</>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
