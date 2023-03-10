import React from "react";
import { LANDING_ROUTE } from "../../constants/routes";
import { Navigate, Outlet } from "react-router-dom";

export default function LoginUtils() {
    const isLoggedIn = localStorage.getItem('token');
    return (
        isLoggedIn ? <Outlet /> : <Navigate to={LANDING_ROUTE} />
    );
};