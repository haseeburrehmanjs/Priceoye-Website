import React from 'react'
import ArrivalCard from '../components/ArrivalCard'

const Arrival = () => {
  return (
    <>
    <section className='container mx-auto px-5 mt-10'>
        <h1 className='text-4xl font-bold '>New Arrivals</h1>
        <div className='flex justify-between flex-wrap'>
            <div>
                <ArrivalCard />
            </div>
        </div>
    </section>
    </>
  )
}

export default Arrival
