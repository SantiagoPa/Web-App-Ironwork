import {
  getPurchases,
  getTransactions,
  postPurchase,
  postTransaction,
} from "../helpers/transactionsRequest";
import { types } from "../types/types";

export const transactionStartLoading = () => {
  return async (dispatch) => {
    const resp = await getTransactions("order");
    const data = resp.data;
    dispatch(transactionLoaded(data));
  };
};

const transactionLoaded = (event) => ({
  type: types.transactionLoaded,
  payload: event,
});

export const purchasesStartLoading = () => {
  return async (dispatch) => {
    const resp = await getPurchases("purchase");
    const data = resp.data;
    dispatch(purchasesLoaded(data));
  };
};

const purchasesLoaded = (event) => ({
  type: types.purchasesLoaded,
  payload: event,
});

export const startTransactionAddNew = (body) => {
  return async (dispatch) => {
    try {
      const resp = await postTransaction("order", body);
      if (resp.message === "All Correct") {
        alert("transaction done!");
        dispatch(transactionAddNew(resp.data));
      } else {
        alert("error, I can not make the transaction");
        console.log(resp);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const transactionAddNew = (event) => ({
  type: types.transactionAddNew,
  payload: event,
});

export const startPurchaseAddNew = (body) => {
  return async (dispatch) => {
    try {
      const resp = await postPurchase("purchase", body);
      if (resp.message === "All Correct") {
        alert("transaction done!");
        dispatch(purchaseAddNew(resp.data[0]));
      } else {
        alert("error, I can not make the transaction");
        console.log(resp);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const purchaseAddNew = (event) => ({
  type: types.purchaseAddNew,
  payload: event,
});
