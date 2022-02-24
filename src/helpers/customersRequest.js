import axios from "axios";
import { url } from './url';

const getCustomers = async (endpoint, bool = false) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.get(`${url}${endpoint}?status=${bool}`,{
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

const postCustomer = async (endpoint, body = {}) => {
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

const putCustomer = async (endpoint, uid, body = {}) => {
  const token = localStorage.getItem("token") || "";

  try {
    let resp = await axios.put(`${url}${endpoint}/${uid}`, body, {
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

const deleteCustomer = async (endpoint, id) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.delete(`${url}${endpoint}/${id}`, {
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

export { getCustomers, postCustomer, putCustomer, deleteCustomer };
