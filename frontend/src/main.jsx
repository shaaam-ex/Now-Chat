import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layouts/Header/Header';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import './assets/globals.css';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route element={<Landing />} path='/' />
          <Route element={<ProtectedRoute />} >
            <Route element={<Login />} path='/login' />
            <Route element={<Signup />} path='/register' />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
