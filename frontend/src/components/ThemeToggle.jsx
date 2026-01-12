import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Dashboard.css';

const ThemeToggle = ({theme, setTheme}) => {
    return(
        <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label='Toggle theme'
        >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;