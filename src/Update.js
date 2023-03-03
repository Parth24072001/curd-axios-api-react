import React, { useEffect, useState } from "react";
import { getUpdateUser } from "./Api/api";

const Update = () => {
  const [data, setdata] = useState([]);

  const [username, setuserName] = useState("");
  const [userid, setuserId] = useState("");
  useEffect(() => {
    console.log(data.data);
  }, [data]);

  const submitdata = (e) => {
    e.preventDefault();
    getUpdateUser(username, userid).then((res) => setdata(res));
  };

  return (
    <>
      <form onSubmit={submitdata}>
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          onChange={(e) => setuserName(e.target.value)}
          name="fname"
          value={username}
        />
        <label htmlFor="lname">Id:</label>
        <input
          type="text"
          id="lname"
          onChange={(e) => setuserId(e.target.value)}
          name="id"
          value={userid}
        />
        <input type="submit" defaultValue="Submit" />

        <p>{data?.data?.id}</p>
        <p>{data?.data?.name}</p>
        <p>{data?.data?.createdAt}</p>
      </form>
    </>
  );
};

export default Update;
