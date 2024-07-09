import { useDispatch, useSelector } from 'react-redux';
import Meta from '../Layouts/Meta/Meta';
import './Signup.css';

import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../../actions/userAction';

const Signup = () => {

    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const { isAuthenticated, loading, error } = useSelector(state => state.user);

    const handleContextMenu = (e) => {
        e.preventDefault();
    }

    async function handleSubmit(e) {
        e.preventDefault();

        dispatch(signupUser(e.target.name.value, e.target.email.value, e.target.password.value, e.target.confirmPassword.value, e.target.phoneNumber.value))

        // try {
        //     const response = await fetch('http://localhost:4000/api/auth/register', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             name: e.target.name.value,
        //             email: e.target.email.value,
        //             password: e.target.password.value,
        //             confirmPassword: e.target.confirmPassword.value,
        //             phoneNumber: e.target.phoneNumber.value
        //         })
        //     });
            
        //     const json = await response.json();

        //     if(json.success) {
        //         navigate('/login');
        //     }

        //     else {
        //         navigate('/register');
        //     }
        // }
        // catch (error) {
        //     console.error(error);
        // }
    }

    return (
        <>
            <Meta title="Signup" />
            <div onContextMenu={handleContextMenu} className="main-container-login-signup-page">
                <div className="left-container-login-signup-page">
                    <h1>Signup</h1>
                    <form method='post' onSubmit={handleSubmit} className='main-form-signup-page'>
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
                            <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required />
                        </div>
                        <button type="submit" className="medium-green-button-standard">Signup</button>
                    </form>
                    <p className='default-login-signup-redirect'>Already have an account? <Link className='login-signup-redirect-link' to={'/login'}>Login</Link></p>
                </div>

                <div className="right-container-signup-page">
                    <h1>Join over 70 people using our chat services <span className='green-span'>Now</span></h1>
                </div>
            </div>
        </>
    )
}

export default Signup