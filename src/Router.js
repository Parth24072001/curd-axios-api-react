import React from "react";
import { Route, Routes } from "react-router-dom";
import Delete from "./Delete";
import App from "./App";
import Register from "./Register";
import Login from "./Login";
import Update from "./Update";
import Logout from "./Logout";
import Alluser from "./Alluser";
import Home from "./Home";

const Router = () => {
  return (
    <>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Alluser" element={<Alluser />} />
      </Routes>
    </>
  );
};

export default Router;
