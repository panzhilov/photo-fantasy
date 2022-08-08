import './login.css'

import { Link } from "react-router-dom";

export const Login = () => {
    return(
        <div className="slide-form-wrapper">
        <div className="left-container">
            <div className="sign-in-container">
                <form action="" className="sign-in-form">
                    <h1>Sign In</h1>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <button id="btn-sign-in" type="submit">Sign in</button>

                    <div className="social-container">
                        
                    </div>
                </form>
            </div>
        </div>
        <div className="right-container">
            <div className="sign-in-desc">
                <h1>Hello,Friend</h1>
                <p>Enter your personal details and start journey with us.</p>
                <Link to="/register" id='btn-sign-up' type='submit'>Sign up</Link>
                {/* <button id="btn-sign-up" type="submit">Sign up</button> */}
            </div>
        </div>
    </div> 
    );
}