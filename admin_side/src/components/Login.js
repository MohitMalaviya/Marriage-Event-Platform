import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [adminLogin, setAdminLogin] = useState({
    email: "",
    password: ""
  })
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAdminLogin({ ...adminLogin, [name]: value })
    // console.log(value);
  }
  const Adminlogin = async (e) => {
    e.preventDefault();
    const { email, password } = adminLogin;
    const res = await fetch("/admin/adminlogin", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })
    const data = await res.json();
    if (data.status === false) {
      const notify = () => toast.error(data.message);
      notify();
    } else {
      const notify = () => toast.success(data.message);
      notify();
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
    }
  }

  // console.log(adminLogin, "adminLogin");
  return (
    <>
      <ToastContainer />
      <form className="w-25 mx-auto my-auto border shadow p-4 mt-5 rounded ">
        <div className="form-outline mb-4">
          <label className="form-label fw-semibold " for="form2Example1">Email address</label>
          <input name="email" type="email" id="form2Example1" className="form-control" onChange={handleChange} />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label fw-semibold" for="form2Example2">Password</label>
          <input name="password" type="password" id="form2Example2" className="form-control" onChange={handleChange} />
        </div>

        <div className="row mb-4 ">
          <div className="col d-flex ">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
              <label className="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>


        </div>

        <button type="button" className="btn btn-primary btn-block mb-4 w-100" onClick={Adminlogin}>Sign in</button>

      </form>
    </>
  );
};

export default Login;
