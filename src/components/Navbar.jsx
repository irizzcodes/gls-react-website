import { useState, useContext } from "react";
import "../css/navigation.css";
import logo from "../assets/triquetra.png";
import { ThemeContext } from "../contexts/ThemeContext";

const NavBar = () => {
    const { theme, toggleFunction } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false); // Controls menu visibility

    return (
        <nav>
            <div className="logo-group">
                <img src={logo} alt="logo" />
                <h1>Genshin Local Specialties</h1>
            </div>

            {/* Hamburger Button */}
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            <div className={`nav-group ${isOpen ? "open" : ""}`}>
                <ul className="nav-link">
                    <li><a href="#">Home</a></li>
                    <li><a href="#materials">Materials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button onClick={toggleFunction}>
                    {theme === "light" ? " Dark Mode" : " Light Mode"}
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
