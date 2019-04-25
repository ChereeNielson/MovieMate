import React, { Component } from 'react';
import API from "../utils/API";
import Home from "../pages/Home";
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom"; 
class Login extends Component {
    state = {
        email: "",
        password: "",
        isAuthenticated: false,
        badAttempt: false
    }
    login = (email, password) => {
        let data = {
            password: password
        }
        API.login(email, data).then(res => {
            console.log(res);
            if (res.data === "Authenticated") {
                this.setState({ isAuthenticated: true })
            }
            else {
                this.setState({ badAttempt: true })
            }
        });

    }
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.login(this.state.email, this.state.password);
    };

    render() {
        return (
            <div>
                {this.state.isAuthenticated === true ? <Redirect to="/" />:
                    <div className="wrapper">
                        <main className="login-register-page" style={{ backgroundImage: 'url(assets/images/posters/movie-collection.jpg)' }}>
                            <div className="container">
                                {/* =============== START OF LOGIN & REGISTER POPUP =============== */}
                                <div className="small-dialog login-register">
                                    {/* ===== Start of Signin wrapper ===== */}
                                    <div className="signin-wrapper">
                                        <div className="small-dialog-headline">
                                            <h4 className="text-center">Sign in</h4>
                                        </div>
                                        <div className="small-dialog-content">
                                            {/* Start of Login form */}
                                            <form id="cariera_login" method="post">
                                                <p className="status" />
                                                <div className="form-group">
                                                    {this.state.badAttempt ? <p style={{ color: "red" }}>Wrong email or password</p> : ""}
                                                    <label htmlFor="email">Username or Email *</label>
                                                    <input onChange={this.handleInputChange} name="email" value={this.state.email} type="text" className="form-control" id="username" placeholder="Your Username or Email *" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password *</label>
                                                    <input onChange={this.handleInputChange} name="password" value={this.state.password} type="password" className="form-control" id="password" placeholder="Your Password *" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="checkbox pad-bottom-10">
                                                        <input id="check1" type="checkbox" name="remember" defaultValue="yes" />
                                                        <label htmlFor="check1">Keep me signed in</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input type="submit" onClick={this.handleFormSubmit} defaultValue="Sign in" className="btn btn-main btn-effect nomargin" />
                                                </div>
                                            </form>
                                            {/* End of Login form */}
                                            <div className="bottom-links">
                                                <span>
                                                    Not a member?
                      <a className="signUpClick">Sign up</a>
                                                </span>
                                                <a className="forgetPasswordClick pull-right">Forgot Password</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ===== End of Signin wrapper ===== */}
                                    {/* ===== Start of Signup wrapper ===== */}
                                    <div className="signup-wrapper">
                                        <div className="small-dialog-headline">
                                            <h4 className="text-center">Sign Up</h4>
                                        </div>
                                        <div className="small-dialog-content">
                                            {/* Start of Registration form */}
                                            <form id="cariera_registration" action="#" method="POST">
                                                <p className="status" />
                                                <div className="form-group">
                                                    <label htmlFor="movify_user_login">Username</label>
                                                    <input name="movify_user_login" id="movify_user_login" className="form-control" type="text" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="movify_user_email">Email</label>
                                                    <input name="movify_user_email" id="movify_user_email" className="form-control" type="email" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input name="movify_user_pass" id="movify_password" className="form-control" type="password" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="submit" className="btn btn-main btn-effect nomargin" defaultValue="Register" />
                                                </div>
                                            </form>
                                            {/* End of Registration form */}
                                            <div className="bottom-links">
                                                <span>
                                                    Already have an account?
                      <a className="signInClick">Sign in</a>
                                                </span>
                                                <a className="forgetPasswordClick pull-right">Forgot Password</a>
                                            </div>
                                        </div> {/* .small-dialog-content */}
                                    </div>
                                    {/* ===== End of Signup wrapper ===== */}
                                    {/* ===== Start of Forget Password wrapper ===== */}
                                    <div className="forgetpassword-wrapper">
                                        <div className="small-dialog-headline">
                                            <h4 className="text-center">Forgotten Password</h4>
                                        </div>
                                        <div className="small-dialog-content">
                                            {/* Start of Forger Password form */}
                                            <form id="forget_pass_form" action="#" method="post">
                                                <p className="status" />
                                                <div className="form-group">
                                                    <label htmlFor="password">Email Address *</label>
                                                    <input type="email" name="user_login" className="form-control" id="email3" placeholder="Email Address *" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="submit" name="submit" defaultValue="Get New Password" className="btn btn-main btn-effect nomargin" />
                                                </div>
                                            </form>
                                            {/* End of Forger Password form */}
                                            <div className="bottom-links">
                                                <a className="cancelClick">Cancel</a>
                                            </div>
                                        </div>{/* .small-dialog-content */}
                                    </div>
                                    {/* ===== End of Forget Password wrapper ===== */}
                                </div>
                                {/* =============== END OF LOGIN & REGISTER POPUP =============== */}
                                <a href="index.html" className="text-white">Back to Home</a>
                            </div>
                        </main>
                    </div>
                }
            </div>

        )
    }
}

export default Login;