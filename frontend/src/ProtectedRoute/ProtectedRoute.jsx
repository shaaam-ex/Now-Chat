import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = () => {
    const token = Cookies.get('token');

    return !token ? <Outlet /> : <Navigate to="/" />; // outlet for nested routes
};

export default ProtectedRoute;
