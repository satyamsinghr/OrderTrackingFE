import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Login from '../pages/auth/Login';
import SearchOrder from '../pages/SearchOrder';
const Layout = () => {
  return (
    <div className="Layout">
      <main className="LayoutContent">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search-order" element={<SearchOrder />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
