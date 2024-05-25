import React from "react";
import Register from "./Register";
import  Login  from "./Login";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Temp1 from "./Temp1";
import Temp2 from "./Temp2";
import Footer from "./Footer";
import { Route, Routes, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={<NavbarFooterWrapper />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/temp1" element={<Temp1 />} />
          <Route exact path="/temp2" element={<Temp2 />} />
        </Route>
      </Routes>
    </>
  );
};

const NavbarFooterWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Render child components */}
      <Footer />
    </>
  );
};

export default App;
