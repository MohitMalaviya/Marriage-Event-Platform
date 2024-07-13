import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Order = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    event_date: "",
    event_category: "",
    event_item: "",
  });

  const getData = async () => {
    const res = await fetch("/getorder", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    setState(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar className="col-2" />
      <div className="col-10">
        <div className="form-outline mb-4 mt-4">
        <h2 align="center" className='bg-danger text-white' >order details</h2>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Phone No. </th>
              <th scope="col">Event Date</th>
              <th scope="col">Event Category</th>
              <th scope="col">Event Item</th>
            </tr>

          </thead>
          {state.length ? (
            state.map((e) => {
              return (
                <tbody>
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.city}</td>
                    <td>{e.phone}</td>
                    <td>{e.event_date}</td>
                    <td>{e.event_category}</td>
                    <td>{e.event_item}</td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <tbody>
              <tr>
                <td colSpan={7} className="text-center">No Record Found</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Order;
