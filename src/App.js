import React from 'react';
import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
    </>
  );
}

export default App;
