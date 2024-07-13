import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

const Payment = () => {
    const [state, setState] = useState({
        card_number: "",
        holder_name: "",
        card_cvv: "",
        card_expiry_date: "",
        price: "",
    });
    const getData = async () => {
        const res = await fetch("/getpaymentdetails", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({}),
        });
        const data = await res.json();
        // console.log(data.data);
        setState(data.data);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="d-flex">
            <Sidebar className="col-2" />
            <div className="col-10">
                <div className="form-outline mb-4 mt-2">
                <h2 align="center" className='bg-danger text-white' >payment details</h2>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Holder Name</th>
                            <th scope="col">Card Number</th>
                            <th scope="col">CVV</th>
                            <th scope="col">Expiry Date</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    {state.length ? (
                        state.map((e) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{e.holder_name}</td>
                                        <td>{e.card_number}</td>
                                        <td>{e.card_cvv}</td>
                                        <td>{e.card_expiry_date}</td>
                                        <td>{e.price}</td>
                                    </tr>
                                </tbody>
                            );
                        })
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan={5} className='text-center'>No Record Found</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>

    )
}

export default Payment
