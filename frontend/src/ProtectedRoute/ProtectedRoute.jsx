import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const auth = false;
    return auth === false ? <Outlet /> : <Navigate to="/" />; // outlet for nested routes
};

export default ProtectedRoute;
