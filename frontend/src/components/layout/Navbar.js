import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

import Logo from '../../assets/img/bar.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={Logo} alt="Stock-Bar"/>
                <h2>Stock-Bar</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Shopping</Link>
                </li>
                <li>
                    <Link to="/login">Login </Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar