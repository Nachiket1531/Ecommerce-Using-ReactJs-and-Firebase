import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main-content min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
