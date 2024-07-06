import { Link } from 'react-router-dom';
import './Header.css';
import { VscAccount } from "react-icons/vsc";

const Header = () => {
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