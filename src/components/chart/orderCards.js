import React from 'react'
import { orderCards } from '../../mockData'

const OrderCards = () => {
  return (
    <div className='row'>
        {orderCards.map((i,index)=>
        <div key ={index+1} className='col-md-3'>
            <div className="card text-white bg-dark mb-2">
            <div className="card-body d-flex flex-column justify-content-end">
          
                <h4>
                <span>{i.icon}</span>
                </h4>
                  <p className="mb-2 mt-2 d-flex align-items-center small">{i.label}
                  </p>
                
                  <div className="row">
                    <div className="col">
                      <p className="font-sans-serif lh-1 mb-1 h3 fw-bold">{i.isRev && '$'}{i.orders}</p>
                    </div>
                    <div className="col-auto ps-0">
                    <p className={i.value==='d' ? "text-success":"text-danger"}> <i className={i.value==='d' ? "fa fa-sort-asc":"fa fa-sort-desc"}></i><span>{i.rating}%</span>
                    </p> 
                     </div>
                  </div>
                </div>
              </div>
              </div>
        )}
      
    
    </div>
  )
}

export default OrderCards