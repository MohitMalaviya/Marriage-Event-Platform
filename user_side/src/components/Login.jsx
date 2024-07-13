import React, { useState } from "react";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLogin({ ...login, [name]: value });
    console.log(name, value);
  };
  const postData = async () => {
    const { email, password } = login;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
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
    <div>
      <ToastContainer />
      <Header />
      <div className="container mt-4">
        <div className="mthome">
          <div className="row">
            <div className="col-4 ms-20">
              <img
                src="../image/d18.jpeg"
                alt=""
                className="h-[600px] object-cover"
              />
            </div>
            <div className="col  me-20 shadow-lg">
              <h1 className="d-flex justify-content-center text-gray-600 fs-4 mt-4">
                Sign in/Sign Up
              </h1>
              <div className="row">
                <div className="row p-4">
                  <div className="user_email">
                    <img
                      src="../image/user.png"
                      alt=""
                      className="w-[60px] h-[30px] user_img ps-4 "
                    />
                    <input
                      placeholder=" Enter email"
                      type="text"
                      name="email"
                      className="p-3 w-100 ps-5 border border-gray-400 input_email ms-4 fs-6 "
                      onChange={handleChange}
                    />
                    <br></br>
                  </div>
                  <div className="user_email">
                    <img
                      src="../image/password.png"
                      alt=""
                      className="w-[60px] h-[30px] user_img ps-4"
                    />
                    <input
                      placeholder=" password "
                      type="password"
                      name="password"
                      className="p-3 w-100 ps-5 mx-auto  border border-gray-400 input_email ms-4 fs-6"
                      onChange={handleChange}
                    />
                    <br></br>
                  </div>
                  <div className="d-flex justify-content-center mt-3 ">
                    <button
                      className="btn_signin rounded-md"
                      onClick={postData}
                    >
                      Sign In
                    </button>
                  </div>

                  <div className="text-pink-700 d-flex ms-4 justify-content-center mt-2">
                    Foregot your password?
                  </div>

                  <hr className="ms-6" />

                  {/* <div className="d-flex justify-content-center fs-4 font-semibold text-gray-600">
                    Continue With
                  </div> */}
                  {/* 
                  <div className="faceBook_google mt-2">
                    <div className="fb ms-8">
                      <img
                        src="../image/facebook.png"
                        alt=""
                        className="w-[30px] h-[30px] user_img mt-2 "
                      />
                      <div className="facebook_signin btn">Facebook</div>
                    </div>
                    <div className="goggle">
                      <img
                        src="../image/google.png"
                        alt=""
                        className="w-[30px] h-[30px] user_img mt-2"
                      />
                      <div className="google_signin btn">Google</div>
                    </div>
                  </div>  */}

                  {/* <div className="facebook_goggle d-flex justify-between">
                    <button> <img
                        src="../image/facebook.png"
                        alt=""
                        className="w-[30px] h-[30px] user_img mt-2 absolute"
                      /></button>
                      <div className="ms-1 d-flex mt-1 align-middle">Face book</div>
                      <button> <img
                        src="../image/facebook.png"
                        alt=""
                        className="w-[30px] h-[30px] user_img mt-2 absolute"
                      /></button>
                      <div className="ms-12 d-flex mt-1 align-middle">Face book</div>
                  </div>                   */}

                  {/* <div className="mt-4 d-flex justify-content-center font-semibold fs-5">
                        Are You A Vendor?
                    </div>

                    <div className="mt-2 d-flex justify-content-center fs-6 text-pink-700">
                        Bussiness SignIn
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
