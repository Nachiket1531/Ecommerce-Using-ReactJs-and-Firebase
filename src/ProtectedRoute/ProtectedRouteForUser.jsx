import { useNavigate } from "react-router-dom";

export const ProtectedRouteForUser = ({ children }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users"));
  if (user?.role === "user") {
    return children;
  } else {
    navigate("/");
  }
};
