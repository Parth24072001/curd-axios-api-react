import React, { useEffect, useState } from "react";
import { deleteOrder } from "./Api/api";

const Delete = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    deleteOrder().then((res) => setdata(res));
  }, []);

  return (
    <>
      <p>{!data?.data?.id ? "no data" : data?.data?.id}</p>
      <p>{!data?.data?.name ? "no data" : data?.data?.name}</p>
      <p>{!data?.data?.createdAt ? "no data" : data?.data?.createdAt}</p>
    </>
  );
};

export default Delete;
