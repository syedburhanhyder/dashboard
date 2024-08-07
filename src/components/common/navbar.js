import React from 'react'

const Navbar = () => {
    return (
        <div className='d-flex flex-lg-column flex-row flex-shrink-0 justify-content-center bg-dark position-sticky sticky-top navbar-custom'>
            <a className='d-block p-3 text-info text-center text-decoration-none' href='#'><i className="fa fa-th-large fa-2x"></i></a>
            <div className='flex-lg-column flex-row mb-auto text-center d-flex'>
            <a className='d-block p-3 text-decoration-none text-white text-center mt-auto' href='#'><i className='fa fa-home'></i></a>
            <a className='d-block p-3 text-decoration-none text-white text-center mt-auto' href='#'><i className='fa fa-bar-chart'></i></a>
            <a className='d-block p-3 text-decoration-none text-white text-center mt-auto' href='#'><i className='fa fa-file'></i></a>
            <a className='d-block p-3 text-decoration-none text-white text-center mt-auto' href='#'><i className='fa fa-wallet'></i></a>
            <a className='d-block p-3 text-decoration-none text-white text-center mt-auto' href='#'><i className='fa fa-shopping-bag'></i></a>
            </div>
            {/* <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
                <li className="nav-item">
                    <a href="#" className="nav-link active py-3 border-bottom rounded-0" >X</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active py-3 border-bottom rounded-0" >X</a>
                </li>  <li className="nav-item">
                    <a href="#" className="nav-link active py-3 border-bottom rounded-0" >X</a>
                </li>  <li className="nav-item">
                    <a href="#" className="nav-link active py-3 border-bottom rounded-0" >X</a>
                </li>
            </ul> */}
            <a className='d-block p-3 text-decoration-none text-white text-center mt-lg-auto' href='#'><i className='fa fa-sign-out'></i></a>
            
        </div>
    )
}

export default Navbar