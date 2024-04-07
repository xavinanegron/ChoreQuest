import React, { createContext, useContext, useState } from 'react';

const PointsContext = createContext();

export const usePoints = () => useContext(PointsContext);

export const PointsProvider = ({ children }) => {
	const [points, setPoints] = useState(0);
	const [lifetimeEarnedPoints, setLifetimeEarnedPoints] = useState(0);

	// Function to add points
	const addPoints = (amount) => {
		setPoints((prevPoints) => prevPoints + amount);
		setLifetimeEarnedPoints(
			(prevLifetimePoints) => prevLifetimePoints + amount
		);
	};

	// Function to deduct points
	const deductPoints = (amount) => {
		setPoints((prevPoints) => prevPoints - amount);
	};

	return (
		<PointsContext.Provider
			value={{ points, addPoints, deductPoints, lifetimeEarnedPoints }}
		>
			{children}
		</PointsContext.Provider>
	);
};
