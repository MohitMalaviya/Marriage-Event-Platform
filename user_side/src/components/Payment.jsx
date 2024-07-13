import React, { useState } from "react";
import { json, useLocation } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';



const Payment = () => {
  // const location = useLocation()
  // console.log(location.state);
  const [cardData, setCardData] = useState({
    card_number: "",
    holder_name: "",
    card_cvv: "",
    card_expiry_date: "",
    price: "",
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name
    value = e.target.value
    setCardData({ ...cardData, [name]: value })
    // console.log(value);
  }
  console.log(cardData);
  const postData = async (e) => {
    e.preventDefault();
    const {
      card_number,
      card_cvv,
      holder_name,
      card_expiry_date,
      price
    } = cardData
    const res = await fetch("/paymentdetails", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        card_number,
        card_cvv,
        holder_name,
        card_expiry_date,
        price
      })
    })
    const data = await res.json()
    // console.log(data, "data");
    if (data.status === false) {
      const notify = () => toast.error(data.message);
      notify();
    } else {
      const notify = () => toast.success(data.message);
      notify();
    }
  }
  return (
    <>
      <ToastContainer />
      <body class="mainbody container mt-4" />
      <section class="form-signin w-90 m-auto">
        <form action="/successfull">
          {/* <div class="paylogo d-flex justify-content-center">
        <img class="mb-4" src="/images/paypal.png" w-50 height="57"/>
      </div> */}

          <div class="d-flex justify-content-center mt-2">
            <h4>Enter Your Payment Details</h4>

          </div>
          <div class="formbody mt-5 row">
            <div class="mb-3 col-12">
              <label for="formGroupExampleInput" class="form-label">Card Number</label>
              <input type="number" name="card_number" class="form-control" id="formGroupExampleInput" placeholder="xxxx - xxxx - xxxx - xxxx"
                required onChange={handleChange} />
            </div>
            <div class="mb-3 col-12">
              <label for="formGroupExampleInput2" class="form-label">Card Holder Name</label>
              <input type="text" name="holder_name" class="form-control" id="formGroupExampleInput2" placeholder="*As per card" required onChange={handleChange} />
            </div>
            <div class="mb-3 col-md-6">
              <label for="formGroupExampleInput2" class="form-label ">CVV</label>
              <input type="number" name="card_cvv" class="form-control" id="formGroupExampleInput2" placeholder="000" maxlength="3" required onChange={handleChange} />
            </div>
            <div class="mb-3 col-md-6">
              <label for="formGroupExampleInput2" class="form-label ">Expiry Date</label>
              <input type="date" name="card_expiry_date" class="form-control col-6" id="formGroupExampleInput2" placeholder="mm" required onChange={handleChange} />
            </div>
            <div class="mb-3 col-12">
              <label for="formGroupExampleInput" class="form-label">Price</label>
              <input type="number" name="price" class="form-control" id="formGroupExampleInput" placeholder="*As per Item"
                required onChange={handleChange} />
            </div>
          </div>
          <div class="row">
            <span class="text-muted">*pay in INR with 7.5% tax chargers ₹360 </span>
            <div class="col-12">
              <button class="w-100 btn btn-lg btn-primary mt-3" type="submit" onClick={postData}>Pay</button>
            </div>
          </div>
          {/* </div> */}
          <p class="mt-4 mb-2 text-muted">© 2022-2023 *Tearms and conditions apply</p>
        </form>
      </section>
    </>
  )
}

export default Payment