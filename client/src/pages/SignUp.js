import React, { Component } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        image: "",
        bio: "",
        gender: "",
        state: "",
        country: "",
        birthday: "",
        invalid: false,
        loginCreated: false
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            profileImg: this.state.image,
            bio: this.state.bio,
            gender: this.state.gender,
            state: this.state.state,
            country: this.state.country,
            dateOfBirth: this.state.birthday
        }
        event.preventDefault();
        if (data.firstName === "" || data.lastName === "" || data.password === "" || data.email === "") {
            this.setState({ invalid: true })
        } else {
            API.signUp(data).then(res => {
                this.setState({ loginCreated: true })
            })
        }
    }
    render() {
        return (
            <div>
                <Nav />
                {this.state.loginCreated ? <Redirect to="/login" /> :

                    <div className="wrapper">
                        <main style={{ backgroundImage: 'url(assets/images/posters/movie-collection.jpg)', background: "rgb(42,40,43)" }}>
                            <div className="container mt-2">
                                {/* =============== START OF LOGIN & REGISTER POPUP =============== */}
                                <div className="small-dialog login-register">
                                    {/* ===== Start of Signin wrapper ===== */}
                                    <div className="signin-wrapper">
                                        <div className="small-dialog-headline mt-4">
                                            <h4 className="text-center">Sign Up</h4>
                                        </div>
                                        <div className="small-dialog-content">
                                            {/* Start of Login form */}
                                            <form id="cariera_login">
                                                <p className="status" />
                                                <div className="form-group">
                                                    <label htmlFor="firstName">First Name</label>
                                                    {this.state.invalid ? <p style={{ color: "red" }}>This field is required</p> : ""}
                                                    <input onChange={this.handleInputChange} name="firstName" value={this.state.firstName} type="text" className="form-control" placeholder="First name *" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Last Name</label>
                                                    {this.state.invalid ? <p style={{ color: "red" }}>This field is required</p> : ""}

                                                    <input onChange={this.handleInputChange} name="lastName" value={this.state.lastName} type="text" className="form-control" placeholder="Last name*" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email *</label>
                                                    {this.state.invalid ? <p style={{ color: "red" }}>This field is required</p> : ""}

                                                    <input onChange={this.handleInputChange} name="email" value={this.state.email} type="text" className="form-control" id="username" placeholder="Your Username or Email *" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password *</label>
                                                    {this.state.invalid ? <p style={{ color: "red" }}>This field is required</p> : ""}

                                                    <input onChange={this.handleInputChange} name="password" value={this.state.password} type="password" className="form-control" placeholder="Your Password *" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Profiile Image</label>
                                                    <input onChange={this.handleInputChange} name="image" value={this.state.image} type="text" className="form-control" placeholder="Image url" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Bio</label>
                                                    <input onChange={this.handleInputChange} name="bio" value={this.state.bio} type="text" className="form-control" placeholder="Bio" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Gender</label>
                                                    <input onChange={this.handleInputChange} name="gender" value={this.state.gender} type="text" className="form-control" placeholder="Gender" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">State</label>
                                                    <input onChange={this.handleInputChange} name="state" value={this.state.state} type="text" className="form-control" placeholder="State" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Country</label>
                                                    <input onChange={this.handleInputChange} name="country" type="text" value={this.state.country} className="form-control" placeholder="Country" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Date of Birth</label>
                                                    <input onChange={this.handleInputChange} name="birthday" type="text" value={this.state.birthday} className="form-control" placeholder="Date of birth" />
                                                </div>
                                                <div className="form-group">
                                                    <input onClick={this.handleFormSubmit} type="submit" defaultValue="Sign in" className="btn btn-main btn-effect nomargin" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                    <Link to="/" className="text-white">Back to Home</Link>
                            </div>
                        </main>

                    </div>
                }
            </div>

        )
    }

};

export default SignUp;