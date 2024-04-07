import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
	const [taskName, setTaskName] = useState('');
	const [choreDescription, setChoreDescription] = useState('');
	const [points, setPoints] = useState('');
	const [emoji, setEmoji] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// Checks if any fields are empty
		if (taskName.trim() === '' || points.trim() === '' || emoji.trim() === '') {
			alert('Please fill out all fields.');
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
			className='AddTaskChoreForm'
			onSubmit={handleSubmit}
		>
			<h2 className='form-description'>
				Create Your Own Chores! <br />
				Set a point value and pick your emoji.
			</h2>
			<input
				type='text'
				className='add-input'
				placeholder='Chore'
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			/>
			<input
				type='text'
				className='add-input'
				placeholder='Chore Description'
				value={choreDescription}
				onChange={(e) => setChoreDescription(e.target.value)}
			/>
			<select
				className='add-input'
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
				className='add-input'
				style={{}}
				value={emoji}
				onChange={(e) => setEmoji(e.target.value)}
			>
				<option
					value=''
					disabled
					hidden
					className='add-input'
				>
					Pick emoji
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
				className='add-btn'
			>
				Add Chore
			</button>
		</form>
	);
};

export default AddTaskForm;
