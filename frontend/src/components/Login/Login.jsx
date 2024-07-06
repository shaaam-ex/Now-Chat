import Meta from '../Layouts/Meta/Meta';
import './Login.css';

import { Link } from 'react-router-dom';

const Login = () => {

    const handleContextMenu = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Meta title="Login" />
            <div className="main-container-login-page">
                <div className="left-container-login-page">
                    <h1>Login</h1>
                    <form className='main-form-login-page'>
                        <div className="input-container-signup-page">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-container-signup-page">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" required minLength={8} />
                        </div>
                        <button type="submit" className="medium-green-button-standard">Login</button>
                    </form>
                    <p>Don&apos;t have an account? <Link className='login-signup-redirect-link' to={'/register'}>Signup</Link></p>
                </div>

                <div className="right-container-login-page">
                    <img onContextMenu={handleContextMenu} src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1720286879/Now/bubble-chats_jez5qw.gif" alt="Login Gif" draggable="false" />
                </div>
            </div>
        </>
    )
}

export default Login