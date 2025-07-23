import React from 'react';
import './css/register.css';
import instaLogo from '../../assets/insta-logo.png';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="insta-container">
           
            <div className="insta-right">
                <div className="register-box">
                    <img className="logo" src={instaLogo} alt="Instagram Logo" />
                    <p className="heading">Sign up to see photos and videos from your friends.</p>
                    <form>
                        <input type="text" placeholder="Mobile Number or Email" required />
                        <input type="text" placeholder="Full Name" required />
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Sign Up</button>

                        

                        <p className="text-center mt-5">
                            Have an account? <b><Link to="/">Log in</Link></b>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
