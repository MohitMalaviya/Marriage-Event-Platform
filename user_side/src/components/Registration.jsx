import React, { useState } from "react";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import { applyDefaultDate } from "@mui/x-date-pickers/internals";
import { json, useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setRegister({ ...register, [name]: value });
  };
  console.log(register);
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, city, phone, password, cpassword } = register;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, city, phone, password, cpassword }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === false) {
      const notify = () => toast.error(data.message);
      notify();
    } else {
      const notify = () => toast.success(data.message);
      notify();
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="container mx-auto mt-8">
        <div className="mthome">
          <div className="row">
            <div className="col-5">
              <img
                src="./image/functionmehendi.webp"
                alt=""
                className="ms-28 h-[550px]"
              />
            </div>
            <div className="col-7 shadow-lg">
              <h5 className="d-flex justify-center mt-4">
                Sign Up to access Your Dashboard
              </h5>
              {/* <form  className="mt-4 me-32"> */}
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="w-100 registraion_info p-2"
                // value={register.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="w-100 registraion_info mt-3 p-2"
                // value={register.city}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                className="w-100 registraion_info mt-3 p-2"
                // value={register.email}
                onChange={handleChange}
              />
              <div className="d-flex jutify-content-center align-items-center">
                <img
                  src="./image/indianflag.png"
                  alt=""
                  className="w-[40px] h-[40px] indian_img mt-3"
                />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+91"
                  className="w-100 registraion_info mt-3 p-2 ms-2 "
                  // value={register.phone}
                  onChange={handleChange}
                />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password*"
                className="w-100 registraion_info mt-3 p-2"
                // value={register.password}
                onChange={handleChange}
              />
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Confirm Password*"
                className="w-100 registraion_info mt-3 p-2"
                // value={register.cpassword}
                onChange={handleChange}
              />
              {/* <div className=" mt-3 "> */}
              <button
                className="btn btn-danger rounded-md fs-5 w-100 mt-3"
                onClick={postData}
              >
                Register
              </button>
              {/* </div> */}
              {/* <div className="d-flex justify-center mt-3">
                  <div>Already have an Account?</div>
                </div>
                <div className="d-flex  align-items-center justify-content-center customer_login  black mt-4 mb-2 border-dashed border-2">
                  <div className=" ms-4">Are you a customer?</div>
                  <div className="btn_customer rounded-md bg-pink-600 ms-1 mt-2 mb-2 fs-6 font-bold">
                    Customer Sign In
                  </div>
                </div> */}
              {/* </form> */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Registration;
