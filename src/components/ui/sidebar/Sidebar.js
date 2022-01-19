import React from 'react';
import './sidebar.css';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    Report,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to="/dashboard" className="link">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon" />
                        Home
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon" />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon" />
                        Sales
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon" />
                        Reports
                    </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                    <Link to="/dashboard/customers" className="link">
                        <li className="sidebarListItem">
                        <PermIdentity className="sidebarIcon" />
                        Customers
                        </li>
                    </Link>
                    <Link to="/dashboard/products" className="link">
                        <li className="sidebarListItem">
                        <Storefront className="sidebarIcon" />
                        Products
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon" />
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className="sidebarIcon" />
                        Reports
                    </li>
                    </ul>
                </div>
            </div>
      </div>
    )
}