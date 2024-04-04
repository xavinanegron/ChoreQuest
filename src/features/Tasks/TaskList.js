import tasksData from './TasksData';
import AddTaskForm from './AddTaskForm';
import { useState } from 'react';
import HomeButton from '../Header/HomeButton';
import ViewRewardsButton from '../Rewards/ViewRewardsButton';
import UserProfile from '../User/UserProfile';

function TaskList() {
	const [tasks, setTasks] = useState(tasksData);

	// Function to add new custom task to the task list
	const addTask = (newTask) => {
		setTasks([...tasks, newTask]);
	};

	return (
		<div className='task-list row'>
			<div className='tasks col-lg-12'>
				<div className='d-flex justify-content-end mt-4'>
					<HomeButton />
				</div>
				<h2 className='chore-title'>Discover Chores 🔎</h2>
				<h2 className='chore-title-question col-lg-12'>
					Set Sail on Your Chore Quest! Which missions will you conquer?
				</h2>
				<div className='row'>
					{tasks.map((task) => (
						<div
							key={task.id}
							className='col-lg-4'
						>
							<div className='task'>
								{/* <div className="">
                                    <span className="emoji">{task.emoji}</span>
                                </div> */}
								<div className='task-container'>
									<span className='emoji'>{task.emoji}</span>
									<h3 className='task-name'>{task.name}</h3>
									<h4 className='task-description'>{task.description}</h4>
									<button className='task-completed-button col-lg-12'>
										Get {task.points} points
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='col-lg-12'>
				<div className='task-form'>
					<AddTaskForm addTask={addTask} />
				</div>
			</div>
		</div>
	);
}

export default TaskList;
