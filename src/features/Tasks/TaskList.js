import tasksData from './TasksData';
import AddTaskForm from './AddTaskForm';
import { useState } from 'react';
import HomeButton from '../Header/HomeButton';
import ViewRewardsButton from '../Rewards/ViewRewardsButton';
import UserProfile from '../User/UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import UserStats from '../User/UserStats';

function TaskList() {
	const [tasks, setTasks] = useState(tasksData);
	const [sortBy, setSortBy] = useState('asc');
	const [pointsEarned, setPointsEarned] = useState(0);

	// Function to add new custom task to the task list
	const addTask = (newTask) => {
		// the variable below is just to test in the console
		const taskWithId = { ...newTask, id: tasks.length + 1 };
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

	return (
		<>
			<div className='MenuTaskList d-flex justify-content-end'>
				<HomeButton />
				<ViewRewardsButton />
				<UserProfile />
			</div>
			<div className='task-list row'>
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
						<>
							{tasks.map((task) => (
								<div
									key={task.id}
									className='col-lg-4'
								>
									<div className='task'>
										<div className='task-container'>
											<FontAwesomeIcon
												icon={faX}
												onClick={() => deleteTask(task.id)}
												className='trash-icon '
												style={{ color: 'red', fontSize: '24px' }}
											/>
											<span className='emoji'>{task.emoji}</span>
											<h3 className='task-name'>{task.name}</h3>
											<h4 className='task-description'>{task.description}</h4>
											<div className='points-image '>
												<h3 className='task-points'>Earn:</h3>
												<img
													src='/media/coin.jpg'
													alt='coin'
													className='coin-image'
												/>
												<h3 className='task-points'>{task.points}</h3>
											</div>
											<button
												className='task-completed-button col-lg-12'
												// onClick={() => completeTask(task.points)}
											>
												Complete Chore
											</button>
										</div>
									</div>
								</div>
							))}
						</>
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
