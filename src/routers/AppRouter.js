import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<LoginScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} /> */}

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                }/>

                <Route path="/dashboard/*" element={ 
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                }/>

                {/* <Route path="/dashboard/*" element={<DashboardRoutes />  } /> */}

            </Routes>
        </BrowserRouter>
    )
}
