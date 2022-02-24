import axios from "axios";
import { url } from './url';

const getProviders = async (endpoint, bool = false) => {
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

const postProvider = async (endpoint, body = {}) => {
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

const putProvider = async (endpoint, uid, body = {}) => {
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

const deleteProvider = async (endpoint, id) => {
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

export { getProviders, postProvider, putProvider, deleteProvider };
