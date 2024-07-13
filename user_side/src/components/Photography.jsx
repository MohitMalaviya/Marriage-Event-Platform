import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Card } from "react-bootstrap";
import pdata from "./Photographydata";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


const Photography=(props)=> {
  const  navigate = useNavigate();
  const [state, setState] = useState([]);


  useEffect(() => {
    getData();
  },[])
  const getData = async () => {
    const res = await fetch('/getphotography', {
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
    navigate(`/Photoshop/${id}`)
  }




  return (
    <div>
      <Header />

      <div className="container mx-auto mt-24 d-flex ">

        <h1 className="text-pink-700 font-bold font-serif justify-content-center align-item-center d-flex w-100">
          Best Wedding Photography
        </h1>
      </div>

      {/* haldi galary */}
      <div className="container mx-auto w-75 mt-2  bg-yellow-50">
        <div className="row px-3">
          <div className="col ps-0">
            <img
              src="../image/haldimain.webp"
              alt=""
              className="w-100 h-[410px] mt-4 my-4 rounded haldi_mainpic"
            />
          </div>
          <div className="col my-auto pe-0">
            <div className="row my-4 ">
              <div className="col haldi_pic">
                <img
                  src="../image/haldi1.png"
                  alt=""
                  className="w-100 h-28 rounded"
                />
              </div>
              <div className="col">
                <img
                  src="../image/haldi22.png"
                  alt=""
                  className="w-100 h-28 rounded"
                />
              </div>
              <div className="col">
                <img
                  src="../image/haldimain.webp"
                  alt=""
                  className="w-100 h-28 rounded"
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col haldi_pic">
                <img
                  src="../image/haldi22.png"
                  alt=""
                  className="w-100 h-28 rounded"
                />
              </div>
              <div className="col">
                <img
                  src="../image/haldimain.webp"
                  alt=""
                  className="w-100 h-28 rounded"
                />
              </div>
              <div className="col">
                <img
                  src="../image/haldi1.png"
                  alt=""
                  className="w-100 h-28 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto">
          <div className="haldileft_text ml-12 -mt-48">
              <h1>Haldi photography</h1>
          </div>
        </div> */}
      </div>

      {/* pre-wedding */}
      <div className="container mx-auto w-75 mt-4 bg-green-50">
        <div className="row px-3">
          <div className="col my-auto ps-0">
            <div className="row my-4">
              <div className="col prewedding_pic">
                <img
                  src="../image/prewedding1.png"
                  alt=""
                  className="w-100 rounded h-32"
                />
              </div>
              <div className="col">
                <img
                  src="../image/prewedding2.png"
                  alt=""
                  className="w-100 rounded h-32"
                />
              </div>
              <div className="col">
                <img
                  src="../image/prewedding3.png"
                  alt=""
                  className="w-100 rounded h-32"
                />
              </div>
            </div>
            <div className="row my-4 prewedding_pic">
              <div className="col">
                <img
                  src="../image/prewedding4.png"
                  alt=""
                  className="w-100 rounded h-32"
                />
              </div>
              <div className="col">
                <img
                  src="../image/preweeding5.png"
                  alt=""
                  className="w-100 rounded h-32"
                />
              </div>
              <div className="col">
                <img
                  src="../image/prewedding6.png"
                  alt=""
                  className="w-100 rounded h-32"
                />
              </div>
            </div>
          </div>
          <div className="col pe-0">
            <img
              src="../image/preweddingmain.png"
              alt=""
              className="w-100 rounded h-[410px] my-4"
            />
          </div>
        </div>
      </div>

      {/* title photoes */}
      <div className="container mx-auto mt-4 d-flex ">
        <h1 className="text-pink-700 font-bold font-serif justify-content-center align-item-center d-flex w-100">
          Photography Package Available For Your Requirment
        </h1>
      </div>

      {/* card photo */}


       <div className="container-fluid mx-auto mt-8">
        <div className="row">
          {/* {pdata.map((item) => { */}
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
                    className="w-100 card_photography"
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

                    <div className="d-flex justify-between">
              <div className="d-flex align-items-center justify-center">
              <img src="./image/location.png" alt="" className="h-[16px] d-flex justify-center align-item-center" />
              <Card.Text className=" text-gray-500">{item.city}</Card.Text>

              </div>

                <Card.Text className=" text-gray-500">{item.review} reviews</Card.Text>

              </div>
              <Card.Text className=" text-gray-500 mt-2">photo+video</Card.Text>


                  <hr/>
                    <div className="d-flex -mt-2">
                      <Card.Text className="text-pink-800 text-lg font-semibold ">
                      ₹{item.price}
                      </Card.Text>
                      <Card.Text className="ms-2  text-gray-500">
                      per day
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>

              </div>

            );
          })}

        </div>
      </div> 

      <Footer/>


    </div>

  );
}

export default Photography;
