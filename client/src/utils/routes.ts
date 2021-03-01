import React from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const privateRoutes = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
]

export const publicRoutes = [
    {
        path: '/home',
        component: React.Component
    },
]