import { Link } from 'react-router-dom';
// styles
import './NavBar.css';

const NavBar = () => {

    return (
        <nav>
            <div className="navLink">
                <Link to='/'>
                    Mini
                    <span>Blog</span>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to='/about'>sobre</Link>
                </li>
            </ul>
        </nav>
    );

};

export default NavBar;