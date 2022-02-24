import Swal from "sweetalert2";
import {
  deleteProvider,
  getProviders,
  postProvider,
  putProvider,
} from "../helpers/providersRequest";
import { types } from "../types/types";

export const providerSetActive = (event) => ({
  type: types.providerSetActive,
  payload: event,
});

export const providerClearActiveEvent = () => ({
  type: types.providerClearActiveEvent,
});

export const providerStartLoading = (bool) => {
  return async (dispatch) => {
    const resp = await getProviders("provider", bool);
    const data = resp.data;
    dispatch(providerLoaded(data));
  };
};

const providerLoaded = (event) => ({
  type: types.providerLoaded,
  payload: event,
});

export const startProviderAddNew = (body) => {
  return async (dispatch) => {
    try {
      const resp = await postProvider("provider", body);

      if (resp.message === "All Correct") {
        alert("provider added");
        dispatch(providerAddNew(resp.data));
      } else {
        alert("error, the action could not be performed");
        console.log(resp);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const providerAddNew = (event) => ({
  type: types.providerAddNew,
  payload: event,
});

export const providerStartUpdate = (id, body) => {
  return async (dispatch) => {
    try {
      const resp = await putProvider("provider", id, body);

      if (resp.message === "provider updated") {
        alert("provider udated");
        dispatch(providerUpdated(resp.data.newProvider));
      } else {
        alert("error, the action could not be performed");
        Swal.fire("Error", resp.message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const providerUpdated = (event) => ({
  type: types.providerUpdated,
  payload: event,
});

export const providerStartDelete = (id) => {
  return async (dispatch) => {
    try {
      const resp = await deleteProvider("provider", id);
      alert("provider delete");
      console.log(resp);
      dispatch(providerDeleted(id));
    } catch (error) {
      alert("error, the action could not be performed");
      console.log(error);
    }
  };
};

const providerDeleted = (event) => ({
  type: types.providerDeleted,
  payload: event,
});
