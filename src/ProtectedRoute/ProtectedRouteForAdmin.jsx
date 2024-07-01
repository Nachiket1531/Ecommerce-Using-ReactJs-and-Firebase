/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export const ProtectedRouteForAdmin = ({ children }) => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("users"));
  if (user?.role === "admin") {
    return children;
  } else {
    navigate("/");
  }
};
