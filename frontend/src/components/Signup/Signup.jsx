import Meta from '../Layouts/Meta/Meta';
import './Signup.css';

import { Link } from 'react-router-dom';

const Signup = () => {

    const handleContextMenu = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Meta title="Signup" />
            <div onContextMenu={handleContextMenu} className="main-container-login-signup-page">
                <div className="left-container-login-signup-page">
                    <h1>Signup</h1>
                    <form className='main-form-signup-page'>
                        <div className="input-container-login-signup-page">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="input-container-login-signup-page">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-container-login-signup-page">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" required minLength={8} />
                        </div>
                        <div className="input-container-login-signup-page">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required minLength={8} />
                        </div>
                        <div className="input-container-login-signup-page">
                            <label htmlFor="phoneNumber">Phone</label>
                            <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required minLength={10} min={0} max={9} />
                        </div>
                        <button type="submit" className="medium-green-button-standard">Signup</button>
                    </form>
                    <p>Already have an account? <Link className='login-signup-redirect-link' to={'/login'}>Login</Link></p>
                </div>

                <div className="right-container-signup-page">
                    <h1>Join over 70 people using our chat services <span className='green-span'>Now</span></h1>
                </div>
            </div>
        </>
    )
}

export default Signup