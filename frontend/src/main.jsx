import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layouts/Header/Header';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import './assets/globals.css';
import { ThemeProvider } from './context/ThemeContext';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import ChatHome from './components/ChatHome/ChatHome';
import { loadUser } from './actions/userAction';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
