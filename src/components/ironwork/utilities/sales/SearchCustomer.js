import { useDispatch } from "react-redux";
import { customerSetActive } from "../../../../actions/customer";
import { uiOpenModalCustomerC } from "../../../../actions/ui";
import { getCustomerById } from "../../../../selector";

export const SearchCustomer = ({ customerFilter, customers, handleInputChange }) => {

  const dispatch = useDispatch();

  const handleCustomerAddToSales = (id) => {
    dispatch(customerSetActive(getCustomerById(id, customers)));
  };

  const handleOpenModalC = (e) => {
    e.preventDefault();
    dispatch(uiOpenModalCustomerC());
  };

  return (
    <div className="row m-1 mb-4 shadow__chart">
      <div className="col h__small overflow-auto">
        <form>
          <label className="form-label">search customer</label>
          <div className="d-flex">
            <input
              className="form-control"
              name="searchCustomer"
              onChange={handleInputChange}
            />
            <button 
              className="mx-2 btn btn-outline-success"
              onClick={handleOpenModalC}
            >
              create
            </button>
          </div>
        </form>
        {customerFilter.map((customer, index) => (
          <div
            key={index}
            className="
                my-4 
                shadow__chart d-flex 
                justify-content-between
                align-items-center
            "
          >
            <span>{customer.name}</span>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                handleCustomerAddToSales(customer._id);
              }}
            >
              add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
