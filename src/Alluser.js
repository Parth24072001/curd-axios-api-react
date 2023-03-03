import React, { useEffect, useState } from "react";
import { getUsers } from "./Api/api";

const Alluser = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setdata(res));
  }, []);

  return (
    <div className="userdata">
      {data.map((user, index) => (
        <div key={index}>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Alluser;
