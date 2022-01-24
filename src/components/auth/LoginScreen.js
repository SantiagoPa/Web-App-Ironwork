import "../../styles/components/bg-img.css";
import { useNavigate } from "react-router-dom";
// import { types } from "../../types/types";

import { useDispatch } from 'react-redux';
import { useForm } from "../../hooks/useForm";
import { startChecking, startLogin } from "../../actions/auth";

export const LoginScreen = () => {
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formValues, handleInputChange ] = useForm({
    email: 'test1@test1.com',
    password: '123456'
  
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLogin(email, password));
  
  };

  return (
    <div className="container w-75 shadow rounded mt-5">
      <div className="row align-items-stretch h-screen m-2 p-2">
        <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>

        <div className="col bg-white rounded-end d-flex flex-column justify-content-center">
          <span className="text-body mt-5">Bienvenido</span>
          <h2 className="fw-bold text-center py-3">Ingresa con tu cuenta</h2>

          {/* LOGIN */}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="form-label">Correo Electronico</label>

              <input 
                type="email" 
                className="form-control" 
                name="email"
                value={ email}
                onChange={ handleInputChange }
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Contraseña</label>

              <input 
                type="password" 
                className="form-control"
                name="password" 
                value={ password }
                onChange={ handleInputChange }            
              />
            </div>

            <div className="d-grid">
              <button className="btn btn-dark">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
