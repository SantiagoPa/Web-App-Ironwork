import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LoginScreen } from '../components/auth/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startChecking } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const { checking, uid } = useSelector( state => state.auth );

    useEffect(() => {
      dispatch(startChecking ());
    }, [dispatch]);
    
    if( checking ){
        return <h5>Espere...</h5>
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<LoginScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} /> */}

                <Route exact path="/" element={
                    <PublicRoute isAuthenticated={!!uid}>
                        <LoginScreen />
                    </PublicRoute>
                }/>

                <Route exact path="/login" element={
                    <PublicRoute isAuthenticated={!!uid}>
                        <LoginScreen />
                    </PublicRoute>
                }/>

                <Route exact path="/dashboard/*" element={ 
                    <PrivateRoute isAuthenticated={!!uid}>
                        <DashboardRoutes />
                    </PrivateRoute>
                }/>

                {/* <Route path="/dashboard/*" element={<DashboardRoutes />  } /> */}

            </Routes>
        </BrowserRouter>
    )
}
