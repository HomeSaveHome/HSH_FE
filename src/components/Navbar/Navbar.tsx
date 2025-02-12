import './Navbar.styles.css';
import userIcon from "../../assets/user-icon.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">HomeSaveHome</div>
            <div className="nav-links">
                <a href="/">MAIN</a>
                <a href="/">USAGE</a>
                <a href="/">GOAL</a>
                <a href="/">COMMUNITY</a>
                <a href="/"><img src={userIcon} alt="user-icon" /></a>
            </div>
        </div >
    )
}

export default Navbar;