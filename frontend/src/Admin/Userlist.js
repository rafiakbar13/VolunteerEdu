import React from "react";
import {
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Userlist() {
  return (
    <>
    <div className="mt-5">
      <NavLink
        to="/User/Participant"
        style={({ isActive }) => ({
          color: isActive ? "#5790FF" : "#2C2C2C",
          textDecoration: "none",
        })}
      >
        Participant
      </NavLink>
      <NavLink
        className="ms-3"
        to="/User/Volunteer"
        style={({ isActive }) => ({
          color: isActive ? "#5790FF" : "#2C2C2C",
          textDecoration: "none",
        })}
      >
        Volunteer
      </NavLink>
      </div>
    </>
  );
}
