import React, { useEffect, useState } from "react";
import Header from "./Header";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Bdata from "./Bridedata";
import Functiondress from "./Functiondrees";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { RedirectFunction, redirect } from "react-router-dom";
import { logDOM } from "@testing-library/react";
// const redirect = redirect();
const Bridewear = (props) => {
  const navigate = useNavigate();

  const [state, setState] = useState([]);


  useEffect(() => {
    getData();
  },[])
  const getData = async () => {
    const res = await fetch('/getproduct', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({})
    })
    const data = await res.json();
    console.log(data.data);
    setState(data.data)
  }





  return (
    <div>
      <>
        <Header />


        <div className="container mx-auto w-75 mt-4">
          <div className="mthome">

            <div className="outfit_img">
              <img src="../image/Bridaloutfit.webp" alt="" className="h-[400px]" />
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-4 d-flex ">
          <h1 className="text-pink-700 font-bold font-serif justify-content-center align-item-center d-flex w-100">Best Collection for all function</h1>
        </div>

        {/* function */}
        <div className="container mx-auto bg-red-50 mt-4">
          <div className="row">
            {Functiondress.map((item) => {
              return (
                <>
                  <div className="col-3">
                    <Card
                      style={{ width: "25:rem" }}
                      className="mx-auto mt-4 my-4"
                    >
                      <div className="function_img">
                        <img
                          src={item.img}
                          alt=""
                          className="w-100 h-[400px] function_card"
                        />
                      </div>
                    </Card>
                    <div className="bg-rose-200 d-flex justify-content-center -mt-9 position-absolute w-auto card-functiontext px-4">
                      {item.function}
                    </div>

                  </div>


                </>
              );
            })}
          </div>
        </div>

        <div className="container mx-auto mt-4 d-flex ">
          <h1 className="text-pink-700 font-bold font-serif justify-content-center align-item-center d-flex w-100">Trending Bride lehenga</h1>
        </div>

        {/* Bridewear */}



        <div className="container mx-auto">
          <div className="row">
            {state && state.map((item) => {
              return (
                <div className="col-3 mt-5" onClick={() => {

                  // localStorage.setItem("mydata", item.id);
                  navigate("/Brideshop")

                }}>
                  <Card style={{ width: "18rem" }} className="mx-auto">
                    <Card.Img
                      variant="top"
                      src={item.p_img}
                      className="w-100 cardimg"
                    />
                    <Card.Body className="-mb-4">
                      <div className="d-flex justify-between">
                        <Card.Title>{item.p_name}</Card.Title>
                        <div className="bg-green-600 h-6 w-14 d-flex justify-content-between px-2 badge badge-pill">
                          <img src="./image/star.png" alt="" className="h-[14px]" />
                          <Card.Text className="text-white fs-6">
                            {item.rating}
                          </Card.Text>
                        </div>
                      </div>
                      <Card.Text className=" text-gray-500" >{item.designerby}</Card.Text>

                      <div className="d-flex justify-between -mt-2">
                        <div className="d-flex align-items-center justify-center">
                          <img src="./image/location.png" alt="" className="h-[16px] d-flex justify-center align-item-center" />
                          <Card.Text className=" text-gray-500">{item.city}</Card.Text>

                        </div>
                        <Card.Text className=" text-gray-500">{item.review} reviews</Card.Text>


                      </div>

                      <hr />
                      <div className="d-flex align-items-center -mt-2">
                        <Card.Text className="text-pink-800 text-lg font-semibold">
                        ₹{item.price}
                        </Card.Text>
                        <Card.Text className="ms-2 -mt-4 text-gray-500">
                          {/* {item.Onwards} */}
                          Onwards
                        </Card.Text>
                      </div>


                    </Card.Body>
                  </Card>
                </div>
              );
            })}
            <Footer />

          </div>
        </div>



      </>
    </div>
  );
};

export default Bridewear;
