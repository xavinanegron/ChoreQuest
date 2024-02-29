import WelcomeUser from "../User/WelcomeUser";
import SubHeader from "./SubHeader";

const Header = () => {

    return (
        <div className="header">
            <div className="app-name row">
                <h1 className="app-name-title col-lg-12">ChoreQuest 🔎</h1>
                <h2 app-name-slogan col-lg-6>Embark on a Journey to Rewards!</h2> 
                <WelcomeUser />
                <SubHeader />
            </div>
            
        </div>
    );
}

export default Header;