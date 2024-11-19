import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Login from '../pages/auth/Login';
import SearchOrder from '../pages/SearchOrder';
import OrderTracking from '../pages/OrderTracking';
import Header from './Header';
const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="Layout">
      {/* Render Header only if not on the login page */}
      {!isLoginPage && <Header />}
      <main className="LayoutContent">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search-order" element={<SearchOrder />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
