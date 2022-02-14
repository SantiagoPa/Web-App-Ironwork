import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customerStartLoading } from "../../../actions/customer";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import { CustomersList } from "../utilities/customerslist/CustomersList";

export const IronworkCustomers = () => {
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(customerStartLoading(customer.switchCustomer));
  }, [customer.switchCustomer]);

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <CustomersList />
      </div>
    </>
  );
};
