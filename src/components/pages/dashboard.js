import React from 'react'
import BarChart from '../chart/barChart'
import OrderCards from '../chart/orderCards'
import OrderTable from '../chart/ordertable'
import HeadNav from '../common/header'
import Navbar from '../common/navbar'
import MenuBar from '../menu'
import NetProfit from '../profits'
import TestimonialCard from '../testimonial/testimonialCard'
const Dashboard = () => {
    return (
        <div className='wrapper'>
            <div className='container-fluid' style={{padding:"0"}}>
                <div className='row g-0'>
                    <div className='col-lg-cus1'>

                        <Navbar />

                    </div>
                    <div className='col-lg-cus11'>
                        <div className='row g-0'>
                            <HeadNav />

                            <main className='col-12 px-4'>
                                <h1 className='h3 my-3 text-white'>Dashboard</h1>
                                <div className='row'>
                                    <div className='col-lg-8'><OrderCards />
                                        <BarChart />
                                        <OrderTable />
                                    </div>
                                    <div className='col-lg-4'>
                                        <NetProfit />
                                        <MenuBar />
                                        <TestimonialCard />
                                    </div>

                                </div>


                            </main>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Dashboard