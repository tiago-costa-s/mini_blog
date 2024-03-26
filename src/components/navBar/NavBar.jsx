import { NavLink } from 'react-router-dom';

import { useAuthentication } from '../../hooks/useAuthentication';
import { useAuthValue } from '../../context/AuthContext';

// styles
import styles from './NavBar.module.css'

const NavBar = () => {

    const { user } = useAuthValue();

    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <NavLink
                    to='/' className=''>
                    Mini
                    <span>Blog</span>
                </NavLink>
            </div>
            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/register'
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        sobre
                    </NavLink>
                </li>
            </ul>
        </nav>
    );

};

export default NavBar;