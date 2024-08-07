import React from 'react';
import { testimonialTableData } from '../../testimonialData';

const TestimonialCard = () => {
    return (
        <section className='my-3'>
            <div className="row">
                <div className='col-12'>
                    <article className="card text-white bg-dark">
                        <div className="card-body d-flex flex-column justify-content-end">
                            <h3 className='h3'>Customer's Feedback</h3>
                        </div>
                        <div className='card-body py-1 overflow-scroll' style={{maxHeight:"400px"}}>
                        {testimonialTableData.map((i, index) => (
                            <div key={index+1}>
                                <h5 className="card-title"><img src={i.image} alt="mdo" width="32" height="32" className="rounded-circle" /> {i.customerName}</h5>
                                <p className='mb-2 small text-warning'>
                                    {Array.from({ length: i.rating }, (_, idx) => (
                                        <i key={idx} className='fa fa-star'></i>
                                    ))}
                                    {Array.from({ length: 5- i.rating }, (_, idx) => (
                                        <i key={idx} className='fa fa-star text-white'></i>
                                    ))}
                                </p>
                                <p className="card-text">{i.remark}</p>
                                <hr />
                            </div>
                        ))}
                       </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default TestimonialCard;
