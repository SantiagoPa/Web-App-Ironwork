import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/auht/LoginScreen';
import { RegisterScreen } from '../components/auht/RegisterScreen';
import { IronworkScreen } from '../components/ironwork/IronworkScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />

                <Route path="/dashboard/*" element={<DashboardRoutes />  } />
            </Routes>
        </BrowserRouter>
    )
}
