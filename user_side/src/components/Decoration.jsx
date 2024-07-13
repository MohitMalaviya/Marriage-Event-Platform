import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import ddata from "./Decorationdata";
import Functiondress from "./Functiondrees";

import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";


const Decoration = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    const res = await fetch('/getdecorate', {
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

  const handleNavigate = (id) => {
    // console.log(id, "idddd");
    navigate(`/Decoratshop/${id}`)
  }


  return (
    <div>
      <Header />



      <div className="container mx-auto mt-6">
        <div className="mthome">

          <Carousel>
            <Carousel.Item>
              <img
                src="../image/r11.jpg"
                class="d-block w-100"
                alt="..."
                className="decorate_main w-100 h-[550px]"
              />

              {/* <Carousel.Caption>
            <h1 className="fs-10 text-black">Engagement Decoration</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="../image/d7.jpg"
                class="d-block w-100"
                alt="..."
                className="decorate_main w-100 h-[550px]"
              />

              {/* <Carousel.Caption>
            <h1 className="fs-10 text-black">Reception Decoration</h1>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="../image/r4.jpg"
                class="d-block w-100"
                alt="..."
                className="cc w-100 h-[550px]"
              />

              {/* <Carousel.Caption>
            <h1 className="fs-10 text-black">Engagement Decoration</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
            </Carousel.Item>

          </Carousel>
        </div>
      </div>

      {/* <div className="container mx-auto">
        <div className="row">
          {ddata.map((item) => {
            return (
              <div className="col-3 mt-5">
                <Card style={{ width: "18rem" }} className="mx-auto">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    className="w-100 cardimg"
                  />
                  <Card.Body>
                    <Card.Title className="">{item.name}</Card.Title>
                    <Card.Text className=" text-gray-500">{item.location}</Card.Text>
                    <Card.Text className=" text-gray-500">{item.text}</Card.Text>
                    <div className="d-flex ">
                    <Card.Text className="text-pink-800 text-lg font-semibold">{item.price}</Card.Text>
                      <Card.Text className="ms-2  text-gray-500">{item.Onwards}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div> */}

      <div className="container mx-auto">
        <div className="row">
          {/* {ddata.map((item) => { */}
          {state && state.map((item) => {

            return (
              <div className="col-4 mt-5" onClick={() => handleNavigate(item.p_id)}
              //  onClick={() => {
              // localStorage.setItem("mydata", item.id);
              // navigate("/Decoratshop")

              // }}
              >
                <Card style={{ width: "22rem" }} className="mx-auto">
                  <Card.Img
                    variant="top"
                    src={item.p_img}
                    className="w-100 decoration_cart"
                  />


                  <Card.Body className="-mb-4">
                    <div className="d-flex justify-between -mt-1">
                      <Card.Title className="">{item.p_name}</Card.Title>
                      <div className="bg-green-600 h-6 w-14 d-flex justify-content-between px-2 badge badge-pill">
                        <img src="./image/star.png" alt="" className="h-[14px]" />
                        <Card.Text className="text-white fs-6">
                          {item.rating}
                        </Card.Text>
                      </div>
                    </div>

                    <div className="d-flex justify-between ">
                      <div className="d-flex align-items-center justify-center">
                        <img src="./image/location.png" alt="" className="h-[16px] d-flex justify-center align-item-center" />
                        <Card.Text className=" text-gray-500">{item.city}</Card.Text>

                      </div>

                      <Card.Text className=" text-gray-500">{item.review} reviews</Card.Text>

                    </div>
                    <Card.Text className=" text-gray-500 mt-2">staring price For Decorate</Card.Text>

                    <hr />
                    <div className="d-flex align-items-center -mt-2">
                      <Card.Text className="text-pink-800 text-lg font-semibold">
                        ₹{item.price}
                      </Card.Text>
                      <Card.Text className="ms-2 -mt-4 text-gray-500">
                        {/* {item.Onwards} */}Onwards
                      </Card.Text>
                    </div>

                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
        <Footer />

      </div>
    </div>
  );
};

export default Decoration;
