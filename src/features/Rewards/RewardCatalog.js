import rewardsData from "./RewardsData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

function RewardCatalog() {
    return (
        <div className="rewards-list row">
            <div className="rewards col-lg-12">
                <h2 className="reward-title">Explore Rewards 🏆</h2>
                <h2 className="reward-title-statement col-lg-12">Unlock Your Treasures! Which reward will you claim?</h2>
                <div className="row">
                    {rewardsData.map(reward => (
                        <div key={reward.id} className="col-lg-4">
                            <div className="reward">
                                <h3 className="task-name">{reward.name} {reward.emoji}</h3>
                                <h2 className="points-earned">Points required: {reward.points}</h2>
                                <button className="redeem-button"> Redeem Reward</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RewardCatalog;
