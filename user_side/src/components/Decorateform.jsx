import Header from "./Header";
import Decorationdata from "./Decorationdata";
import React, { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Decorateform = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState();
  const [order, setOrder] = useState({
    name: "", email: "", city: "", phone: "", event_date: "", event_category: "", event_item: ""
  });
  useEffect(() => {
    const a = localStorage.getItem("mydata");
    console.log(a);
    const mydata = Decorationdata.filter((val) => {
      return val.id == a;
    });
    setdata(mydata);
  }, []);
  // console.log(data);
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setOrder({ ...order, [name]: value })
    // console.log(value, "value");
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, city, phone, event_date, event_category, event_item } = order
    const res = await fetch('/order', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name, email, city, phone, event_date, event_category, event_item
      })
    })

    const data = await res.json();
    // console.log(data.data);

    if (data.status === false) {
      const notify = () => toast.error(data.message);
      notify();


    } else {
      const notify = () => toast.success(data.message);
      notify();

      setTimeout(() => {
        navigate('/payment')
      }, 1500)
    }
  }
  // console.log(order, "order");
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="container mx-auto" >

        <div className="mthome">

          <div className="row">
            {/* <div className="col-6 me-0 mt-4 ">
              <img
                src={data ? data[0]?.img : ""}
                alt=""
                className="ms-24 w-[500px] h-[510px] brideshop rounded-lg"
              />
            </div> */}
            <img
                src="../image/d18.jpeg"
                alt=""
                className="h-[550px] object-cover w-50 mt-4 "
              />


            <div className="col-6 shadow-lg mt-4 rounded-xl">
              <h3 className="d-flex justify-center mt-8 -ml-32 text-pink-800">As You Wish Wedding Decor Rentals</h3>

              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                className="w-75 registraion_info mt-3 p-2 ms-2 "
                onChange={handleChange}
              />

              <input
                type="text"
                name="email"
                placeholder="Email address*"
                className="w-75 registraion_info mt-3 p-2 ms-2 "
                onChange={handleChange}
              />

              <input
                type="number"
                name="phone"
                placeholder="+91"
                className="w-75 registraion_info mt-3 p-2 ms-2 "
                onChange={handleChange}

              />

              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                className="w-75 registraion_info mt-3 p-2 ms-2 "
                onChange={handleChange}
              />


              <input
                type="date"
                name="event_date"
                placeholder="Date of event*"
                className="w-75 registraion_info mt-3 p-2 ms-2 form-control "
                onChange={handleChange}
              />

              {/* <div className="datepickerdiv ms-2">
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                >
                  <DemoContainer components={["DateTimePicker"]} >
                    <DateTimePicker
                      label="Date of event"
                      className="date_event "
                      name="event_date"
                      onChange={handleChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div> */}

              <select name="event_category" className="select_decorate mt-4 text-gray-400" onChange={handleChange}>
                <option selected disabled>Choose Category </option>
                <option value="Decoration">Decoration</option>
                <option value="Bridewear">Bridewear</option>
                <option value="Groomwear">Groomwear</option>
                <option value="Photography">Photography</option>
              </select>
              <select name="event_item" className="select_decorate mt-4 text-gray-400" onChange={handleChange}>
                <option disabled selected>Choose Product </option>
                <option value="Decoration">Decoration</option>
                <option value="Bridewear">Bridewear</option>
                <option value="Groomwear">Groomwear</option>
                <option value="Photography">Photography</option>
              </select>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <button className=" h-12 w-56 fs-6 -ml-28 text-white font-bold rounded-3xl get_quotation mb-4" onClick={postData}>₹ Process To Pay </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Decorateform;
