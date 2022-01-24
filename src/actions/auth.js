import { axiosLogin, renovacionToken } from '../helpers/axios';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const startLogin = (email, password) => {
    
    return async ( dispatch ) => {
        const data = await axiosLogin('auth/login', { email, password });

        if(data.message === 'All Correct'){
            localStorage.setItem("token", data.data.token);
            
            dispatch( login({
                uid: data.data.user.uid,
                name: data.data.user.name
            }));
        
        }else {
            Swal.fire('Error', data.message, 'error');
        }
    }
        
}

export const startChecking = ()=>{
    return async (dispatch) => {
        const data = await renovacionToken('auth/renew');

        if(data.ok){
            localStorage.setItem("token", data.token);
            
            dispatch( login({
                uid: data.uid,
                name: data.name
            }));
        
        }else {
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authChekingFinish })

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () =>{
    return (dispatch) =>{
        localStorage.removeItem("token");
        dispatch( logout() );
    }
} 

const logout = () => ({ type: types.authLogout });


