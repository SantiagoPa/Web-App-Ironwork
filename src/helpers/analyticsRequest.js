import axios from "axios";
import { url } from "./url";

export const getTopSellers = async (endpoint) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.get(`${url}${endpoint}`, {
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

export const getInfoChartYear = async (endpoint, year, month) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.get(`${url}${endpoint}${year}/${month}`, {
      headers: { "access-token": token },
    });
    let data = await resp.data;
    console.log(data)
    return data;
  } catch (error) {
    return {
      message: `error: ${error}`,
    };
  }
};

export const getBalance = async (endpoint, range) => {
  const token = localStorage.getItem("token") || "";
  try {
    let resp = await axios.get(`${url}${endpoint}${range}`, {
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

