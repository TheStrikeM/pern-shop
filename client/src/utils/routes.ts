import React from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const privateRoutes = [
    {
        path: '/auth',
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
    {
        path: '/device',
        component: React.Component
    },
    {
        path: '/basket',
        component: React.Component
    },
    {
        path: '/filters',
        component: React.Component
    },
]