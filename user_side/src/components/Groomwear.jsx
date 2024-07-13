import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import gdata from "./Groomdata";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";



const Groomwear = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    const res = await fetch('/getGroomwear', {
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
    navigate(`/Groomshop/${id}`)
  }


  return (
    <div>
      <>
        <Header />

        {/* <div className="container mx-auto">
          <div className="row">
            {gdata.map((item) => {
              return (
                <div className="col-3 mt-5">
                  <Card style={{ width: "20rem" }} className="mx-auto">
                    <Card.Img
                      variant="top"
                      src={item.img}
                      className="w-100 card_groomwear"
                    />
                    <Card.Body>
                      <Card.Title className="">
                        {item.text}
                      </Card.Title>
                      <div className="d-flex justify-content-between mt-2">
                      <Card.Text className=" text-gray-500">{item.city}</Card.Text>
                      <Card.Text className=" text-gray-500">⭐{item.review}</Card.Text>
                      </div>
                      <div className="d-flex ">
                      <Card.Text className="text-pink-800 text-lg font-semibold">{item.price}</Card.Text>
                      <Card.Text className="text-gray-500 ms-2">{item.Onwards}</Card.Text>
                    </div>
                  
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div> */}

        <div className="container mx-auto">
          <div className="mthome">

            <div className="row">
              {/* {gdata.map((item) => { */}
              {state && state.map((item) => {

                return (
                  <div className="col-4 mt-5"
                    onClick={() =>
                      handleNavigate(item.p_id)}>

                    <Card style={{ width: "20rem" }} className="mx-auto">
                      <Card.Img
                        variant="top"
                        src={item.p_img}
                        className="w-100 card_groomwear"
                      />
                      <Card.Body className="-mb-4">


                        <div className="d-flex justify-between">
                          <Card.Title>{item.p_name}</Card.Title>
                          <div className="bg-green-600 h-6 w-14 d-flex justify-content-between px-2 badge badge-pill">
                            {/* <img src={item.starimg} alt="" className="h-[14px]" /> */}
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

                          <Card.Text className=" text-gray-500">{item.review} reviwes</Card.Text>

                        </div>


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
      </>
    </div>
  );
};

export default Groomwear;
