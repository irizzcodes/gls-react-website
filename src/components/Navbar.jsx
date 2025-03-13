import '../css/navigation.css'
import logo from '../assets/triquetra.png'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'

const NavBar = () => {
    const { theme, toggleFunction} = useContext(ThemeContext);

    return (
    <nav>
        <div className="logo-group">
            <img src={logo} alt="logo" />
            <h1>Genshin Local Specialties</h1>
        </div>
        <div className="nav-group">
            <ul className="nav-link">
                <li><a href="#">Home</a></li>
                <li><a href="#materials">Materials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="theme-toggle" onClick={toggleFunction}>
                {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
            </button>
        </div>
    </nav>
    )
}

export default NavBar