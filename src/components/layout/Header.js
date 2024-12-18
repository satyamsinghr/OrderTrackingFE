import React from 'react';
import { useNavigate } from 'react-router-dom';
import fullLogo from '../../assets/fullLogo.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <header className="header py-lg-4 py-md-4 py-sm-3 py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-start">
            <div className="d-flex align-items-center justify-content-between w-100">
              <img src={fullLogo} height="40px" alt="Logo" />
              <div className="d-flex align-items-center gap-lg-5 gap-md-4 gap-3">
                <div className="d-flex align-items-center gap-2 userInfo d-lg-flex d-md-flex d-sm-flex d-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect width="18" height="18" rx="9" fill="#004B70" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7001 7.2C11.7001 8.69117 10.4913 9.9 9.00011 9.9C7.50894 9.9 6.30011 8.69117 6.30011 7.2C6.30011 5.70883 7.50894 4.5 9.00011 4.5C10.4913 4.5 11.7001 5.70883 11.7001 7.2ZM10.8001 7.2C10.8001 8.19411 9.99422 9 9.00011 9C8.006 9 7.20011 8.19411 7.20011 7.2C7.20011 6.20589 8.006 5.4 9.00011 5.4C9.99422 5.4 10.8001 6.20589 10.8001 7.2Z"
                      fill="#CAE6FF"
                    />
                    <path
                      d="M9.00011 11.25C6.08664 11.25 3.60428 12.9728 2.65869 15.3864C2.88904 15.6152 3.1317 15.8315 3.38559 16.0344C4.08972 13.8185 6.29863 12.15 9.00011 12.15C11.7016 12.15 13.9105 13.8185 14.6146 16.0344C14.8685 15.8315 15.1112 15.6152 15.3415 15.3864C14.3959 12.9728 11.9136 11.25 9.00011 11.25Z"
                      fill="#CAE6FF"
                    />
                  </svg>
                  Maria Saris
                </div>
                <div className="d-flex align-items-center gap-2 LogOut d-lg-flex d-md-flex d-sm-flex" onClick={handleLogout}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M6.58518 2.69995H3.80576C3.38454 2.69995 2.98056 2.86589 2.68271 3.16126C2.38486 3.45663 2.21753 3.85724 2.21753 4.27495V13.725C2.21753 14.1427 2.38486 14.5433 2.68271 14.8386C2.98056 15.134 3.38454 15.3 3.80576 15.3H6.58518M6.78257 8.99995H15.7826M15.7826 8.99995L12.3437 5.39995M15.7826 8.99995L12.3437 12.6"
                      stroke="#96CDF8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Log out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
