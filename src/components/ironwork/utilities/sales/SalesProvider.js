import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProductSalesForProvider, productRemoveToSalesForProvider } from "../../../../actions/product";
import { providerClearActiveEvent } from "../../../../actions/provider";
import { startTransactionAddNew } from "../../../../actions/transactions";
import { AddCodes } from "./AddCodes";
import { AddCodesProvider } from "./AddCodesProvider";
import { ProductInfo } from "./ProductInfo";

export const SalesProvider = ({ provadierInfo }) => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state);
  const productInfoProvider = product.buyProductForProvider;

  const handleRemoveProductForProvider = (id) => {
    dispatch(productRemoveToSalesForProvider(id));
  };

  const myProductsProvider = productInfoProvider.filter(
    (element) => element !== null
  );

  const [modal, setModal] = useState(false);

  const handleModalProvider = () => {
    setModal((modal) => !modal);
  };

  const totalBuyProvider = myProductsProvider.reduce(
    (acc, el) => acc + el.orderamount * el.price,
    0
  );

  return (
    <div className="col-5 shadow__chart d-flex flex-column justify-content-center">
      <div className="row my-2">
        <div className="col d-flex flex-column">
          <span>Provider:</span>
          <span>{provadierInfo ? "name: " + provadierInfo.name : ""}</span>
          <span> {provadierInfo ? "email: " + provadierInfo.email : ""}</span>
        </div>
      </div>
      <span className="mb-2">Products:</span>
      <div className="row my-2 h__50 overflow-auto">
        <div className="col">
          {myProductsProvider.map((prod, index) => (
            <ProductInfo
              prod={prod}
              key={index}
              handleRemoveProductForCustomer={handleRemoveProductForProvider}
            />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-outline-success"
          onClick={handleModalProvider}
        >
          add payment option
        </button>
        <span className="text-success">total: $ {totalBuyProvider}</span>
      </div>
      <AddCodesProvider
         modal={modal}
         handleModalProvider={handleModalProvider}
         totalBuyProvider={totalBuyProvider}
         myProductsProvider={myProductsProvider}
         provadierInfo={provadierInfo}
      />
    </div>
  );
};
