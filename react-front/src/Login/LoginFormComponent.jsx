import React, { Fragment, useState } from "react";

import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions';


const LoginForm = () => {
    //const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const { username, password } = formData;
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
        dispatch(loginUser({ username, password }));
    };
  
    return (
        <Fragment>
            <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card overflow-hidden">
                                <div className="bg-primary bg-soft">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="text-primary p-4">
                                                <h5 className="text-primary">Welcome Back !</h5>
                                                <p>Sign in to continue to Admin.</p>
                                            </div>
                                        </div>
                                        <div className="col-5 align-self-end">
                                            <img
                                                src="assets/images/profile-img.png"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="auth-logo">
                                        <a href="index.html" className="auth-logo-light">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img
                                                        src="assets/images/logo-light.svg"
                                                        alt=""
                                                        className="rounded-circle"
                                                        height="34"
                                                    />
                                                </span>
                                            </div>
                                        </a>

                                        <a href="index.html" className="auth-logo-dark">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img
                                                        src="assets/images/logo.svg"
                                                        alt=""
                                                        className="rounded-circle"
                                                        height="34"
                                                    />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="p-2">
                                        <form
                                            className="form-horizontal"
                                            action=""
                                        >
                                            <div className="mb-3">
                                                <label for="username" className="form-label">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name='username'
                                                    id="username"
                                                    value={username}
                                                    onChange={onChange}
                                                    placeholder="Enter username"
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <div className="input-group auth-pass-inputgroup">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name='password'
                                                        placeholder="Enter password"
                                                        aria-label="Password"
                                                        value={password}
                                                        onChange={onChange}
                                                        aria-describedby="password-addon"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-3 d-grid">
                                                <button
                                                    className="btn btn-primary waves-effect waves-light"
                                                    type="submit"
                                                >
                                                    Log In
                                                </button>
                                            </div>
                                            <div className="mt-4 text-center">
                                                <a href="auth-recoverpw.html" className="text-muted">
                                                    <i className="mdi mdi-lock me-1"></i> Forgot your
                                                    password?
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <div>
                                    <p>
                                        Don't have an account ?
                                        <a
                                            href="auth-register.html"
                                            className="fw-medium text-primary"
                                        >
                                            Signup now
                                        </a>
                                    </p>
                                    <p>
                                        © 2023 - Admin Panel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default LoginForm

