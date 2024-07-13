import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useLinkClickHandler, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const AddProduct = () => {
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    p_name: "",
    p_img: "",
    designerby: "",
    city: "",
    price: "",
    rating: "",
    review: ""
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name
    if (name === "p_img") {
      value = e.target.files[0];
    }
    else {
      value = e.target.value
    }
    setProduct({ ...product, [name]: value })
    // console.log(e.targert.value);
  }
  const postData = async (e) => {
    e.preventDefault();
    const { p_img, p_name, designerby, city, rating, review, price } = product;
    const form_data = new FormData();
    form_data.append("p_img", p_img);
    form_data.append("p_name", p_name);
    form_data.append("designerby", designerby);
    form_data.append("city", city);
    form_data.append("rating", rating);
    form_data.append("review", review);
    form_data.append("price", price);
    const res = await fetch("/addproduct", {
      method: "POST",
      body: form_data
    })
    const data = await res.json()
    // console.log(data);
    if (data.status === false) {
      const notify = () => toast.error(data.message);
      notify();
    } else {
      const notify = () => toast.success(data.message);
      notify();
      setTimeout(() => {
        navigate('/product')
      }, 2000);
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="d-flex">
        <Sidebar className="col-2" />
        <form className="col-10 mt-3 px-3">
          <div className="form-outline mb-4 mt-2">
          <h2 align="center" className='bg-danger text-white' >Add Bridewear</h2>
          </div>
          <div className="form-outline mb-4">
            <input type="file" className="form-control" name="p_img" onChange={handleChange} />
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              name="p_name"
              onChange={handleChange}
            />
          </div>
          {/* <div className="form-outline mb-4">
            <select class="form-select">
              <option disabled>Select Product Category</option>
              <option >Decoaration</option>
              <option >Bride Wear</option>
              <option >Groom Wear</option>
              <option >Photography</option>
            </select>
          </div> */}
          <div className="form-outline mb-4">
            <input
              type="dropdown"
              className="form-control"
              placeholder="Enter Designer Name"
              name="designerby"
            onChange={handleChange}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              name="city"
              onChange={handleChange}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Price"
              name="price"
              onChange={handleChange}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Rating"
              name="rating"
              onChange={handleChange}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Review"
              name="review"
              onChange={handleChange}
            />
          </div>

          <div className="text-center">
            <button type="button" className="btn btn-primary" onClick={postData}>
              Place order
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
