import React, { useEffect, useState } from "react";
import Header from "./Header";
import  Udata from "./Udaipurdata";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


const Udaipurshop = () => {
  const  navigate = useNavigate();


  const [data, setdata] = useState();
  useEffect(() => {
    const a = localStorage.getItem("mydata");
    console.log(a);
    const mydata = Udata.filter((val) => {
      return val.id == a;
    });
    setdata(mydata);
  }, []);
  console.log(data);
  return (
    <>
      <Header />
     
       

          <div className="container mx-auto mt-4">
          <div className="mthome">

            <div className="row">
              <div className="col-6 me-0 ">
              <img src={data ? data[0]?.img : ""}
                        alt=""
                     className="ms-24 w-[700px] h-[470px] shop rounded-lg" />              
            </div>

              <div className="col-6">
                <Card
                  style={{ width: "27rem", height: "20rem" }}
                  className="ms-28 bg-white shop_cart"
                >
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <Card.Title className="ms-4 fs-4">
                      {" "}
                      {data ? data[0]?.title : ""}
                    </Card.Title>
                    <div className="bg-green-600 h-7 w-16 d-flex justify-content-center px-2 badge badge-pill me-4">
                      <img
                        src={data ? data[0]?.starimg : ""}
                        alt=""
                        className="h-[15px]"
                      />
                      <Card.Text className="text-white fs-6">
                        {data ? data[0]?.point : ""}
                      </Card.Text>
                    </div>

                     

                  </div>
                  <Card.Text className="text-muted ms-4 mt-1">
                        Wedding venue in {data ? data[0]?.city : ""}
                 </Card.Text>
                    <hr className="-mt-2"/>
                    <Card.Text className=" ms-4 fs-4 text-pink-600 font-bold -mt-2 price">
                        {data ? data[0]?.price : ""}
                 </Card.Text>
                 <Card.Text className=" ms-4 text-muted -mt-2">
                        100-200 rooms (See Full Pricelist)
                 </Card.Text>

                 <hr className="-mt-2"/>
                 <div className="d-flex justify-between align-items-center ms-4 me-4" >
                        <div className="d-flex justify-center">
                         <img src="./image/share.png" alt=""  className="w-7 pink-600"/> 
                         <div className="d-flex ms-2 text-muted">Share</div>

                        </div>
                        <div className="d-flex justify-center">
                         <img src="./image/star1.png" alt=""  className="w-6 pink-600"/> 
                         <div className="d-flex ms-2 text-muted">Write Review</div>

                        </div>

                 </div>

                  <hr className=""/>
                 <div className="d-flex justify-content-center align-items-center">
                        <button className=" h-12 w-36 fs-6 text-white font-bold rounded-3xl get_quotation"
                        onClick={()=>{
                  
                  navigate("/Udaipurform")
                
                  }}>₹ Get Quotation</button>
                </div> 




                </Card>

              </div>
            </div>
            </div>
            <Footer/>
          </div>
      
    </>
  );
};

export default Udaipurshop;
