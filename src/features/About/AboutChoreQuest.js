import React from 'react'



function AboutChoreQuest() {
  return (
    <div className='about-container'>
        <div className='row'>
            <div className='about-image col-lg-6'>
                <img src='/media/motherandchild.jpg' alt="mom and her kid" />
            </div>
            <div className='col-lg-6 about-info-container'>
                <h2>What is ChoreQuest?</h2>
                <p className='about-info'>ChoreQuest is a chore tracker app targeting kids and their families, aiming to gamify household responsibilities. This friendly platform is crafted to transform chores from mundane tasks into engaging, interactive quests, making chores a shared adventure rather than a burden.</p>
                <p className='about-info'>Allowing children to earn points for completing tasks, which can be redeemed for rewards. Users can easily assign tasks, track progress, get rewarded for completing chores and create custom ones. ChoreQuest promotes teamwork and instills a sense of achievement in both parents and kids.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutChoreQuest