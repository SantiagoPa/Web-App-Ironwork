import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Settings } from "@material-ui/icons";
import { startLogout } from "../../../actions/auth";
import "./topbar.css";

export const Topbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const [dropdown, setDropdowm] = useState(false);

  const myrole = localStorage.getItem('role')
  const handleNavigate = () => {
    if (myrole === "SUPER_ADMIN" || myrole === "ADMIN_ROLE") {
      navigate("/dashboard/users");
      setDropdowm(!dropdown);
    } else {
      alert("You do not have access to these views");
    }
  };

  const handleProviderNavigate = () => {
    if (myrole === "SUPER_ADMIN" || myrole === "ADMIN_ROLE") {
      navigate("/dashboard/providers");
      setDropdowm(!dropdown);
    } else {
      alert("You do not have access to these views");
    }
  };

  const handleDropdown = () => {
    setDropdowm(!dropdown);
  };

  const role = localStorage.getItem("role");

  return (
    <div className="topbar bg-light">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">IronWork and parts</span>
        </div>

        <div className="topRight">
          <span className="me-4 text-darkblue">
            Rol:
            <em className="text-primary ms-2">
              {auth.role ? auth.role : role}
            </em>
          </span>
          <div className="topbarIconContainer">
            <div className="dropdown">
              <button
                className="btn btn-outline-primary"
                onClick={handleDropdown}
              >
                Avanzado
                <Settings className="mx-2" />
              </button>
              <ul
                className={
                  dropdown
                    ? "dropdown-menu d-flex flex-column"
                    : "dropdown-menu flex-column"
                }
              >
                <li>
                  <a className="dropdown-item" onClick={handleProviderNavigate}>
                    Proveedores
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={handleNavigate}>
                    Usuarios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-danger" onClick={handleLogout}>
                    Salir
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span className="text-darkblue">usuario: <em className="text-primary">{auth.name}</em></span>
        </div>
      </div>
    </div>
  );
};
