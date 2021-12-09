import axios from "axios";

export const BASE_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
  },
};

export const getDays = async () => {
  const res = await axios.get(`${BASE_URL}/days`, config);
  return res.data.records;
};

export const postDays = async (body) => {
  const res = await axios.post(`${BASE_URL}/star`, { fields: body }, config);
  return res.data;
};
export const editDays = async (body, id) => {
  const res = await axios.put(`${BASE_URL}/${id}`, { fields: body }, config);
  return res.data;
};

export const deleteDays = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`, config);
  return res.data;
};