import Swal from "sweetalert2";
import {
  deleteUser,
  getUsers,
  postUser,
  putUser,
} from "../helpers/usersRequest";
import { types } from "../types/types";

export const startUserAddNew = (body) => {
  return async (dispatch) => {
    try {
      const resp = await postUser("user", body);

      if (resp.message === "user added") {
        dispatch(userAddNew(resp.data));
      } else {
        Swal.fire("Error", resp.message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const userAddNew = (event) => ({
  type: types.userAddNew,
  payload: event,
});

export const userSetActive = (event) => ({
  type: types.userSetActive,
  payload: event,
});

export const userClearActiveEvent = () => ({
  type: types.userClearActiveEvent,
});

export const userStartUpdate = (uid, body) => {
  return async (dispatch) => {
    try {
      const resp = await putUser("user", uid, body);

      if (resp.message === "user updated") {
        dispatch(userUpdated(resp.data.newUser));
      } else {
        Swal.fire("Error", resp.message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const userUpdated = (user) => ({
  type: types.userUpdated,
  payload: user,
});

export const userStartDelete = (uid) => {
  return async (dispatch) => {
    try {
      const resp = await deleteUser("user", uid);
      console.log(resp);
      dispatch(userDeleted(uid));
    } catch (error) {
      console.log(error);
    }
  };
};

const userDeleted = (event) => ({ type: types.userDeleted, payload: event });

export const userStartLoading = (bool) => {
  return async (dispatch) => {
    const resp = await getUsers("user", bool);
    const data = resp.data;
    dispatch(userLoaded(data));
  };
};

const userLoaded = (event) => ({
  type: types.userLoaded,
  payload: event,
});
