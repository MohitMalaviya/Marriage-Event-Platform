import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';

const User = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const res = await fetch('/admin/getuser', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({})
        })
        const data = await res.json();
        setState(data.data)
    }
    return (
        <>
            <div className="d-flex">
                <Sidebar className="col-2" />
                <div className="col-10">
                    <div className="form-outline mb-2 mt-2">
                        <h2 align="center" className='bg-danger text-white' >customer details</h2>
                    </div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">email</th>
                                <th scope="col">City</th>
                                <th scope="col">Phone No.</th>
                                <th scope="col">Joining Date</th>
                            </tr>
                        </thead>
                        {state && state.length ? (
                            state.map((e) => {
                                return (
                                    <tbody>
                                        <tr className='align-middle'>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.city}</td>
                                            <td>{e.phone}</td>
                                            <td>{e.created_date}</td>
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

export default User
