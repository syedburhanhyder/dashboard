import React from 'react'

const HeadNav = () => {
    return (
<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start bg-dark text-white py-3 px-2 position-sticky sticky-top">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
        </a>
        <form className="col-5 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
        </form>
        <ul className="nav offset-1 col-4 col-lg-auto ms-lg-auto mb-2 me-lg-3 justify-content-center mb-md-0">
        
          <li><a href="#" className="nav-link px-2 link-light"><i className='fa fa-envelope'></i></a></li>
          <li><a href="#" className="nav-link px-2 link-light"><i className='fa fa-cogs'></i></a></li>
          <li><a href="#" className="nav-link px-2 link-light"><i className='fa fa-bell'></i></a></li>
        </ul>

       

        <div className="dropdown text-end">
          <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle profile-img" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
         )
        }
        
        export default HeadNav