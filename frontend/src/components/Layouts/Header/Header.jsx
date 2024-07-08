import { Link } from 'react-router-dom';
import './Header.css';
import { VscAccount } from "react-icons/vsc";
import { useTheme } from '../../../context/ThemeContext';
import { useEffect } from 'react';

const Header = () => {

    const { theme } = useTheme();


    useEffect(() => {
        const rootElement = document.getElementById('root');
        const accountIcon = document.querySelector('.account-icon-header');
        const allElements = document.querySelectorAll(':not(span):not(.big-green-button-standard)');
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
            <header className="main-container">
                <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1720108237/Now/N-logo/vector/default-monochrome_bgdm61.svg" alt="N Logo Header" draggable="false" />
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'#'}>About Us</Link></li>
                    </ul>
                </nav>

                <div className="right-container-header">
                    <a href='#'><VscAccount className='account-icon-header' /></a>
                </div>
            </header>
        </>
    )
}

export default Header