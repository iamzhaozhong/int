import axios from "axios";

export const BASE_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/products`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
  },
};

export const getProduct = async () => {
  const res = await axios.get(BASE_URL, config);
  return res.data.records;
};

export const postProduct = async (body) => {
  const res = await axios.post(BASE_URL, { fields: body }, config);
  return res.data;
};
export const editProduct = async (body, id) => {
  const res = await axios.put(`${BASE_URL}/${id}`, { fields: body }, config);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`, config);
  return res.data;
};