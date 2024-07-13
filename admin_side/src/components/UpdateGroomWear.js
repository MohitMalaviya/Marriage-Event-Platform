import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateGroomWear = () => {
    const id = useParams();
    const navigate = useNavigate()
    const [state, setState] = useState();
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const res = await fetch("/getgroomwearbyid", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ p_id: id.id })
        })
        const data = await res.json();
        // console.log(data.data[0]);
        setState(data.data[0])
    }
    let name, value;
    const handleChange = (e) => {
        name = e.target.name
        if (name === "p_img") {
            value = e.target.files[0];
            // console.log(e.target.value);
        }
        else {
            value = e.target.value
        }
        // console.log(e.targert.name);
        if (state) {
            setState({ ...state, [name]: value })
        }
    }
    const postData = async (e) => {
        e.preventDefault();
        const { p_img, p_name, city, rating, review, price } = state;
        const form_data = new FormData();
        form_data.append("p_id", id.id);
        form_data.append("p_img", p_img);
        form_data.append("p_name", p_name);
        form_data.append("city", city);
        form_data.append("rating", rating);
        form_data.append("review", review);
        form_data.append("price", price);
        const res = await fetch("/updategroomwear", {
            method: "POST",
            headers: {},
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
                navigate('/groomwear');
            }, 2000);
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="d-flex">
                <Sidebar className="col-2" />
                <form className="col-10 mt-3 px-3">
                    <div className="form-outline mb-4">
                        <h2>Update Groom Wear</h2>
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
                            value={state?.p_name || ''}
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter City"
                            name="city"
                            value={state?.city || ''}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Price"
                            name="price"
                            value={state?.price || ''}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Rating"
                            name="rating"
                            value={state?.rating || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Review"
                            name="review"
                            value={state?.review || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary" onClick={postData} >
                            Place order
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateGroomWear
