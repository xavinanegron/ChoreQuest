import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
	const [taskName, setTaskName] = useState('');
	const [choreDescription, setChoreDescription] = useState('');
	const [points, setPoints] = useState('');
	const [emoji, setEmoji] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// Checks if any fields are empty
		if (taskName.trim() === '' || points.trim() === '') {
			alert('Please fill out all fields.');
			return;
		}

		if (isNaN(points) || points < 5) {
			alert('Point value must be greater than 5.');
			return;
		}

		//Call addTask Function with new chore data
		addTask({
			name: taskName,
			description: choreDescription,
			points: points,
			emoji: emoji,
		});

		// To clean input fields right after
		setTaskName('');
		setChoreDescription('');
		setPoints('');
		setEmoji('');
	};

	return (
		<form
			className='AddTaskForm'
			onSubmit={handleSubmit}
		>
			<h2 className='task-form-description'>
				Create Your Adventures! <br />
				Add your own chore, <br />
				set a point value and select your emoji.
			</h2>
			<input
				type='text'
				className='addTask-input'
				placeholder='Chore'
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			/>
			<input
				type='text'
				className='addTask-input'
				placeholder='Chore Description'
				value={choreDescription}
				onChange={(e) => setChoreDescription(e.target.value)}
			/>
			<select
				className='addTask-input'
				value={points}
				onChange={(e) => setPoints(e.target.value)}
			>
				<option value=''>Points to earn</option>
				<option value='5'>5</option>
				<option value='10'>10</option>
				<option value='15'>15</option>
				<option value='20'>20</option>
				<option value='25'>25</option>
				<option value='30'>30</option>
			</select>

			<select
				className='addTask-input'
				style={{}}
				value={emoji}
				onChange={(e) => setEmoji(e.target.value)}
			>
				<option
					value=''
					disabled
					hidden
					className='addTask-input'
				>
					select Emoji
				</option>
				<option value='📚'>📚</option>
				<option value='🧹'>🧹</option>
				<option value='🧺'>🧺</option>
				<option value='🧽'>🧽</option>
				<option value='🧼'>🧼</option>
				<option value='🛏️'>🛏️</option>
				<option value='🧸'>🧸</option>
				<option value='🍽️'>🍽️</option>
				<option value='👕'>👕</option>
				<option value='👟'>👟</option>
				<option value='📖'>📖</option>
				<option value='🗑️'>🗑️</option>
				<option value='🐶'>🐶</option>
			</select>
			<button
				type='submit'
				className='addTask-btn'
			>
				Add Chore
			</button>
		</form>
	);
};

export default AddTaskForm;
