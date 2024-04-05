import WelcomeUser from '../User/WelcomeUser';
import SubHeader from './SubHeader';

const Header = () => {
	return (
		<div className='header'>
			{/* <a href="https://www.flaticon.com/free-icons/treasure-map" title="treasure-map icons">Treasure-map icons created by Freepik - Flaticon</a> */}
			<div className='app-name row'>
				<h1 className='app-name-title col-lg-12'>Welcome to</h1>
				<div className='treasureMapContainer'>
					<h1 className='app-name-title-2 col-lg-12'>ChoreQuest</h1>
					<img
						src='/media/treasure-map.png'
						alt='treasure map'
						className='treasure-map'
					/>
				</div>
				<h2 className='app-name-slogan col-lg-12'>
					Embark on a Journey to Rewards!
				</h2>
				<WelcomeUser />
			</div>
		</div>
	);
};

export default Header;
