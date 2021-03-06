import Swal from "sweetalert2";
import { getCustomers, 
         postCustomer, 
         putCustomer, 
         deleteCustomer } from "../helpers/customersRequest";

import { types } from "../types/types";

export const customerSetActive = (event) => ({
  type: types.customerSetActive,
  payload: event,
});

export const customerClearActiveEvent = () => ({  type: types.customerClearActiveEvent });

export const customerStartLoading = (bool) => {
  return async (dispatch) => {
    const resp = await getCustomers("customer", bool);
    const data = resp.data;
    dispatch(customerLoaded(data));
  };
};

const customerLoaded = (event) => ({
  type: types.customerLoaded,
  payload: event,
});

export const startCustomerAddNew = (body) => {
  return async (dispatch) => {
    try {
      const resp = await postCustomer("customer", body);

      if (resp.message === "All Correct") {
        alert("customer added");
        dispatch(customerAddNew(resp.data));
      } else {
        alert("error, the action could not be performed");
        console.log(resp);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const customerAddNew = (event) => ({
  type: types.customerAddNew,
  payload: event,
});

export const customerStartUpdate = (id, body) => {
  return async (dispatch) => {
    try {
      const resp = await putCustomer("customer", id, body);

      if (resp.message === "customer updated") {
        alert("customer updated");
        dispatch(customerUpdated(resp.data.newCustomer));
      } else {
        alert("error, the action could not be performed");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const customerUpdated = (event) => ({
  type: types.customerUpdated,
  payload: event,
});

export const customerStartDelete = (id) => {
  return async (dispatch) => {
    try {
      const resp = await deleteCustomer("customer",id);
      alert("customer delete");
      console.log(resp)
      dispatch(customerDeleted(id));
    } catch (error) {
      alert("error, the action could not be performed");
      console.log(error);
    }
  };
};

const customerDeleted = (event) => ({ type: types.customerDeleted, payload: event });