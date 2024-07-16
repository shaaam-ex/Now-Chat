import { useEffect } from 'react';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layouts/Header/Header';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import { ThemeProvider } from './context/ThemeContext';
import { useDispatch } from 'react-redux';
import ChatHome from './components/ChatHome/ChatHome';
import { loadUser } from './actions/userAction';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    return (
        // <ThemeProvider>
        <Router>
            <Header />
            <Routes>
                <Route element={<Landing />} path="/" />
                <Route element={<ProtectedRoute />}>
                    <Route element={<Login />} path="/login" />
                    <Route element={<Signup />} path="/register" />
                </Route>
                <Route element={<ChatHome />} path="/chat" />
            </Routes>
        </Router>
        // </ThemeProvider>
    );
};

export default App;
