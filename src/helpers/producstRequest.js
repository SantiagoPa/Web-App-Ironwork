import axios from "axios";

const url = "http://localhost:8000/api/";

const getProducts = async (endpoint, bool = false) => {
  try {
    let resp = await axios.get(`${url}${endpoint}?status=${bool}`);
    let data = await resp.data;
    return data;
  } catch (error) {
    return {
      message: `error: ${error}`,
    };
  }
};

const postProduct = async (endpoint, body = {}) => {
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

const putProduct = async (endpoint, id, body = {}) => {
  const token = localStorage.getItem("token") || "";

  try {
    let resp = await axios.put(`${url}${endpoint}/${id}`, body, {
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

const deleteProduct = async (endpoint, id) => {
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

export { getProducts, postProduct, putProduct, deleteProduct };
