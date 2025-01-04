import React from 'react'

const JoinShopping = () => {
    return (
        <section className='container mx-auto p-4 mt-[70px]'>
            <div className='w-[100%] p-10 bg-[#E5C643] flex justify-center flex-col items-center'>
                <h1 className='text-[30px] text-center leading-[30px] font-bold text-white'>
                JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
                </h1>
                <p className='text-white text-2xl mt-2 text-center'>Type your email down below and be young wild generation</p>
                <input className='w-[300px] p-3 rounded-xl mt-3' type="text" placeholder='Enter Your Email'/>
            </div>
        </section>
    )
}

export default JoinShopping
