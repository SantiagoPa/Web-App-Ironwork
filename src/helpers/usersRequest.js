import axios from "axios";
import { url } from './url';

const axiosLogin = async (endpoint, body = {}) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.post(`${url}${endpoint}`, body,{
      headers: { "access-token": token },
    });
    let data = resp.data;
    return data;
  } catch (error) {
    return {
      message: error
    };
  }
};

const renovacionToken = async (endpoint) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.get(`${url}${endpoint}`, {
      headers: { "access-token": token },
    });
    let data = await resp.data;
    return data;
  } catch (error) {
    return {
      message: "token expired",
    };
  }
};

const postUser = async (endpoint, body = {}) => {
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

const getUsers = async (endpoint, bool = true) => {
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

const putUser = async (endpoint, uid, body = {}) => {
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

const deleteUser = async (endpoint, uid) => {
  const token = localStorage.getItem("token") || "";

  try {
    let resp = await axios.delete(`${url}${endpoint}/${uid}`, {
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

export { axiosLogin, renovacionToken, getUsers, putUser, deleteUser, postUser };
