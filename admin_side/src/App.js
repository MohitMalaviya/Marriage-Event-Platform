import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.js";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddProduct from "./components/AddProduct";
import AddDecorate from "./components/AddDecorate";
import AddGroomwear from "./components/AddGroomwear";
import AddPhotography from "./components/AddPhotography";
import Order from "./components/Order";
import Payment from "./components/Payment";
import Decorate from "./components/Decorate";
import UpdateDecorate from "./components/UpdateDecorate";
import Register from "./components/Register";
import GroomWear from "./components/GroomWear";
import UpdateGroomWear from "./components/UpdateGroomWear";
import BrideWear from "./components/BrideWear";
import Photography from "./components/Photography";
import UpdateBrideWear from "./components/UpdateBrideWear";
import UpdatePhotography from "./components/UpdatePhotography";
import User from "./components/User";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AddProduct />} />
        <Route path="/addbridewear" element={<AddProduct />} />
        <Route path="/adddecorate" element={<AddDecorate />} />
        <Route path="/addgroomwear" element={<AddGroomwear />} />
        <Route path="/addphotography" element={<AddPhotography />} />
        <Route path="/order" element={<Order/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/decorate" element={<Decorate/>} />
        <Route path="/updatedecorate/:id" element={<UpdateDecorate/>} />
        <Route path="/groomwear" element={<GroomWear/>} />
        <Route path="/updategroomwear/:id" element={<UpdateGroomWear/>} />
        <Route path="/bridewear" element={<BrideWear/>} />
        <Route path="/updatebridewear/:id" element={<UpdateBrideWear/>} />
        <Route path="/photography" element={<Photography/>} />
        <Route path="/updatephotography/:id" element={<UpdatePhotography/>} />
        <Route path="/users" element={<User/>} />
      </Routes>
    </>
  );
}

export default App;
