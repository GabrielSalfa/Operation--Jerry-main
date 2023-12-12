import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        const { exp } = jwtDecode(token);
        if (Date.now() >= exp * 1000) {
            localStorage.removeItem('token');
            return false;
        }
        return true;
    } catch (error) {
        return false;
    }
};

const hasRequiredRole = (requiredRoles) => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        const { role } = jwtDecode(token);
        return requiredRoles.includes(role);
    } catch (error) {
        return false;
    }
};

const ProtectedRoute = ({ roles }) => {
    const userIsAuthenticated = isAuthenticated();
    const userHasRequiredRole = roles ? hasRequiredRole(roles) : true;

    if (!userIsAuthenticated || !userHasRequiredRole) {
        return <Navigate to="/autenticacion" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;