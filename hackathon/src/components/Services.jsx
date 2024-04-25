import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
  return (
    <div className='services'>
        <Carousel 
            infiniteLoop
            autoPlay
            showStatus = {false}
            showIndicators = {true}
            showThumbs = {true}
            // showArrows = {false}
            interval = {1000}
        >
            <div>
                <img src='https://images.unsplash.com/photo-1579684453423-f84349ef60b0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVkaWNhbHx8fHx8fDE3MTM5NTMwODg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600' alt="item1" />
                <p className='legend'>Emergency Checkups Available</p>
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1645684922842-87793d0b25df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhbHRoY2FyZXx8fHx8fDE3MTM5NTQyNTU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600' alt="item2" />
                <p className='legend'>Easy to get appointment</p>
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1622227922682-56c92e523e58?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhbHRoY2FyZXx8fHx8fDE3MTM5NTQ0ODU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600' alt="item3" />
                <p className='legend'>Solution to any health issue is here</p>
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YW5pbWFsIGFuaW1hbCBjbGluaWN8fHx8fHwxNzEzOTU0Nzc4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600' alt="item4" />
                <p className='legend'>Animal Healthcare is equally important for us</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services