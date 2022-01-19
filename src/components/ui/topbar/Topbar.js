import React, { useState } from 'react';
import './topbar.css';
import { Settings } from "@material-ui/icons";
import { NavLink } from 'react-router-dom';

export const Topbar = () => {

  const [dropdown, setDropdowm] = useState(false)

  const handleDropdown = () => {
    setDropdowm(!dropdown);
  } 

    return (
        <div className="topbar bg-light">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">IronWork and parts</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <div className="dropdown">
                <button className="btn btn-outline-primary" onClick={handleDropdown}>
                  settings
                  <Settings className="mx-2"/>
                </button>
                {
                  dropdown
                  ?
                  <ul className="dropdown-menu d-flex flex-column" >
                    <li>
                      <a className="dropdown-item" href="#">Action</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                        <NavLink to="/" className="dropdown-item">
                          Logout
                        </NavLink>
                    </li>
                  </ul>
                  :
                  <ul className="dropdown-menu flex-column" >
                    
                  </ul>
                }
              </div>
            </div>
            <span className="text-darkblue">Name user</span>
          </div>
        </div>
        </div>
    )
}
