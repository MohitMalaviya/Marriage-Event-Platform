import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Decorate = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const res = await fetch('/getdecorate', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({})
        })
        const data = await res.json();
        // console.log(data.data);
        setState(data.data)
    }

    const deleteData = async (id) => {
        // console.log(id)
        // const { p_id } = req.body
        const res = await fetch('/deletedecorate', {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "p_id": id
            })
        })

        const data = await res.json();
        // console.log(data);
        if (data.status === false) {
            const notify = () => toast.error(data.message);
            notify();


        } else {
            const notify = () => toast.success(data.message);
            notify();
        }
    }
    const navigate = useNavigate()
    const handleUpdateDecorateId = async (id) => {
        navigate(`/updateDecorate/${id}`)
    }
    return (
        <>
            <ToastContainer />

            <div className="d-flex">
                <Sidebar className="col-2" />
                <div className="col-10">
                    <div className="form-outline mb-4 mt-2">
                    <h2 align="center" className='bg-danger text-white' > Available Decoration plans</h2>
                    </div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">City</th>
                                <th scope="col">Price</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Review</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {state && state.length ? (
                            state.map((e) => {
                                return (
                                    <tbody>
                                        <tr className='align-middle'>
                                            <td className='d-flex'>
                                                <img src={e.p_img} width={50} className='me-2 rounded-circle' />
                                                <span className='justify-content-center align-items-center d-flex'>{e.p_name}</span>
                                            </td>
                                            <td>{e.city}</td>
                                            <td>{e.price}</td>
                                            <td>{e.rating}</td>
                                            <td>{e.review}</td>
                                            <td >
                                                <span className="btn btn-primary me-2" style={{ cursor: "pointer" }} onClick={() => handleUpdateDecorateId(e.p_id)} >Edit</span>
                                                <span className='btn btn-danger' style={{ cursor: "pointer" }} onClick={() => { deleteData(e.p_id) }}>Delete</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })
                        ) : (
                            <tbody>
                                <tr>
                                    <td colSpan={6} className='text-center'>No Record Found</td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </>
    )
}

export default Decorate
