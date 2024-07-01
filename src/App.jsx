import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NoPage from "./Components/Pages/NoPage";
import Home from "./Components/Pages/Home";
import ProductInfo from "./Components/Pages/ProductInfo";
import "./index.css";
import ScrollTop from "./Components/ScrollTop";
import CartPage from "./Components/Pages/CartPage";
import AllProductPage from "./Components/Pages/AllProductPage";
import Signup from "./Components/Pages/RegistrationPage/Signup";
import Login from "./Components/Pages/RegistrationPage/Login";
import UserDashboard from "./Components/Pages/UserDashboard";
import AdminDashboard from "./Components/Pages/Admin/AdminDashboard";

import AddProductPage from "./Components/Pages/Admin/AddProductPage";
import UpdateProductPage from "./Components/Pages/Admin/UpdateProductPage";
import MyState from "./Context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./ProtectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./ProtectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./Components/Pages/CategoryPage";

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProductPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/category/:categoryname"
            element={<CategoryPage></CategoryPage>}
          />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/admin-dashboard/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProductPage />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct/:id"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProductPage />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;
