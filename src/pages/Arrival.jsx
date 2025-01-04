import React from 'react'
import ArrivalCard from '../components/ArrivalCard'

const Arrival = ({productsData}) => {
  return (
    <>
    <section className='container mx-auto px-5 mt-10'>
        <h1 className='text-4xl font-bold '>New Arrivals</h1>
        <div className='flex sm:justify-between justify-center flex-wrap mt-10 gap-5'>
          {productsData.length > 0 ? productsData.map((item,index) => (
            // console.log(item)
            <ArrivalCard key={index} url={item.thumbnail} title={item.title} index={item.id}/>
          )) : <div>loading...</div>}
        </div>
    </section> 
    </>
  )
}

export default Arrival
