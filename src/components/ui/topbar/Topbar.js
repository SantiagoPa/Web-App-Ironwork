import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "@material-ui/icons";
import { AuthContext } from "../../../authorize/authContext";
import { types } from "../../../types/types";
import "./topbar.css";

export const Topbar = () => {
  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: types.logout });

    navigate("/login", {
      replace: true,
    });
  };

  const [dropdown, setDropdowm] = useState(false);

  const handleDropdown = () => {
    setDropdowm(!dropdown);
  };

  return (
    <div className="topbar bg-light">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">IronWork and parts</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <div className="dropdown">
              <button
                className="btn btn-outline-primary"
                onClick={handleDropdown}
              >
                settings
                <Settings className="mx-2" />
              </button>
              {dropdown ? (
                <ul className="dropdown-menu d-flex flex-column">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="dropdown-menu flex-column"></ul>
              )}
            </div>
          </div>
          <span className="text-darkblue">{user.name}</span>
        </div>
      </div>
    </div>
  );
};
