import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from '../actions/userAction';

const ProtectedRoute = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [])

    const { isAuthenticated } = useSelector(state => state.user);

    return !isAuthenticated ? <Outlet /> : <Navigate to="/chat" />; // outlet for nested routes
};

export default ProtectedRoute;
