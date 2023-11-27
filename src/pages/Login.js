import { Link } from 'react-router-dom';

//CSS

import '../css/login.css';

//JAVASCRIPT

import '../javascript/login.js';

function Login(){
    document.title = "Pickabook | Login"
    return(
        
        <div>
            
            <div className="viewport">
            <div className="form-box">
            <h1 id="title"><a href="pages/home-updated.html" style={{textDecoration: "none", color: "white", fontWeight: "700" }}>Pickabook</a></h1>
            <form>
                <div className="input-groupp">
                    <div className="input-field" id="nameField">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>

                    <div className="input-field">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="input-field">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>

                    <p>Forgot Password? <a href="pages/forgotpw.html">Click me </a></p>
                </div>
                <div className="btn-field">
                    <button type="button" id="signupBtn" onclick="signUpSwitch()">Sign Up</button>
                    <Link to="/home"><button type="button" id="signinBtn" className="disable" onclick="signInSwitch()">Sign In</button></Link>
                </div>
                
            </form>  
        </div>

        
    </div>
        </div>
    )
}

export default Login;