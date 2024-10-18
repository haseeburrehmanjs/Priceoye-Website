import React from 'react'
import PlayStore from "../assets/playstore.png"
import AppleStore from "../assets/appstore.png"
import Mobile from "../assets/mobile.png"

const DownloadApp = () => {
  return (
    <section className='container mx-auto p-4 mt-[70px]'>
      <div className="flex items-center justify-center sm:justify-between flex-wrap gap-10">
        <div className='flex flex-col gap-10 text-center sm:text-start'>
            <h1 className='text-[45px] text-black font-bold leading-[45px]'>DOWNLOAD APP & <br />
            GET THE VOUCHER!</h1>
            <p className='text-xl '>Get 30% off for first transaction using <br />
            Rondovision mobile app for now.</p>
            <div className='flex gap-2 justify-center sm:justify-start'>
                <img className='w-[100px]' src={AppleStore} alt="" />
                <img className='w-[100px]' src={PlayStore} alt="" />
            </div>
        </div>
        <div>
            <img width={500} src={Mobile} alt="" />
        </div>
      </div>
    </section>
  )
}

export default DownloadApp
