import React from 'react'
import ArrivalCard from '../components/ArrivalCard'
import arrivals1 from '../assets/arrivals (1).png'
import arrivals2 from '../assets/arrivals (2).png'
import arrivals3 from '../assets/arrivals (3).png'


const Arrival = () => {
  return (
    <>
    <section className='container mx-auto px-5 mt-10'>
        <h1 className='text-4xl font-bold '>New Arrivals</h1>
        <div className='flex sm:justify-between justify-center flex-wrap mt-10'>
           <ArrivalCard url={arrivals1} title={'Hoodies & Sweetshirt'}/>
           <ArrivalCard url={arrivals2} title={'Coats & Parkas'}/>
           <ArrivalCard url={arrivals3} title={'Tees & T-Shirt'}/>
        </div>
    </section> 
    </>
  )
}

export default Arrival
