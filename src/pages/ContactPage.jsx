import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
    
      setMessageSent(true);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ height: "650px" }}>
        <div className="container my-3 py-3">
          <h1 className="text-center">Contact Us</h1>
          <hr />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="form my-3">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {formErrors.name && (
                    <span className="text-danger">{formErrors.name}</span>
                  )}
                </div>
                <div className="form my-3">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formErrors.email && (
                    <span className="text-danger">{formErrors.email}</span>
                  )}
                </div>
                <div className="form my-3">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    rows={5}
                    className="form-control"
                    id="Message"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {formErrors.message && (
                    <span className="text-danger">{formErrors.message}</span>
                  )}
                </div>
                <div className="text-center">
                  <button
                    className="my-2 px-4 mx-auto btn btn-dark"
                    type="submit"
                    disabled={messageSent}
                  >
                    Send
                  </button>
                  {messageSent && (
                    <p className="text-success">Message was sent!</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
