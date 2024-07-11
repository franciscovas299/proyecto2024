import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('user') !== null;

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/registro" />;
};

export default ProtectedRoute;
