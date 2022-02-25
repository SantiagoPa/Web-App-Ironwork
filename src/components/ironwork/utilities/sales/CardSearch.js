import { useState } from "react";
import { useDispatch } from "react-redux";
import { productAddSales, productAddSalesForProvider } from "../../../../actions/product";
import { getCustomerById } from "../../../../selector/getCustomerById";

export const CardSearch = ({ product, products, typeValue }) => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState({ amount: 0 });

  const handleInputChange = ({ target }) => {
    setAmount(()=>{
      if (target.value > product.amount) {
        return{
          [target.name]: Number(product.amount)
        }
      }else {
        return {
          ...amount,
          [target.name]: Number(target.value),
        }
      }
    });
  };

  const reset = () => {
    setAmount({ amount: 0 });
  };

  const handleProductAddToSales = (id) => {
    reset();
    let myProduct = getCustomerById(id, products);
    amount
      ? (myProduct.orderamount = amount.amount)
      : (myProduct.orderamount = product.amount);
    dispatch(productAddSales(myProduct));
  };

  const handleProductAddToSalesForProvider = (id) => {
    let myProduct = getCustomerById(id, products);
    amount
      ? (myProduct.orderamount = amount.amount)
      : (myProduct.orderamount = product.amount);

    dispatch(productAddSalesForProvider(myProduct));
    reset();
  };

  const handleAddSalesOption = (id, typeValue) => {
    if (typeValue === 'customer') {
      return handleProductAddToSales(id);
    }else if (typeValue === 'provider'){
      return handleProductAddToSalesForProvider(id);
    }
  }

  return (
    <div
      className="
        my-4
        mt-5 
        shadow__chart 
        d-flex
        flex-row 
        justify-content-center
        align-items-center
    "
    >
      <span className="text-center">{product.name}</span>
      <div className="d-flex ps-5">
        <input
          className="form-control ps-5"
          placeholder={"0"}
          min={0}
          max={product.amount}
          name="amount"
          onChange={handleInputChange}
          type={"number"}
        />
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            handleAddSalesOption(product._id, typeValue);
          }}
        >
          agregar
        </button>
      </div>
    </div>
  );
};
