import axios from "axios";

// axios.get("https://reqres.in/api/users?page=2")
// .then((res)=>console.log(res.data.data))
// .catch((err)=>console.log(err))

// axios
//   .post("https://reqres.in/api/users", {
//     id: "16",
//     name: "parth",
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// axios.put("https://reqres.in/api/users/416",{
//   first_name:"parth poshiya",
//   last_name:"parth2407"
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// axios.delete("https://reqres.in/api/users/416",{
//   first_name:"parth poshiya",
//   last_name:"parth2407"
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

const api = "https://reqres.in/api/users";

//AllUser

export const getUsers = async () => {
  const data = await axios.get(`${api}"?page=2"`).then((res) => res.data.data);
  return data;
};

//Register
export const addUser = (username, userid) => {
  const data = axios.post("https://reqres.in/api/users", {
    id: userid,
    name: username,
  });
  return data;
};

// //UpdateUser

export const getUpdateUser = () => {
  const data = axios.put(`${api}"/16"`, {
    id: "16",
    name: "poshiya",
  });
  return data;
};

//DeleteUser

export const deleteOrder = () => {
  const data = axios.delete(`${api}"/20"`);
  return data;
};
// //Login

// export const AuthLogin = (data) => {
//   return api
//     .post(`/login`, data)
//     .then((response) => Cookies.set("token", response.data.token));
// };

export default api;
