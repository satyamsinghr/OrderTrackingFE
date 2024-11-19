import React, { useState } from 'react';
import fullLogo from '../../assets/fullLogo.png'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
const SearchOrder = () => {
  const navigate = useNavigate();
 
  const handleOrderTrack = () => {
    navigate('/order-tracking'); 
  };
  return (
    <div>
    <section className="login d-flex align-items-center">
        <div className="container pt-lg-4 pt-md-4 pt-3">
            <div className="row g-4 justify-content-center align-items-end">
                <div className="col-xl-7 col-lg-8 col-md-10 col-sm-10 col-12">
                    <div className="SearchCard p-lg-5 p-md-4 p-sm-4 p-3">
                        <div className="searchCardContent">
                            <h3 className="text-center mb-lg-4 mb-md-4 md-sm-3 mb-3">Enter Your Order ID to Get Started</h3>
                            <form action="" method="post">
                                <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-sm-3 gap-3">
                                    <input type="text" className="form-control" id="userName" placeholder="Order ID/Number" />
                                    <button type='button' className="searchButton" onClick={handleOrderTrack}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17ZM5 17V12V7V10.5V13.5V17Z"
                                                fill="black" />
                                        </svg>
                                    </button>
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

export default SearchOrder;
