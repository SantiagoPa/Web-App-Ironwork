import React from "react";
import "./sidebar.css";
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
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate("/dashboard");
  };

  const analitycsNavigate = () => {
    navigate("/dashboard/analitycs");
  };

  const salesNavigate = () => {
    navigate("/dashboard/sales");
  };

  const reportsNavigate = () => {
    navigate("/dashboard/reports-1");
  };

  const customerNavigate = () => {
    navigate("/dashboard/customers");
  };

  const productNavigate = () => {
    navigate("/dashboard/products");
  };

  const transactionsNavigate = () => {
    navigate("/dashboard/transactions");
  };

  const reportNavigate = () => {
    navigate("/dashboard/reports-2");
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList d-flex flex-column">
            <button onClick={homeNavigate} className="btn link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </button>
            <button onClick={analitycsNavigate} className="btn link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </button>
            <button onClick={salesNavigate} className="btn link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </button>
            {/* <button onClick={reportsNavigate} className="btn link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </button> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <button onClick={customerNavigate} className=" btn link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Customers
              </li>
            </button>
            <button onClick={productNavigate} className="btn link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </button>
            <button onClick={transactionsNavigate} className="btn link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </button>
            {/* <button onClick={reportNavigate} className="btn link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </button> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
