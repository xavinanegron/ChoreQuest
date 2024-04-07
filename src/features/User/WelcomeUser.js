import React, { useState, useEffect } from 'react';

const WelcomeUser = () => {
	const [name, setName] = useState('');
	const [inputName, setInputName] = useState('');

	useEffect(() => {
		const storedName = localStorage.getItem('userName');
		if (storedName) {
			setName(storedName);
		}
	}, []);

	const handleNameChange = (e) => {
		setInputName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputName.trim() !== '') {
			setName(inputName);
			localStorage.setItem('userName', inputName);
		}
	};

	return (
		<div>
			{name ? (
				<h1 className='welcome-message'>Hi, {name} 👋</h1>
			) : (
				<form
					onSubmit={handleSubmit}
					className='name-form'
				>
					<label className='name-label'>
						Enter your name below: <br />
						<input
							className='name-input-box'
							type='text'
							value={inputName}
							onChange={handleNameChange}
						/>
					</label>{' '}
					<br></br>
					<button
						type='submit'
						className='welcome-button'
					>
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

export default WelcomeUser;
