import Swal from "sweetalert2";
import { types } from "../types/types";
import { deleteProduct, getProducts, postProduct, putProduct } from "../helpers/producstRequest";


export const productSetActive = (event) => ({
  type: types.productSetActive,
  payload: event,
});

export const productClearActiveEvent = () => ({ type: types.productClearActiveEvent });


export const productStartLoading = (bool) => {
  return async (dispatch) => {
    const resp = await getProducts("product", bool);
    const data = resp.data;
    dispatch(productLoaded(data));
  };
};

const productLoaded = (event) => ({
  type: types.productLoaded,
  payload: event
});

export const startProductAddNew = (body) => {
  return async (dispatch) => {
    try {
      const resp = await postProduct("product", body);

      if (resp.message === "All Correct") {
        alert("product added");
        dispatch(productAddNew(resp.data));
      } else {
        alert("error, the action could not be performed");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const productAddNew = (event) => ({
  type: types.productAddNew,
  payload: event,
});


export const productStartUpdate = (id, body) => {
  return async (dispatch) => {
    try {
      const resp = await putProduct("product",id, body);

      if (resp.message === "product updated") {
        alert("product updated");
        dispatch(productUpdated(resp.data.newProduct));
      } else {
        alert("error, the action could not be performed");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const productUpdated = (event) => ({
  type: types.productUpdated,
  payload: event,
});


export const productStartDelete = (id) => {
  return async (dispatch) => {
    try {
      const resp = await deleteProduct("product", id);
      console.log(resp);
      alert("product delete");
      dispatch(productDeleted(id));
    } catch (error) {
      alert("error, the action could not be performed");
      console.log(error);
    }
  };
}

const productDeleted = (event) => ({ type: types.productDeleted, payload: event });

export const productAddSales = (event) => ({
  type: types.productAddSales,
  payload: event
});

export const productRemoveToSales = (event) => ({
  type: types.productRemoveToSales,
  payload: event
});


export const clearProductSales = () => ({ type: types.clearProductSales });


export const productAddSalesForProvider = (event) => ({
  type: types.productAddSalesForProvider,
  payload: event
});

export const productRemoveToSalesForProvider = (event) => ({
  type: types.productRemoveToSalesForProvider,
  payload: event
});

export const clearProductSalesForProvider = () => ({ type: types.clearProductSalesForProvider });

export const buyProductForCustomer = (event) => ({ 
  type: types.buyProductForCustmer,
  payload: event
});

export const buyProductForProvider = (event) => ({
  type: types.buyProductForProvider,
  payload: event
})