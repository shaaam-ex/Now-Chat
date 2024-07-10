import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {

    const { isAuthenticated } = useSelector(state => state.user);

    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />; // outlet for nested routes
};

export default ProtectedRoute;
