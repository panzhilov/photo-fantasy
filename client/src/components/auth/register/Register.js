import './register.css'
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="slide-form-wrapper-register">
        <div className="left-container-register">
            <div className="sign-in-desc">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info.</p>
                <Link to='/login' id='btn-sign-in' type='submit'>Sign in</Link>
            </div>
        </div>

        <div className="right-container-register">
            <div className="sign-up-container">
                <form action="" className="sign-up-form">
                    <h1>Sign Up</h1>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" />
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <input type="password" name="repeatPassword" id="repeatPassword" placeholder="Repeat Password" />
                    
                    <button id="btn-sign-up" type="submit">Sign up</button>

                    <div className="social-container">
                        
                    </div>
                </form>
            </div>
        </div>
      
    </div> 
    );
}