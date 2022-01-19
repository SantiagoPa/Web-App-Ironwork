import "../../styles/components/bg-img.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { types } from "../../types/types";
import { useContext } from "react";
import { AuthContext } from "../../authorize/authContext";

export const LoginScreen = () => {
  
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    
    const action = {
      type: types.login,
      payload: {
        name: 'test',
        email: 'test@test.com'
      }
    }

    dispatch(action);
    
    const lastPath = localStorage.getItem('lastPath') || '/dashboard';

    navigate( lastPath ,{
        replace: true
    });

  };

  return (
    <div className="container w-75 shadow rounded mt-5">
      <div className="row align-items-stretch h-screen m-2 p-2">
        <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>

        <div className="col my-5 bg-white rounded-end">
          <span className="text-body mt-5">Bienvenido</span>
          <h2 className="fw-bold text-center py-3">Ingresa con tu cuenta</h2>

          {/* LOGIN */}

          <form action="#">
            <div className="mb-4">
              <label className="form-label">Correo Electronico</label>

              <input type="email" className="form-control" />
            </div>

            <div className="mb-4">
              <label className="form-label">Contraseña</label>

              <input type="password" className="form-control" />
            </div>

            <div className="my-3">
              <span>
                No tienes cuenta?
                {/* <a href="#"> Registrate</a> */}
                <NavLink className="mx-2" to="/register">
                  Registrate
                </NavLink>
              </span>
              <br />
              <span>
                <a href="#">Recuperar Contraseña</a>
              </span>
            </div>

            <div className="d-grid">
              <button className="btn btn-dark" onClick={handleLogin}>
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
