import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [isError , setIsError] = useState(true)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.email) {
      setIsError(true)
      errors.email = "Email is required";
    }
    if (!formData.password) {
      setIsError(true)

      errors.password = "Password is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsError(false)


    }
  };

  return (
    <>
      <Navbar />
      <div style={{'height':'650px'}}>
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="floatingInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
              </div>
              <div className="my-3">
                <p>
                  New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link>
                </p>
              </div>
              <div className="text-center">
              {!isError ? <Link to="/">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
                </Link> : <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>}
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
