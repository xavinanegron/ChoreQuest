import rewardsData from "./RewardsData";
import ViewRewardsButton from "./ViewRewardsButton"; 
import ExploreTaskButton from "../Tasks/ExploreTaskButton";
import UserProfile from "../User/UserProfile";

function RewardCatalog() {
    return (
        <div className="rewards-list row">
            <div className="menu-rewards col-lg-12"> 
                <ExploreTaskButton />
                <ViewRewardsButton />
                <UserProfile />
            </div>
            <div className="rewards col-lg-12">
                <h2 className="reward-title">Explore Rewards</h2>
                <div className="row">
                    {rewardsData.map(reward => (
                        <div key={reward.id} className="col-lg-4">
                            <div className="reward">
                                <h3 className="task-name">{reward.name} {reward.emoji}</h3>
                                <h2 className="points-earned">Points required: {reward.points}</h2>
                                <button className="redeem-button"> Redeem</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RewardCatalog;
