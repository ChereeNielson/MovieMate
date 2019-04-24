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
    componentDidMount() {
        let data = sessionStorage.getItem('userID')
        if (data != null) {
            this.setState({ isAuthenticated: true })
        }
    }
    login = (email, password) => {
        let data = {
            password: password
        }
        API.login(email, data).then(res => {
            console.log(res);
            if (res.data.authenticated === true) {
                sessionStorage.setItem('userID', res.data.id);
                this.setState({ isAuthenticated: true })
            }
            else {
                this.setState({ badAttempt: true })
                this.setState({ email: "" })
                this.setState({ password: "" })
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
                {this.state.isAuthenticated === true ? <Redirect to="/" /> :
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
                                                    {this.state.badAttempt ? <p style={{ color: "red" }}>Invalid email or password</p> : ""}
                                                    <label htmlFor="email">Username or Email *</label>
                                                    <input onChange={this.handleInputChange} name="email" value={this.state.email} type="text" className="form-control" id="username" placeholder="Your Username or Email *" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password *</label>
                                                    <input onChange={this.handleInputChange} name="password" value={this.state.password} type="password" className="form-control" id="password" placeholder="Your Password *" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="submit" onClick={this.handleFormSubmit} defaultValue="Sign in" className="btn btn-main btn-effect nomargin" />
                                                </div>
                                            </form>
                                            {/* End of Login form */}
                                            <div className="bottom-links">
                                                <span>
                                                    Not a member?
                      <Link to="/signup" className="ml-2 signUpClick">Sign up</Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* =============== END OF LOGIN & REGISTER POPUP =============== */}
                                <Link to="/" className="text-white">Back to Home</Link>
                            </div>
                        </main>
                    </div>
                }
            </div>

        )
    }
}

export default Login;