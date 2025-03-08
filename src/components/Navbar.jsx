import '../css/navigation.css'
import logo from '../assets/mondstadt-logo.png'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'

const NavBar = () => {
    const { theme, toggleFunction} = useContext(ThemeContext);

    return (
    <nav>
        <div className="logo-group">
            <img src={logo} alt="logo" />
            <h1>Mondstadt Local Specialty</h1>
        </div>
        <div className="nav-group">
            <ul className="nav-link">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Offers</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <button className="theme-toggle" onClick={toggleFunction}>
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
        </div>
    </nav>
    )
}

export default NavBar