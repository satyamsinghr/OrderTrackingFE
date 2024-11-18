import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'; 

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation
  
  const handleLogin = () => {
    navigate('/search-order');
  };

  return (
    <div>
      <header className="header py-lg-4 py-md-4 py-sm-3 py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-start">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      </header>

      <section className="login d-flex align-items-center">
        <div className="container pt-lg-4 pt-md-4 pt-3">
          <div className="row g-4 justify-content-center align-items-end">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-7 col-12">
              <div className="FormCard p-lg-4 p-md-4 p-sm-3 p-3">
                <div className="p-lg-3 p-md-3 p-0">
                  <h2>Stay Connected,<br />Stay Efficient.</h2>
                  <div className="Seprator"></div>
                  <form action="" method="post">
                    <div className="mb-4 position-relative inputOuter">
                      <input
                        type="email"
                        className="form-control"
                        id="userName"
                        placeholder="Username"
                      />
                      <label htmlFor="userName" className="form-label">Username</label>
                    </div>
                    <div className="mb-4 position-relative inputOuter">
                      <input
                        type="password"
                        className="form-control"
                        id="Password"
                        placeholder="Password"
                      />
                      <label htmlFor="Password" className="form-label">Password</label>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        className="btn btn-primary w-100"
                        onClick={handleLogin} // Attach the login handler
                      >
                        Log In
                      </button>
                      {/* <button
                        className="btn btn-trasnparent mt-2 w-100"
                      >
                        Log In
                      </button> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
