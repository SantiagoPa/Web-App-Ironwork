
import React from 'react';
import '../../styles/components/bg-img.css';
import { NavLink } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div className="container w-75 shadow rounded mt-4">
        <div className="row align-items-stretch p-2 m-2">

            <div  className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
            </div>
                
            <div className="col my-5 bg-white rounded-end">
               {/* <button className="btn btn-dark">Volver</button> */}
                <NavLink to="/login" className="btn btn-dark">
                    Volver
                </NavLink>

               <h2 className="fw-bold text-center py-3" >Registrate</h2>

               {/* LOGIN */}

               <form action="#">
                    <div className="mb-4">
                        <label
                        className="form-label">
                           Nombre
                        </label>
                        
                        <input
                         className="form-control"/>
                    </div>

                    <div className="mb-4">
                        <label
                        className="form-label">
                            Apellido
                        </label>
                        
                        <input
                         className="form-control"/>
                    </div>

                    <div className="mb-4">
                        <label
                        className="form-label">
                            Nombre Usuario
                        </label>
                        
                        <input
                         className="form-control"/>
                    </div>

                    <div className="mb-4">
                        <label
                        className="form-label">
                            Correo Electronico
                        </label>
                        
                        <input
                         className="form-control"/>
                    </div>

                    <div className="mb-4">
                        <label
                            className="form-label">
                                Contraseña
                            </label>
                            
                            <input type="password"
                             className="form-control"/>
                        </div>

                    <div className="d-grid">
                        <button className="btn btn-dark" >Registrarme</button>
                    </div>
                   
               </form>

            </div>

        </div>

    </div>   
    )
}
