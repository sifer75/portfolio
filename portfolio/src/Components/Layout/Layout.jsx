import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
