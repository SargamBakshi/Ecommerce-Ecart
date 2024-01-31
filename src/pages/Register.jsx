import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [registered, setRegistered] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name) {
      errors.name = 'Full Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
     
      setRegistered(true);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ 'height': '650px' }}>
        <div className="container my-3 py-3">

          <h1 className="text-center">Register</h1>
          <hr />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="form my-3">
                  <label htmlFor="Name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {formErrors.name && <span className="text-danger">{formErrors.name}</span>}
                </div>
                <div className="form my-3">
                  <label htmlFor="Email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
                </div>
                <div className="form my-3">
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
                </div>
                <div className="my-3">
                  <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
                </div>
                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" type="submit">
                    Register
                  </button>
                </div>
              </form>
              {registered && (
                <p className="text-success text-center">Thank you for registering!</p>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Register;
