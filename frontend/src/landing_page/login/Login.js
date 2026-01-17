import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccessMessage('');
        } else {
            setErrors({});
            setSuccessMessage('Login successful! Redirecting...');
            // Reset form
            setFormData({
                email: '',
                password: '',
                rememberMe: false
            });
            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = 'http://localhost:3004/holdings';
            }, 2000);
        }
    };

    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <div className='login-card'>
                    <h1 className='login-title'>Welcome Back</h1>
                    <p className='login-subtitle'>Log in to your account</p>

                    {successMessage && (
                        <div className='alert alert-success' role='alert'>
                            {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='email'>Email Address</label>
                            <input
                                type='email'
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder='Enter your email'
                            />
                            {errors.email && (
                                <div className='invalid-feedback'>{errors.email}</div>
                            )}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                id='password'
                                name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder='Enter your password'
                            />
                            {errors.password && (
                                <div className='invalid-feedback'>{errors.password}</div>
                            )}
                        </div>

                        <div className='form-group checkbox-group'>
                            <input
                                type='checkbox'
                                className='form-check-input'
                                id='rememberMe'
                                name='rememberMe'
                                checked={formData.rememberMe}
                                onChange={handleInputChange}
                            />
                            <label className='form-check-label' htmlFor='rememberMe'>
                                Remember me
                            </label>
                        </div>

                        <button type='submit' className='btn btn-primary btn-login'>
                            Log In
                        </button>
                    </form>

                    <p className='forgot-password'>
                        <a href='#forgot'>Forgot your password?</a>
                    </p>

                    <p className='signup-link'>
                        Don't have an account? <a href='http://localhost:3003/signup'>Sign up here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
