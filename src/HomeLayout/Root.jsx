import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <div className="bg-hero bg-cover bg-top bg-no-repeat">
        <Navbar></Navbar>
      </div>
        <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
