import React from 'react';

function AboutChoreQuest() {
	return (
		<article className='about-container'>
			<div className='row align-items-center'>
				<div className='col-lg-8'>
					<div className='about-info-container'>
						<h2>About</h2>
						<p className='about-info'>
							ChoreQuest is a dynamic chore tracking application designed to
							reinvent household responsibilities for both kids and parents. By
							gamifying chores, ChoreQuest transforms mundane tasks into
							exciting adventures, fostering collaboration and turning everyday
							responsibilities into shared triumphs. Users can effortlessly
							complete chores, track their points, and unlock rewards, all while
							enjoying an engaging and interactive experience. Users also have
							the flexibility to create custom chores and rewards, adding a
							personalized touch to their journey. Encouraging teamwork and
							instilling a sense of accomplishment, ChoreQuest empowers families
							to tackle chores together and celebrate their achievements along
							the way.
						</p>
					</div>
				</div>
				<div className='col-lg-4'>
					<div className='about-image d-flex justify-content-center align-items-center'>
						{/* Trophy stickers created by bukeicon - Flaticon */}
						<img
							src='/media/trophy.png'
							alt='trophy'
							className='img-fluid'
						/>
					</div>
				</div>
			</div>
		</article>
	);
}

export default AboutChoreQuest;
