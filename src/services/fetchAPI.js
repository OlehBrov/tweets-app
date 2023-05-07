import axios from "axios";

axios.defaults.baseURL = "https://644667f90431e885f0110f5f.mockapi.io";


export const getAllUsers = async (page, limit, isFollowed) => {
  const allUsers = await axios({
    method: "get",
    url: "/tweetsusers",
    params:{page, limit, isFollowed}
  });
  return allUsers;
};

export const followersUpdate = async ({ id, ...data }) => {
  const res = await axios.put(`/tweetsusers/${id}`, data);
 
  return res
};

export const getSingleUser = async (id) => {
  const {data} = await axios(`/tweetsusers/${id}`);
  return data;
};
