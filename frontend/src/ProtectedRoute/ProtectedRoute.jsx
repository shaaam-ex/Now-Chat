import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from '../actions/userAction';
import Loading from '../components/Layouts/Loading/Loading';

const ProtectedRoute = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, loading } = useSelector(state => state.user);


    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    
    if(loading) {
        return <Loading />
    }

    return isAuthenticated ? <Navigate to="/chat" /> : <Outlet />; // outlet for nested routes
};

export default ProtectedRoute;
