import React from "react";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <a href="/Register"> Register</a>
        </li>
        <li>
          <a href="/Login"> Login</a>
        </li>
        <li>
          <a href="/Update"> Update</a>
        </li>
        <li>
          <a href="/Delete"> Delete</a>
        </li>
        <li>
          <a href="/Logout"> Logout</a>
        </li>
        <li>
          <a href="/AllUser"> All User</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
