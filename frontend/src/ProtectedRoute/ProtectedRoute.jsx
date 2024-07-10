import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {

    const { isAuthenticated } = useSelector(state => state.user);

    return !isAuthenticated ? <Outlet /> : <Navigate to="/chat" />; // outlet for nested routes
};

export default ProtectedRoute;
