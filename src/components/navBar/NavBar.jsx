import { Link } from 'react-router-dom';
// styles
import styles from './NavBar.module.css'

const NavBar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <Link to='/' className=''>
                    Mini
                    <span>Blog</span>
                </Link>
            </div>
            <ul className={styles.links_list}>
                <li>
                    <Link to='/'
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        home
                    </Link>
                </li>
                <li>
                    <Link to='/login'
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Entrar
                    </Link>
                </li>
                <li>
                    <Link to='/register'
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Cadastrar
                    </Link>
                </li>
                <li>
                    <Link to='/about'
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        sobre
                    </Link>
                </li>
            </ul>
        </nav>
    );

};

export default NavBar;