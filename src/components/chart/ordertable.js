import React from 'react';
import { orderTable } from '../../orderData';

const OrderTable = () => {
    return (
        <section className='my-3'>
            <div className="row">
                <div className='col-12'>
                    <article className="card text-white bg-dark">
                        <div className="card-body d-flex flex-column justify-content-end">
                            <h3 className='fw-bold'>Recent Orders</h3>
                            <div className='table-responsive-sm'>
                                <table className="table table-dark align-middle text-nowrap ">
                                    <thead>

                                        <tr>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Order No.</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderTable.map((i, index) => (
                                            <tr key={index + 1}>
                                                <th scope='row'><div class="d-flex">
                                                    <div className='me-2'>
                                                        <img src={i.image} alt="mdo" width="32" height="32" className="rounded-circle" />

                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 small">
                                                            {i.customerName}                     </h6>

                                                    </div>
                                                </div>
                                                </th>
                                                <td>{i.orderNum}</td>
                                                <td>$ {i.amount}</td>
                                                <td> <span className={i.status === 'Delivered' ? "badge rounded-pill text-bg-delivery" : "badge rounded-pill text-bg-pf"}>{i.status}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default OrderTable;
