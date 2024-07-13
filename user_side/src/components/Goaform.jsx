import Header from "./Header";
import Goadata from "./Goadata"
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const Goaform = ()=>{
  const  navigate = useNavigate();

    const [data, setdata] = useState();
    useEffect(() => {
      const a = localStorage.getItem("mydata");
      console.log(a);
      const mydata = Goadata.filter((val) => {
        return val.id == a;
      });
      setdata(mydata);
    }, []);
    console.log(data);

    return(
        <>
            <Header/>
            <div className="container mx-auto">
      
      <div className="mthome">

        <div className="row">
          <div className="col-6 me-0 mt-4 ">
            <img
              src={data ? data[0]?.img : ""}
              alt=""
              className="ms-24 w-[500px] h-[510px] brideshop rounded-lg"
            />
          </div>

          <div className="col-6 shadow-lg mt-4 rounded-xl">
          <h3 className="d-flex justify-center mt-8 -ml-32 text-pink-800">As You Wish Wedding venues  Rentals</h3>

            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              className="w-75 registraion_info mt-3 p-2 ms-2 "
            />

            <input
              type="text"
              name="email"
              placeholder="Email address*"
              className="w-75 registraion_info mt-3 p-2 ms-2 "
            />

            <input
              type="text"
              name="phone"
              placeholder="+91"
              className="w-75 registraion_info mt-3 p-2 ms-2 "
            />

            <input
              type="text"
              name="city"
              placeholder="Enter Your City"
              className="w-75 registraion_info mt-3 p-2 ms-2 "
            />


            {/* <input
              type="Date"
              name="name"
              placeholder="Date of event*"
              className="w-75 registraion_info mt-3 p-2 ms-2 "
            /> */}

            <div className="datepickerdiv ms-2">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
              >
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                    label="Date of event"
                    className="date_event "
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <select name="" id="" className="select_decorate mt-4 text-gray-400">
                                <option value="">Choose event* </option>
                                <option value="">Engagement</option>
                                <option value="">Wedding</option>
                                <option value="">Reception</option>



                </select> 
                <div className="d-flex justify-content-center align-items-center mt-4">
                        <button className=" h-12 w-56 fs-6 -ml-28 text-white font-bold rounded-3xl get_quotation mb-4" onClick={()=>{
                                    navigate("/Payment")


                  }}>₹ Process To Pay </button>
                </div> 



          </div>
        </div>
      </div>
      </div>
        </>
    )
}
export default Goaform;