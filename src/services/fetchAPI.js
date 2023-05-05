import axios from "axios";

axios.defaults.baseURL = "https://644667f90431e885f0110f5f.mockapi.io";

export const getAllUsers = async () => {
  const allUsers = await axios({
    method: "get",
    url: "/tweetsusers",
  });
  return allUsers.data;
};

export const followersUpdate = async ({ id, ...data }) => {
  console.log("followUpdate", data);
  const res = await axios.put(`/tweetsusers/${id}`, data);
 
  console.log('res', res)
  return res
};

export const getSingleUser = async (id) => {
  const res = await axios(`/tweetsusers/${id}`);
  console.log("res single", res);
  return res;
};
