import React from 'react';

const MenuBar = () => {
    return (
        <section className='mt-3'>
            <div className="row">
                <div className='col-12'>
                    <article className="card text-white bg-dark">
                        <div className='card-body py-3'>
                            <div className="d-flex justify-content-between align-items-center mb-3">

                                <div className="d-flex align-items-center me-3">

                                   
                                    <span className="badge rounded-pill text-bg-m1 rounded-circle p-cs-5 me-3"><i className='fa-solid fa-crosshairs fa-2x'></i></span> 
                                    <div className="flex-grow-1">
                                        <a href="#" className="text-white text-decoration-none fs-5 fw-bold lh-0">Goals</a>
                                        
                                    </div>

                                </div>



                                <div className="m-0">





                                    <span className="badge rounded-pill text-bg-secondary rounded-circle p-cs-3"><i className='fa fa-chevron-right'></i></span>
                                </div>
                                

                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">

                                <div className="d-flex align-items-center me-3">

                                  
                                    <span className="badge rounded-pill text-bg-m2 rounded-circle p-cs-5 me-3"><i className="fa-solid fa-burger fa-2x"></i></span>
                                    <div className="flex-grow-1">
                                        <a href="#" className="text-white text-decoration-none fs-5 fw-bold lh-0">Popular Dishes</a>

                                    </div>

                                </div>



                                <div className="m-0">





                                    <span className="badge rounded-pill text-bg-secondary rounded-circle p-cs-3"><i className='fa fa-chevron-right'></i></span>
                                </div>

                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">

                                <div className="d-flex align-items-center me-3">

                                   
                                    <span className="badge rounded-pill text-bg-m3 rounded-circle p-cs-5 me-3"><i className="fa-solid fa-bowl-food fa-2x"></i></span>
                                    <div className="flex-grow-1">
                                        <a href="#" className="text-white text-decoration-none fs-5 fw-bold lh-0">Menus</a>

                                    </div>

                                </div>



                                <div className="m-0">





                                    <span className="badge rounded-pill text-bg-secondary rounded-circle p-cs-3"><i className='fa fa-chevron-right'></i></span>
                                </div>

                            </div>
                        </div>


                    </article>
                </div>
            </div>
        </section>
    );
}

export default MenuBar;
