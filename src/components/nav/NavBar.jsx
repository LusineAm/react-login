import userImg from "../../assets/img/user.png";
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {

    return (
        <nav className="nav-container">
            <div className='nav-menu'>
                <div className="nav-logo">
                    <Link className="link" to="/"><img alt='user' src={userImg}/></Link>
                </div>
                    <ul className="nav-links">
                        <li className="active" ><Link className="link active" to="/">Home</Link></li>
                        <li><Link className="link" to="/contact">Contact</Link></li>
                        <li><Link className="link" to="/about">About</Link></li>
                    </ul>
            </div>
            <div className="nav-login">
                <button>Login</button>
            </div>
        </nav>
    );
}

export default NavBar;
