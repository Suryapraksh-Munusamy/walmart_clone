import React, { useEffect, useState } from 'react';
import Logo from './asset/logo1.png'
import { Button } from 'react-bootstrap'
import "./signin.css"

const Signin = () => {
    const initialValues = { email: "", FirstName: "", LastName: "", Password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a Valid email id";
        }
        
        if (!values.FirstName) {
            errors.FirstName = "First Name is required";
        }
        
        if (!values.LastName) {
            errors.LastName = "Last Name is required";
        }
        
        if (!values.Password) {
            errors.Password = "Password is required";
        } else if (values.Password.length < 8) {
            errors.Password = "Password must be at least 8 characters";
        } else if (values.Password.length > 12) {
            errors.Password = "Password must be less than 12 characters";
        }
        
        return errors;
    }

    return (
        <div className="container container-new d-flex flex-column justify-content-center align-items-center">
            {/* Success message */}
            {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className='ui message success'>Signed in Successfully</div>
            )}
            
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={Logo} alt="" style={{ width: "64px", height: "64px" }} className='m-3' />
                <p className='fs-5 fw-bold'>Create your Walmart account</p>
            </div>

            <form className='d-flex flex-column mb-4' onSubmit={handleSubmit}>
                <div className="field">
                    <p className='m-0 fw-bold'>Email address</p>
                    <input type="email" name="email" className='p-2 text-black' style={{ width: "350px" }} value={formValues.email} onChange={handleChange} />
                    <p className='red'>{formErrors.email}</p>
                </div>
                <div className="field">
                    <p className='m-0 fw-bold'>First Name</p>
                    <input type="text" name="FirstName" className='p-2' style={{ width: "350px" }} value={formValues.FirstName} onChange={handleChange} />
                    <p className='red'>{formErrors.FirstName}</p>
                </div>
                <div className="field">
                    <p className='m-0 fw-bold'>Last Name</p>
                    <input type="text" name="LastName" className='p-2' style={{ width: "350px" }} value={formValues.LastName} onChange={handleChange} />
                    <p className='red'>{formErrors.LastName}</p>
                </div>
                <div className="field">
                    <p className='m-0 fw-bold'>Create Password</p>
                    <input type="password" name="Password" className='p-2' style={{ width: "350px" }} value={formValues.Password} onChange={handleChange} />
                    <p className='red'>{formErrors.Password}</p>
                </div>

                <Button type="submit" variant='primary'>Create Account</Button>
            </form>

            <div className='d-flex flex-column' style={{ margin: "0px 0px 0px 240px" }}>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="#" style={{ fontSize: "12px" }}> Keep me Signed in</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="#" style={{ fontSize: "12px" }}>Send me emails about new arrivals, hot items, daily savings, & more.</label>
                    <p style={{ fontSize: "12px" }}>By clicking Create Account, you acknowledge you have read and agreed to our <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default Signin;
