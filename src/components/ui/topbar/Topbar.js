import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Settings } from "@material-ui/icons";
import { startLogout } from "../../../actions/auth";
import "./topbar.css";

export const Topbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { name } = useSelector( state => state.auth );

  const handleLogout = () => {
      dispatch( startLogout() );
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
                <ul className={ dropdown  ? 
                                          "dropdown-menu d-flex flex-column" 
                                          : "dropdown-menu flex-column" }>
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
            </div>
          </div>
          <span className="text-darkblue">{ name }</span>
        </div>
      </div>
    </div>
  );
};
