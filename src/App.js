import TaskList from "./features/Tasks/TaskList";
import RewardCatalog from "./features/Rewards/RewardCatalog";
// import UserStats from "./features/User/UserStats";
import Header from "./features/Header/Header";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SubHeader from "./features/Header/SubHeader";

import React from 'react'
import Lottie from 'react-lottie';
import cutesies from './Cutesies.json';



function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cutesies,
  };

  return (
      <div className="App">
        <Header />
        <SubHeader />
        <Lottie className="cutesies" options={defaultOptions} width={800} height={400} />
            {/* <Route exact path= "/" component={App}/>
            <Route path="/tasklist" component={TaskList}/>
            <Route path="/rewardcatalog" component={RewardCatalog}/>
            <Route path="/userstats" component={UserStats}/> */}
        <TaskList />
        <RewardCatalog />
      </div>
  );
}

export default App;
