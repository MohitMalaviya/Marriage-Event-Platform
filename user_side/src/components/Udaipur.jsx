import React from "react";
import Header from "./Header";
import { Card } from "react-bootstrap";
import Udata from "./Udaipurdata";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


const Udaipur= (props)=>{
  const  navigate = useNavigate();

    return(
        <>
            <Header/>
            <div className="container mt-4">
            <div className="mthome">

        <div className="row">
            {Udata.map((item)=>{
                return(
                    <>
                        <Card style={{ width: "22rem", height:"21rem"}} className="mx-auto mt-4"
                        onClick={()=>{
                  
                  localStorage.setItem("mydata",item.id);
                  navigate("/Udaipurshop")}}>
            <Card.Img variant="top" src={item.img} className="mt-3 goa_img w-100" 

            />
            <Card.Body>
              <div className="d-flex justify-between">
                <Card.Title>{item.title}</Card.Title>
                <div className="bg-green-600 h-6 w-14 d-flex justify-content-between px-2 badge badge-pill">
                  <img src={item.starimg} alt="" className="h-[14px]" />
                  <Card.Text className="text-white fs-6">{item.point}</Card.Text>
                </div>
              </div>

              <div className="d-flex justify-between">
              <div className="d-flex justify-center align-items-center">
                  <img src="./image/location.png" alt="" className="h-[16px]" />

                <Card.Text className=" text-gray-500">{item.city}</Card.Text>
              </div>
                                                
                <Card.Text className=" text-gray-500">{item.review}</Card.Text>

              </div>


              <hr className="mt-2"/>

              <div className="d-flex justify-between">
                <Card.Text className="text-pink-800 text-lg font-semibold -mt-2">{item.price}</Card.Text>
                <Card.Text className=" text-gray-500 -mt-2">{item.text}</Card.Text>
              </div>
            </Card.Body>
          </Card>
                    </>
                )
            })}
         
        </div>
        </div>
        <Footer/>
      </div>
        </>
    )
}

export default Udaipur;