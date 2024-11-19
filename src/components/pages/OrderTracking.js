import React, { useState } from 'react';
import fullLogo from '../../assets/fullLogo.png'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
const OrderTracking = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/');
  };
  return (
    <div>
    <section className="login d-flex align-items-start">
        <div className="container pt-lg-4 pt-md-4 pt-3">
            <div className="row g-4 justify-content-center align-items-end">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="SearchCard p-lg-4 p-md-4 p-sm-3 p-3">
                        <div className="searchCardContent">
                            <h3
                                className="text-center mb-lg-4 mb-md-4 md-sm-3 mb-3 d-flex align-items-center gap-lg-4 gap-md-4 gap-3">
                                <div style={{ width: '40px', height: '40px', cursor:'pointer' }}
                                    className="d-flex align-items-center justify-content-center"
                                    onClick={ ()=> navigate('/search-order')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
                                            fill="#BFC8CA" />
                                    </svg>
                                </div>
                                Order Details
                            </h3>
                            <div className="summaryTitle mb-4">
                                <h6 className="m-0">Summary</h6>
                            </div>
                            <div
                                className="d-flex flex-lg-row flex-md-column flex-column align-items-lg-center align-items-start">
                                <div className="SummaryColumn">
                                    <ul className="orderSummary d-flex flex-column gap-2">
                                        <li className="d-flex align-items-center gap-3">
                                            <div className="summaryDetailTitle">Order Number</div>
                                            <span>:</span>
                                            <div>12345-ABCDE</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div className="summaryDetailTitle">Product</div>
                                            <span>:</span>
                                            <div>ATP Test Swabs</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div className="summaryDetailTitle">Number of Units</div>
                                            <span>:</span>
                                            <div>250,000</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="SummaryColumn">
                                    <ul className="orderSummary d-flex flex-column gap-2">
                                        <li className="d-flex align-items-center gap-3">
                                            <div className="summaryDetailTitle">Health System</div>
                                            <span>:</span>
                                            <div>Global Health Network</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div className="summaryDetailTitle">Hospital Name</div>
                                            <span>:</span>
                                            <div>St. Mary’s General Hospital</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div className="summaryDetailTitle">Department</div>
                                            <span>:</span>
                                            <div>Sterile Processing</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="SummaryColumn">
                                    <ul className="orderSummary d-flex flex-column gap-2">
                                        <li className="d-flex align-items-start gap-3">
                                            <div className="summaryDetailTitle">Address</div>
                                            <span>:</span>
                                            <div className="d-flex flex-column gap-2">
                                                <div>1234 Elm Street</div>
                                                <div>Springfield, IL 62704</div>
                                                <div>United States</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="summaryTitle my-4">
                                <h6 className="m-0">Progress</h6>
                            </div>
                            <div
                                className="d-flex flex-wrap align-items-lg-center gap-lg-2 gap-md-3 gap-sm-3 gap-3 align-items-center">
                                <div className="progressCard p-lg-3 p-md-3 p-sm-3 p-2">
                                    <h6 className="text-center">Order Initiation</h6>
                                    <ul className="d-flex flex-column gap-1 align-items-center mt-2 mb-1">
                                        <li className="text-center">
                                            Nov 1, 2024
                                        </li>
                                        <li className="text-center">
                                            04:54 PM
                                        </li>
                                    </ul>
                                    <button className="d-flex align-items-center justify-content-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                            viewBox="0 0 19 18" fill="none">
                                            <path
                                                d="M8.52143 12.15L13.8089 6.8625L12.7589 5.8125L8.52143 10.05L6.38393 7.9125L5.33393 8.9625L8.52143 12.15ZM4.32143 15.75C3.90893 15.75 3.5558 15.6031 3.26205 15.3094C2.9683 15.0156 2.82143 14.6625 2.82143 14.25V3.75C2.82143 3.3375 2.9683 2.98438 3.26205 2.69063C3.5558 2.39688 3.90893 2.25 4.32143 2.25H14.8214C15.2339 2.25 15.5871 2.39688 15.8808 2.69063C16.1746 2.98438 16.3214 3.3375 16.3214 3.75V14.25C16.3214 14.6625 16.1746 15.0156 15.8808 15.3094C15.5871 15.6031 15.2339 15.75 14.8214 15.75H4.32143Z"
                                                fill="#96CDF8" />
                                        </svg>
                                        Complete
                                    </button>
                                </div>
                                <div className="progressArrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                        fill="none">
                                        <mask id="mask0_11_2333" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="25" height="24">
                                            <rect x="0.142853" width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_11_2333)">
                                            <path
                                                d="M6.19286 19L11.1929 12L6.19286 5H8.64286L13.6429 12L8.64286 19H6.19286ZM12.1429 19L17.1429 12L12.1429 5H14.5929L19.5929 12L14.5929 19H12.1429Z"
                                                fill="#BDC2FF" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="progressCard p-lg-3 p-md-3 p-sm-3 p-2">
                                    <h6 className="text-center">Initial Details</h6>
                                    <ul className="d-flex flex-column gap-1 align-items-center mt-2 mb-1">
                                        <li className="text-center">
                                            Nov 3, 2024
                                        </li>
                                        <li className="text-center">
                                            09:21 AM
                                        </li>
                                    </ul>
                                    <button className="d-flex align-items-center justify-content-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                            viewBox="0 0 19 18" fill="none">
                                            <path
                                                d="M8.52143 12.15L13.8089 6.8625L12.7589 5.8125L8.52143 10.05L6.38393 7.9125L5.33393 8.9625L8.52143 12.15ZM4.32143 15.75C3.90893 15.75 3.5558 15.6031 3.26205 15.3094C2.9683 15.0156 2.82143 14.6625 2.82143 14.25V3.75C2.82143 3.3375 2.9683 2.98438 3.26205 2.69063C3.5558 2.39688 3.90893 2.25 4.32143 2.25H14.8214C15.2339 2.25 15.5871 2.39688 15.8808 2.69063C16.1746 2.98438 16.3214 3.3375 16.3214 3.75V14.25C16.3214 14.6625 16.1746 15.0156 15.8808 15.3094C15.5871 15.6031 15.2339 15.75 14.8214 15.75H4.32143Z"
                                                fill="#96CDF8" />
                                        </svg>
                                        Complete
                                    </button>
                                </div>
                                <div className="progressArrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                        fill="none">
                                        <mask id="mask0_11_2333" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="25" height="24">
                                            <rect x="0.142853" width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_11_2333)">
                                            <path
                                                d="M6.19286 19L11.1929 12L6.19286 5H8.64286L13.6429 12L8.64286 19H6.19286ZM12.1429 19L17.1429 12L12.1429 5H14.5929L19.5929 12L14.5929 19H12.1429Z"
                                                fill="#BDC2FF" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="progressCard p-lg-3 p-md-3 p-sm-3 p-2">
                                    <h6 className="text-center">Account Setup</h6>
                                    <ul className="d-flex flex-column gap-1 align-items-center mt-2 mb-1">
                                        <li className="text-center">
                                            Nov 3, 2024
                                        </li>
                                        <li className="text-center">
                                            10:45 AM
                                        </li>
                                    </ul>
                                    <button className="d-flex align-items-center justify-content-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                            viewBox="0 0 19 18" fill="none">
                                            <path
                                                d="M8.52143 12.15L13.8089 6.8625L12.7589 5.8125L8.52143 10.05L6.38393 7.9125L5.33393 8.9625L8.52143 12.15ZM4.32143 15.75C3.90893 15.75 3.5558 15.6031 3.26205 15.3094C2.9683 15.0156 2.82143 14.6625 2.82143 14.25V3.75C2.82143 3.3375 2.9683 2.98438 3.26205 2.69063C3.5558 2.39688 3.90893 2.25 4.32143 2.25H14.8214C15.2339 2.25 15.5871 2.39688 15.8808 2.69063C16.1746 2.98438 16.3214 3.3375 16.3214 3.75V14.25C16.3214 14.6625 16.1746 15.0156 15.8808 15.3094C15.5871 15.6031 15.2339 15.75 14.8214 15.75H4.32143Z"
                                                fill="#96CDF8" />
                                        </svg>
                                        Complete
                                    </button>
                                </div>
                                <div className="progressArrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                        fill="none">
                                        <mask id="mask0_11_2333" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="25" height="24">
                                            <rect x="0.142853" width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_11_2333)">
                                            <path
                                                d="M6.19286 19L11.1929 12L6.19286 5H8.64286L13.6429 12L8.64286 19H6.19286ZM12.1429 19L17.1429 12L12.1429 5H14.5929L19.5929 12L14.5929 19H12.1429Z"
                                                fill="#BDC2FF" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="progressCard uncomplete p-lg-3 p-md-3 p-sm-3 p-2">
                                    <h6 className="text-center">Dispatch</h6>
                                    <ul className="d-flex flex-column gap-1 align-items-center mt-2 mb-1">
                                        <li className="text-center">
                                            Nov 3, 2024
                                        </li>
                                        <li className="text-center">
                                            10:45 AM
                                        </li>
                                    </ul>
                                    <button className="d-flex align-items-center justify-content-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                            viewBox="0 0 19 18" fill="none">
                                            <path
                                                d="M9.5 12.75C9.7125 12.75 9.89063 12.6781 10.0344 12.5344C10.1781 12.3906 10.25 12.2125 10.25 12C10.25 11.7875 10.1781 11.6094 10.0344 11.4656C9.89063 11.3219 9.7125 11.25 9.5 11.25C9.2875 11.25 9.10938 11.3219 8.96563 11.4656C8.82188 11.6094 8.75 11.7875 8.75 12C8.75 12.2125 8.82188 12.3906 8.96563 12.5344C9.10938 12.6781 9.2875 12.75 9.5 12.75ZM8.75 9.75H10.25V5.25H8.75V9.75ZM9.5 16.5C8.4625 16.5 7.4875 16.3031 6.575 15.9094C5.6625 15.5156 4.86875 14.9813 4.19375 14.3063C3.51875 13.6313 2.98438 12.8375 2.59063 11.925C2.19687 11.0125 2 10.0375 2 9C2 7.9625 2.19687 6.9875 2.59063 6.075C2.98438 5.1625 3.51875 4.36875 4.19375 3.69375C4.86875 3.01875 5.6625 2.48438 6.575 2.09063C7.4875 1.69687 8.4625 1.5 9.5 1.5C10.5375 1.5 11.5125 1.69687 12.425 2.09063C13.3375 2.48438 14.1313 3.01875 14.8063 3.69375C15.4813 4.36875 16.0156 5.1625 16.4094 6.075C16.8031 6.9875 17 7.9625 17 9C17 10.0375 16.8031 11.0125 16.4094 11.925C16.0156 12.8375 15.4813 13.6313 14.8063 14.3063C14.1313 14.9813 13.3375 15.5156 12.425 15.9094C11.5125 16.3031 10.5375 16.5 9.5 16.5Z"
                                                fill="#FFB4AB" />
                                        </svg>
                                        Pending
                                    </button>
                                </div>
                                <div className="progressArrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                        fill="none">
                                        <mask id="mask0_11_2333" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="25" height="24">
                                            <rect x="0.142853" width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_11_2333)">
                                            <path
                                                d="M6.19286 19L11.1929 12L6.19286 5H8.64286L13.6429 12L8.64286 19H6.19286ZM12.1429 19L17.1429 12L12.1429 5H14.5929L19.5929 12L14.5929 19H12.1429Z"
                                                fill="#BDC2FF" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="progressCard uncomplete p-lg-3 p-md-3 p-sm-3 p-2">
                                    <h6 className="text-center">Library Setup</h6>
                                    <ul className="d-flex flex-column gap-1 align-items-center mt-2 mb-1">
                                        <li className="text-center">
                                            --
                                        </li>
                                        <li className="text-center">
                                            --
                                        </li>
                                    </ul>
                                    <button className="d-flex align-items-center justify-content-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                            viewBox="0 0 19 18" fill="none">
                                            <path
                                                d="M9.5 12.75C9.7125 12.75 9.89063 12.6781 10.0344 12.5344C10.1781 12.3906 10.25 12.2125 10.25 12C10.25 11.7875 10.1781 11.6094 10.0344 11.4656C9.89063 11.3219 9.7125 11.25 9.5 11.25C9.2875 11.25 9.10938 11.3219 8.96563 11.4656C8.82188 11.6094 8.75 11.7875 8.75 12C8.75 12.2125 8.82188 12.3906 8.96563 12.5344C9.10938 12.6781 9.2875 12.75 9.5 12.75ZM8.75 9.75H10.25V5.25H8.75V9.75ZM9.5 16.5C8.4625 16.5 7.4875 16.3031 6.575 15.9094C5.6625 15.5156 4.86875 14.9813 4.19375 14.3063C3.51875 13.6313 2.98438 12.8375 2.59063 11.925C2.19687 11.0125 2 10.0375 2 9C2 7.9625 2.19687 6.9875 2.59063 6.075C2.98438 5.1625 3.51875 4.36875 4.19375 3.69375C4.86875 3.01875 5.6625 2.48438 6.575 2.09063C7.4875 1.69687 8.4625 1.5 9.5 1.5C10.5375 1.5 11.5125 1.69687 12.425 2.09063C13.3375 2.48438 14.1313 3.01875 14.8063 3.69375C15.4813 4.36875 16.0156 5.1625 16.4094 6.075C16.8031 6.9875 17 7.9625 17 9C17 10.0375 16.8031 11.0125 16.4094 11.925C16.0156 12.8375 15.4813 13.6313 14.8063 14.3063C14.1313 14.9813 13.3375 15.5156 12.425 15.9094C11.5125 16.3031 10.5375 16.5 9.5 16.5Z"
                                                fill="#FFB4AB" />
                                        </svg>
                                        Pending
                                    </button>
                                </div>
                                <div className="progressArrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                        fill="none">
                                        <mask id="mask0_11_2333" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="25" height="24">
                                            <rect x="0.142853" width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_11_2333)">
                                            <path
                                                d="M6.19286 19L11.1929 12L6.19286 5H8.64286L13.6429 12L8.64286 19H6.19286ZM12.1429 19L17.1429 12L12.1429 5H14.5929L19.5929 12L14.5929 19H12.1429Z"
                                                fill="#BDC2FF" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="progressCard uncomplete p-lg-3 p-md-3 p-sm-3 p-2">
                                    <h6 className="text-center">Onboarding</h6>
                                    <ul className="d-flex flex-column gap-1 align-items-center mt-2 mb-1">
                                        <li className="text-center">
                                            --
                                        </li>
                                        <li className="text-center">
                                            --
                                        </li>
                                    </ul>
                                    <button className="d-flex align-items-center justify-content-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                            viewBox="0 0 19 18" fill="none">
                                            <path
                                                d="M9.5 12.75C9.7125 12.75 9.89063 12.6781 10.0344 12.5344C10.1781 12.3906 10.25 12.2125 10.25 12C10.25 11.7875 10.1781 11.6094 10.0344 11.4656C9.89063 11.3219 9.7125 11.25 9.5 11.25C9.2875 11.25 9.10938 11.3219 8.96563 11.4656C8.82188 11.6094 8.75 11.7875 8.75 12C8.75 12.2125 8.82188 12.3906 8.96563 12.5344C9.10938 12.6781 9.2875 12.75 9.5 12.75ZM8.75 9.75H10.25V5.25H8.75V9.75ZM9.5 16.5C8.4625 16.5 7.4875 16.3031 6.575 15.9094C5.6625 15.5156 4.86875 14.9813 4.19375 14.3063C3.51875 13.6313 2.98438 12.8375 2.59063 11.925C2.19687 11.0125 2 10.0375 2 9C2 7.9625 2.19687 6.9875 2.59063 6.075C2.98438 5.1625 3.51875 4.36875 4.19375 3.69375C4.86875 3.01875 5.6625 2.48438 6.575 2.09063C7.4875 1.69687 8.4625 1.5 9.5 1.5C10.5375 1.5 11.5125 1.69687 12.425 2.09063C13.3375 2.48438 14.1313 3.01875 14.8063 3.69375C15.4813 4.36875 16.0156 5.1625 16.4094 6.075C16.8031 6.9875 17 7.9625 17 9C17 10.0375 16.8031 11.0125 16.4094 11.925C16.0156 12.8375 15.4813 13.6313 14.8063 14.3063C14.1313 14.9813 13.3375 15.5156 12.425 15.9094C11.5125 16.3031 10.5375 16.5 9.5 16.5Z"
                                                fill="#FFB4AB" />
                                        </svg>
                                        Pending
                                    </button>
                                </div>
                                <div className="progressArrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                        fill="none">
                                        <mask id="mask0_11_2333" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="25" height="24">
                                            <rect x="0.142853" width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_11_2333)">
                                            <path
                                                d="M6.19286 19L11.1929 12L6.19286 5H8.64286L13.6429 12L8.64286 19H6.19286ZM12.1429 19L17.1429 12L12.1429 5H14.5929L19.5929 12L14.5929 19H12.1429Z"
                                                fill="#BDC2FF" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="progressCard uncomplete p-lg-3 p-md-3 p-sm-3 p-2">
                                    <h6 className="text-center">Demo</h6>
                                    <ul className="d-flex flex-column gap-1 align-items-center mt-2 mb-1">
                                        <li className="text-center">
                                            --
                                        </li>
                                        <li className="text-center">
                                            --
                                        </li>
                                    </ul>
                                    <button className="d-flex align-items-center justify-content-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                            viewBox="0 0 19 18" fill="none">
                                            <path
                                                d="M9.5 12.75C9.7125 12.75 9.89063 12.6781 10.0344 12.5344C10.1781 12.3906 10.25 12.2125 10.25 12C10.25 11.7875 10.1781 11.6094 10.0344 11.4656C9.89063 11.3219 9.7125 11.25 9.5 11.25C9.2875 11.25 9.10938 11.3219 8.96563 11.4656C8.82188 11.6094 8.75 11.7875 8.75 12C8.75 12.2125 8.82188 12.3906 8.96563 12.5344C9.10938 12.6781 9.2875 12.75 9.5 12.75ZM8.75 9.75H10.25V5.25H8.75V9.75ZM9.5 16.5C8.4625 16.5 7.4875 16.3031 6.575 15.9094C5.6625 15.5156 4.86875 14.9813 4.19375 14.3063C3.51875 13.6313 2.98438 12.8375 2.59063 11.925C2.19687 11.0125 2 10.0375 2 9C2 7.9625 2.19687 6.9875 2.59063 6.075C2.98438 5.1625 3.51875 4.36875 4.19375 3.69375C4.86875 3.01875 5.6625 2.48438 6.575 2.09063C7.4875 1.69687 8.4625 1.5 9.5 1.5C10.5375 1.5 11.5125 1.69687 12.425 2.09063C13.3375 2.48438 14.1313 3.01875 14.8063 3.69375C15.4813 4.36875 16.0156 5.1625 16.4094 6.075C16.8031 6.9875 17 7.9625 17 9C17 10.0375 16.8031 11.0125 16.4094 11.925C16.0156 12.8375 15.4813 13.6313 14.8063 14.3063C14.1313 14.9813 13.3375 15.5156 12.425 15.9094C11.5125 16.3031 10.5375 16.5 9.5 16.5Z"
                                                fill="#FFB4AB" />
                                        </svg>
                                        Pending
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default OrderTracking;
