import React from 'react'
import imageShopNow from '../assets/shopnow.png'
import Button from '../components/Button'

const ShopNow = () => {
  return (
    <>
      <section className='container mx-auto p-4 mt-10'>
        <div className=' bg-[#FFEC63] flex flex-wrap-reverse items-center p-5'>
          <div className=''>
            <img width={500} src={imageShopNow} alt="" />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[75px] text-black leading-[80px] font-bold'>
              PAYDAY <br />
              SALE NOW
            </h1>
            <p className='text-xl'>Spend minimal $100 get 30% off <br />
              voucher code for your next purchase</p>
            <div>
              <p className='text-2xl font-bold'>1 June - 10 June 2021</p>
              <p className='text-xl'>*Terms & Conditions apply</p>
            </div>
            <Button btnText={'SHOP NOW'}/>

          </div>
        </div>
      </section>
    </>
  )
}

export default ShopNow
