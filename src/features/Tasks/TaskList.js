import tasksData from './TasksData';
import AddTaskForm from './AddTaskForm';
import { useState } from 'react';
import HomeButton from '../Header/HomeButton';
import ViewRewardsButton from '../Rewards/ViewRewardsButton';
import UserProfile from '../User/UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { usePoints } from '../Points/PointsContext';
import confetti from 'canvas-confetti';

function TaskList() {
	const [tasks, setTasks] = useState(tasksData);
	const [sortBy, setSortBy] = useState('asc');
	const { addPoints } = usePoints();
	// To show currenty available points
	const { points } = usePoints();

	// Function to add new custom task to the task list
	const addTask = (newTask) => {
		// the variable below is just to test in the console
		const taskWithId = {
			...newTask,
			id: uuidv4(),
			points: parseInt(newTask.points),
		};
		setTasks([...tasks, taskWithId]);

		console.log('Adding chore', taskWithId);
	};

	// To delete a task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Function to handle sort changes
	const handleSort = (e) => {
		setSortBy(e.target.value);
		sortTasks(e.target.value);
	};

	// Function to sort tasks
	const sortTasks = () => {
		const sortedTasks = [...tasks];
		sortedTasks.sort((a, b) => {
			if (sortBy === 'asc') {
				return a.points - b.points; // low to high points
			} else {
				return b.points - a.points; // high to low points
			}
		});
		setTasks(sortedTasks);
	};

	const completeTask = (task) => {
		// add points to user points when completing task
		addPoints(task.points);
		// remove the redeemed reward from the list
		deleteTask(task.id);
		// Trigger confetti effect
		confetti({
			particleCount: 200,
			spread: 180,
			origin: { y: 0.7 },
		});
	};

	return (
		<>
			<div className='MenuTaskList d-flex justify-content-end'>
				<div className='col-lg-2 stats-dashboard'>
					<h4 className='points-description'>Available Points:</h4>
					<div className='points-image'>
						<img
							src='/media/coin.jpg'
							alt='coin'
							className='coin-image'
						/>
						<h3 className='dashboard-points'>{points} pts</h3>
					</div>
				</div>
				<HomeButton />
				<ViewRewardsButton />
				<UserProfile />
			</div>

			<div
				className='task-list row'
				id='task-list'
			>
				<div className='tasks col-lg-12'>
					<h2 className='chore-title'>Discover Chores 🔎</h2>
					<h2 className='chore-title-question col-lg-12'>
						Set Sail on Your Chore Quest! Which missions will you conquer?
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
						{tasks.length > 0 ? (
							tasks.map((task) => (
								<div
									key={task.id}
									className='col-lg-4'
								>
									<div className='task'>
										<div className='task-container'>
											<FontAwesomeIcon
												icon={faX}
												onClick={() => deleteTask(task.id)}
												className='trash-icon'
												style={{ color: 'red', fontSize: '24px' }}
											/>
											<span className='emoji'>{task.emoji}</span>
											<h3 className='task-name'>{task.name}</h3>
											<h4 className='task-description'>{task.description}</h4>
											<div className='points-image'>
												<h3 className='task-points'>Earn:</h3>
												<img
													src='/media/coin.jpg'
													alt='coin'
													className='coin-image'
												/>
												<h3 className='task-points'>{task.points} pts</h3>
											</div>
											<button
												id='button'
												className='task-completed-button col-lg-12'
												onClick={() => completeTask(task)}
											>
												Complete Chore
											</button>
										</div>
									</div>
								</div>
							))
						) : (
							<div className='col-12'>
								<div className='task mt-5 mb-5'>
									<h3 className='task-name'>
										⚠️ No chores available. Please add a new chore. 🧹
									</h3>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className='col-lg-12'>
					<div className='form'>
						<AddTaskForm addTask={addTask} />
					</div>
				</div>
			</div>
		</>
	);
}
export default TaskList;
