import WelcomeUser from "../User/WelcomeUser";

const Header = () => {
    return (
        <div className="header ">
            <div className="app-name">
                <h1 className="app-name-title">ChoreQuest</h1>
                <h2 app-name-slogan>Embark on a Journey to Rewards!</h2> 
                <WelcomeUser />
            </div>
            
        </div>
    );
}

export default Header;