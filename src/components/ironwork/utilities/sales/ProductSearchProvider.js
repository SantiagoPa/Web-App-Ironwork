import React from "react";
import { useDispatch } from "react-redux";
import { productAddSalesForProvider } from "../../../../actions/product";
import { uiOpenModalProductC } from "../../../../actions/ui";
import { getCustomerById } from "../../../../selector";
import { CardSearch } from "./CardSearch";

export const ProductSearchProvider = ({ productFilter, products, handleInputChange, show }) => {
  const dispatch = useDispatch();

  const handleOpenModalC = (e) => {
    e.preventDefault();
    dispatch(uiOpenModalProductC());
  };

  return (
    <div className={
      (show) 
      ? "row m-1 shadow__chart"
      :  "row m-1 mt-5 shadow__chart h-75"
    }>
      <div className="col">
        <form>
          <label className="form-label">buscar producto</label>
          <div className="d-flex">
            <input
              className="form-control"
              name="searchProduct"
              onChange={handleInputChange}
            />
            <button 
              className="btn mx-2 btn-outline-success"
              onClick={handleOpenModalC}
            >
              crear
            </button>
          </div>
        </form>
        <div className={(show) ? "h__small overflow-auto": "h__50 overflow-auto"}>

          {productFilter.map((product, index) => (
            <CardSearch 
              key={index}
              product={product}
              products={products}
              typeValue={'provider'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
