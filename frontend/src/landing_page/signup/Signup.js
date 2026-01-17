import React, { useState } from 'react';
import './Signup.css';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms and conditions';
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
            setSuccessMessage('Account created successfully! Redirecting to login...');
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
                agreeToTerms: false
            });
            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = 'http://localhost:3004/holdings';
            }, 2000);
        }
    };

    return (
        <div className='signup-container'>
            <div className='signup-wrapper'>
                <div className='signup-card'>
                    <h1 className='signup-title'>Create Your Account</h1>
                    <p className='signup-subtitle'>Join us to start trading</p>

                    {successMessage && (
                        <div className='alert alert-success' role='alert'>
                            {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label htmlFor='firstName'>First Name</label>
                                <input
                                    type='text'
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    id='firstName'
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder='Enter your first name'
                                />
                                {errors.firstName && (
                                    <div className='invalid-feedback'>{errors.firstName}</div>
                                )}
                            </div>

                            <div className='form-group'>
                                <label htmlFor='lastName'>Last Name</label>
                                <input
                                    type='text'
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    id='lastName'
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder='Enter your last name'
                                />
                                {errors.lastName && (
                                    <div className='invalid-feedback'>{errors.lastName}</div>
                                )}
                            </div>
                        </div>

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
                            <label htmlFor='phone'>Phone Number</label>
                            <input
                                type='tel'
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder='Enter your 10-digit phone number'
                            />
                            {errors.phone && (
                                <div className='invalid-feedback'>{errors.phone}</div>
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

                        <div className='form-group'>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input
                                type='password'
                                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                id='confirmPassword'
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder='Confirm your password'
                            />
                            {errors.confirmPassword && (
                                <div className='invalid-feedback'>{errors.confirmPassword}</div>
                            )}
                        </div>

                        <div className='form-group checkbox-group'>
                            <input
                                type='checkbox'
                                className={`form-check-input ${errors.agreeToTerms ? 'is-invalid' : ''}`}
                                id='agreeToTerms'
                                name='agreeToTerms'
                                checked={formData.agreeToTerms}
                                onChange={handleInputChange}
                            />
                            <label className='form-check-label' htmlFor='agreeToTerms'>
                                I agree to the terms and conditions
                            </label>
                            {errors.agreeToTerms && (
                                <div className='invalid-feedback d-block'>{errors.agreeToTerms}</div>
                            )}
                        </div>

                        <button type='submit' className='btn btn-primary btn-signup'>
                            Create Account
                        </button>
                    </form>

                    <p className='login-link'>
                        Already have an account? <a href='/login'>Log in here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;