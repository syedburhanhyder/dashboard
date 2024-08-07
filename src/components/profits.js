import React from 'react'
import MyDoughnutChart from './chart/doughnut'
const NetProfit = () => {
    return (
<div className="card text-white bg-dark mb-4">
    <div className="card-body">
    <div className="row">
    <div className="col-7">
        <h4 className='small pb-1'>
            <span>Net Profit</span>
        </h4>
        <p className="h2 fw-bold my-3 d-flex align-items-center">$ 6003.25
        </p>

      
          
          
                <p className='text-success'><span><i className="fa fa-sort-asc"></i>3%</span>
                </p>
            </div>
            <div className="col-5 text-center">
        <div className='position-relative'>
            <MyDoughnutChart/>
            {/* <p className='text-center position-absolute mid-label' style={{fontSize: "7px"}}> 
            <span className='h5'>70%</span>
            <br/>
           Goal Completed
            </p> */}
                <p className='mt-2 mb-0' style={{fontSize: "8px"}}>* The Values have been rounded</p>
            </div>
            </div>
        </div>
    </div>
</div>
 )
}

export default NetProfit