import Layout from "./components/Layout";
import Login from "./components/Login";
import FullLayout from "./components/FullLayout";
import Dashboard from "./components/Dashboard";
import { Redirect } from "react-router-dom";
import React from 'react'

export default [
    {
        path: '/',
        layout: Layout,
        component: () => <Redirect to="/login" />
    },
    {
        path: '/login',
        layout: Layout,
        component: Login
    },
    {
        path: '/dashboard',
        layout: FullLayout,
        component: Dashboard
    }
]