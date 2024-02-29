import TaskList from "./features/Tasks/TaskList";
import RewardCatalog from "./features/Rewards/RewardCatalog";
import Header from "./features/Header/Header";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import Lottie from 'react-lottie';
import cutesies from './Cutesies.json';
import UserStats from "./features/User/UserStats";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cutesies,
  };

  return (
      <div className="App">
        <Header />
        <TaskList />
        <Lottie 
          className="cutesies" 
          options={defaultOptions}  
          height={300}
        />
        <RewardCatalog />
        <UserStats />
      </div>
  );
}

export default App;
