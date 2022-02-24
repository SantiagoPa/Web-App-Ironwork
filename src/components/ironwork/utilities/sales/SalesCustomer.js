import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customerClearActiveEvent } from "../../../../actions/customer";
import {
  clearProductSales,
  productRemoveToSales,
} from "../../../../actions/product";
import { startTransactionAddNew } from "../../../../actions/transactions";
import { useForm } from "../../../../hooks/useForm";
import { AddCodes } from "./AddCodes";
import { ProductInfo } from "./ProductInfo";

export const SalesCustomer = ({ customerInfo }) => {
  const { product } = useSelector((state) => state);
  let productInfo = product.buyProductForCustomer;

  const dispatch = useDispatch();
  const handleRemoveProductForCustomer = (id) => {
    dispatch(productRemoveToSales(id));
  };

  let myProducts = productInfo.filter((element) => element !== null);

  const [modal, setModal] = useState(false);
  const [myDiscount, setDiscount] = useState(0)

  const handleModal = () => {
    setModal((modal) => !modal);
  };

  const totalBuy = myProducts.reduce(
    (acc, el) => acc + el.orderamount * el.price,
    0
  );

  const [formValue, handleInputChange, reset ] = useForm({ discountForm: 0 })

  const { discountForm } = formValue


  const handleDiscountSubmit = (e) => {
    e.preventDefault();
    Number(discountForm) > 50 
                          ? setDiscount(myDiscount => myDiscount = 50) 
                          : setDiscount(myDiscount => myDiscount = Number(discountForm))   
  }

  

  const order = {
    idCustomer: customerInfo ? customerInfo._id : null,
    products: null,
    discount: myDiscount/100,
  };

  const handleBuyOrder = () => {
    dispatch(startTransactionAddNew(order));
    dispatch(clearProductSales());
    dispatch(customerClearActiveEvent());
    reset();
  };

  return (
    <div className="col-5 shadow__chart mt-2 d-flex flex-column justify-content-center">
      <div className="row my-2">
        <div className="col d-flex flex-column">
          <span>Customer:</span>
          <span>{customerInfo ? "name: " + customerInfo.name : ""}</span>
          <span>{customerInfo ? "email: " + customerInfo.email : ""}</span>
        </div>
      </div>
      <span className="mb-2">Products:</span>
      <div className="row my-2 h__50 overflow-auto">
        <div className="col">
          {myProducts.map((prod, index) => (
            <ProductInfo
              prod={prod}
              key={index}
              handleRemoveProductForCustomer={handleRemoveProductForCustomer}
            />
          ))}
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex py-4 justify-content-between">
          <form 
            className="col d-flex justify-content-center"
            onSubmit={handleDiscountSubmit}
          >
            <input 
              className="form-control" 
              placeholder="discount 0"
              name="discountForm"
              defaultValue={0} 
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-warning ms-2">make discount</button>
          </form>
          <div className="col d-flex justify-content-end aling-items-center">
            <span className="text-dark mx-2">discount: <em className="text-warning">{myDiscount}</em></span>
          </div>
        </div>
        <div className="d-flex justify-content-between jus">
          <button className="btn btn-success" onClick={handleBuyOrder}>
            buy
          </button>
          <button className="btn btn-outline-success" onClick={handleModal}>
            add codes
          </button>
          <span className="text-success">total: $ {totalBuy-totalBuy*myDiscount/100}</span>
        </div>
      </div>
      <AddCodes
        modal={modal}
        handleModal={handleModal}
        totalBuy={totalBuy}
        myProducts={myProducts}
        customerInfo={customerInfo}
        order={order}
      />
    </div>
  );
};
