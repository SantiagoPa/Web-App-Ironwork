import axios from "axios";
import { url } from './url';


const getTransactions = async (endpoint) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.get(`${url}${endpoint}`,{
      headers: { "access-token": token },
    });
    let data = await resp.data;
    return data;
  } catch (error) {
    return {
      message: `error: ${error}`,
    };
  }
};

const getPurchases = async (endpoint) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.get(`${url}${endpoint}`,{
      headers: { "access-token": token },
    });
    let data = await resp.data;
    return data;
  } catch (error) {
    return {
      message: `error: ${error}`,
    };
  }
};

const postTransaction = async (endpoint, body = {}) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.post(`${url}${endpoint}`, body, {
      headers: { "access-token": token },
    });
    let data = await resp.data;
    return data;
  } catch (error) {
    return {
      message: error,
    };
  }
};

const postPurchase = async (endpoint, body = {}) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.post(`${url}${endpoint}`, body, {
      headers: { "access-token": token },
    });
    let data = await resp.data;
    return data;
  } catch (error) {
    return {
      message: error,
    };
  }
};

export {
    postTransaction,
    postPurchase,
    getTransactions,
    getPurchases,
}