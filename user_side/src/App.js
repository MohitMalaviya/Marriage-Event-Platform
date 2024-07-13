// import React from "react";
import Home from "./components/Home";
import Bridewear from "./components/Bridewear";
import "./App.css";
import Decoration from "./components/Decoration";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Groomwear from "./components/Groomwear";
import Photography from "./components/Photography";   
import Testimonials from "./components/Testmonials";
import Login from "./components/Login";
import Goa from "./components/Goa";
import Jaipur from "./components/Jaipur";
import Udaipur from "./components/Udaipur";
import Registration from "./components/Registration";
import Brideshop from "./components/Brideshop";
import Decoratshop from "./components/Decoratshop";
import Groomshop from "./components/Groomshop";
import Photoshop from "./components/Photoshop";
import Goashop from "./components/Goashop";
import Udaipurshop from "./components/Udaipurshop";
import Jaipurshop from "./components/Jaipurshop";
import Brideform from "./components/Brideform";
import Groomform from "./components/Groomform";
import Decorateform from "./components/Decorateform";
import Photoform from "./components/Photoform";
import Goaform from "./components/Goaform";
import Udaipurform from "./components/Udaipurform";
import Jaipurform from "./components/Jaipurform";
import Destination from "./components/Destination";
import Payment from "./components/Payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/decoration" element={<Decoration />} />
        <Route path="/bridewear" element={<Bridewear />} />
        <Route path="/groomwear" element={<Groomwear />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Goa" element={<Goa />} />
        <Route path="/jaipur" element={<Jaipur />} />
        <Route path="/Udaipur" element={<Udaipur />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Brideshop" element={<Brideshop />} />
        <Route path="/Decoratshop/:id" element={<Decoratshop />} />
        <Route path="/Groomshop/:id" element={<Groomshop />} />
        <Route path="/photoshop/:id" element={<Photoshop/>} />
        <Route path="/Goashop" element={<Goashop/>} />
        <Route path="/Udaipurshop" element={<Udaipurshop/>} />
        <Route path="/Jaipurshop" element={<Jaipurshop/>} />
        <Route path="/Brideform" element={<Brideform/>} />
        <Route path="/Groomform" element={<Groomform/>} />
        <Route path="/Decorateform" element={<Decorateform/>} />
        <Route path="/Photoform" element={<Photoform/>} />
        <Route path="/Goaform" element={<Goaform/>} />
        <Route path="/Udaipurform" element={<Udaipurform/>} />
        <Route path="/Jaipurform" element={<Jaipurform/>} />
        <Route path="/Destination" element={<Destination/>} />
        <Route path="/Payment" element={<Payment/>}/>
      </Routes>
    </>
  );
}

export default App;
