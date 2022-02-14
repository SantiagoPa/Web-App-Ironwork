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
        dispatch(productAddNew(resp.data));
      } else {
        Swal.fire("Error", resp.message, "error");
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
        dispatch(productUpdated(resp.data.newProduct));
      } else {
        Swal.fire("Error", resp.message, "error");
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
      dispatch(productDeleted(id));
    } catch (error) {
      console.log(error);
    }
  };
}

const productDeleted = (event) => ({ type: types.productDeleted, payload: event });