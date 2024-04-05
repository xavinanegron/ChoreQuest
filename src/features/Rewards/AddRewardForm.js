import React, { useState } from 'react';

const AddRewardForm = ({ addReward }) => {
	const [rewardName, setRewardName] = useState('');
	const [points, setPoints] = useState('');
	const [emoji, setEmoji] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// Checks if any fields are empty
		if (
			rewardName.trim() === '' ||
			points.trim() === '' ||
			emoji.trim() === ''
		) {
			alert('Please fill out all fields.');
			return;
		}

		// if (isNaN(points) || points < 5) {
		// 	alert('Point value must be greater than 5.');
		// 	return;
		// }

		//Call addTask Function with new chore data
		addReward({
			name: rewardName,
			points: points,
			emoji: emoji,
		});

		// To clean input fields right after
		setRewardName('');
		setPoints('');
		setEmoji('');
	};

	return (
		<form
			className='AddTaskChoreForm'
			onSubmit={handleSubmit}
		>
			<h2 className='form-description'>
				Craft your Own Rewards! <br />
				Set a point value and pick your emoji.
			</h2>
			<input
				type='text'
				className='add-input'
				placeholder='Reward'
				value={rewardName}
				onChange={(e) => setRewardName(e.target.value)}
			/>
			<select
				className='add-input'
				value={points}
				onChange={(e) => setPoints(e.target.value)}
			>
				<option value=''>Points to redeem</option>
				<option value='50'>50</option>
				<option value='75'>75</option>
				<option value='100'>100</option>
				<option value='120'>120</option>
				<option value='140'>140</option>
				<option value='150'>150</option>
				<option value='175'>175</option>
				<option value='200'>200</option>
			</select>

			<select
				className='add-input'
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
				<option value='🎁'>🎁</option>
				<option value='🍦'>🍦</option>
				<option value='🏊'>🏊</option>
				<option value='🎮'>🎮</option>
				<option value='🍭'>🍭</option>
				<option value='🎈'>🎈</option>
				<option value='🎨'>🎨</option>
				<option value='🎡'>🎡</option>
				<option value='🍔'>🍔</option>
				<option value='🍕'>🍕</option>
				<option value='📚'>📚</option>
				<option value='🎳'>🎳</option>
				<option value='🎠'>🎠</option>
				<option value='🏗️'>🏗️</option>
				<option value='🏊‍♂️'>🏊‍♂️</option>
				<option value='👭'>👭</option>
				<option value='🎲'>🎲</option>
				<option value='🌙'>🌙</option>
				<option value='🦁'>🦁</option>
			</select>
			<button
				type='submit'
				className='add-btn'
			>
				Add Reward
			</button>
		</form>
	);
};

export default AddRewardForm;
