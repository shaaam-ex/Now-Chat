import { Link } from 'react-router-dom';
import './Header.css';

import { VscAccount } from "react-icons/vsc";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

import { useTheme } from '../../../context/ThemeContext';
import { useEffect } from 'react';

const Header = () => {

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        let header = document.getElementById('header-container-main');
        if(window.location.pathname === '/chat') {
            header.style.display = 'none';
        }

        else{
            header.style.display = 'flex';
        }
    }, [])


    useEffect(() => {
        const rootElement = document.getElementById('root');
        const accountIcon = document.querySelector('.account-icon-header');
        const allElements = document.querySelectorAll(':not(span):not(.big-green-button-standard):not(a)');
        const headerA = document.querySelectorAll('.main-container > nav > ul > li > a');

        if (rootElement) {
            rootElement.style.backgroundColor = theme === 'Light' ? '#f5f5f5' : '#121212';
            allElements.forEach(element => {
                element.style.color = theme === 'Light' ? 'black' : 'white';
            });

            headerA.forEach(a => {
                if (theme === 'Dark') {
                    a.classList.add('dark');
                } else {
                    a.classList.remove('dark');
                }
            });
        }
    }, [theme])

    return (
        <>
            <header id='header-container-main' className="main-container">
                <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1720108237/Now/N-logo/vector/default-monochrome_bgdm61.svg" alt="N Logo Header" draggable="false" />
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'#'}>About Us</Link></li>
                    </ul>
                </nav>

                <div className="right-container-header">
                    {
                        theme === "Light" ? <FaRegMoon onClick={() => setTheme("Dark")} className='theme-switch-button-header' />
                                            : <LuSun onClick={() => setTheme("Light")} className='theme-switch-button-header' />
                    }
                    <a href='#'><VscAccount className='account-icon-header' /></a>
                </div>
            </header>
        </>
    )
}

export default Header