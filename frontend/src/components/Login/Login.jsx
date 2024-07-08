import Meta from '../Layouts/Meta/Meta';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleContextMenu = (e) => {
        e.preventDefault();
    }

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: e.target.email.value,
                    password: e.target.password.value
                }),
                credentials: 'include'
            });

            const json = await response.json();

            if (json.success) {
                navigate('/');
            }

            else {
                console.log(json.message);
            }
        }

        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Meta title="Login" />
            <div className="main-container-login-page">
                <div className="left-container-login-signup-page">
                    <h1>Login</h1>
                    <form method='post' onSubmit={handleLogin} className='main-form-login-page'>
                        <div className="input-container-login-signup-page">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-container-login-signup-page">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" required minLength={8} />
                        </div>
                        <button type="submit" className="medium-green-button-standard">Login</button>
                    </form>
                    <p className='default-login-signup-redirect'>Don&apos;t have an account? <Link className='login-signup-redirect-link' to={'/register'}>Signup</Link></p>
                </div>

                <div className="right-container-login-page">
                    <img onContextMenu={handleContextMenu} src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1720286879/Now/bubble-chats_jez5qw.gif" alt="Login Gif" draggable="false" />
                </div>
            </div>
        </>
    )
}

export default Login