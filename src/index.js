import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PointsProvider } from './features/Points/PointsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PointsProvider>
			<App />
		</PointsProvider>
	</React.StrictMode>
);

reportWebVitals();
