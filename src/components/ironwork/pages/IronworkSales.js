import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { customerStartLoading } from "../../../actions/customer";
import { productStartLoading } from "../../../actions/product";
import { providerStartLoading } from "../../../actions/provider";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import { Sales } from "../utilities/sales/Sales";

export const IronworkSales = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( customerStartLoading(true) );
    dispatch( productStartLoading(true) ); 
    dispatch( providerStartLoading(true) ); 
  });
  return (
    <div className="d-flex">
      <Sidebar />
      <Sales />
    </div>
  );
};
