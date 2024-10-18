import React from 'react'

const Footer = () => {
  return (
    <section className="container mx-auto p-4">
        <div className='w-[100%] p-[70px] sm:p-[80px] bg-black flex justify-between flex-wrap gap-5'>
            <div>
                <h1 className='text-white font-bold text-3xl'>FASHION</h1>
                <p className='text-gray-300 mt-3'>Complete your style with awesome <br /> clothes from us.</p>
                <div className='flex gap-4 mt-5'>
                    <div className='w-[40px] h-[40px] bg-[#FFEC63] rounded-lg'></div>
                    <div className='w-[40px] h-[40px] bg-[#FFEC63] rounded-lg'></div>
                    <div className='w-[40px] h-[40px] bg-[#FFEC63] rounded-lg'></div>
                    <div className='w-[40px] h-[40px] bg-[#FFEC63] rounded-lg'></div>
                </div>
            </div>
            <div>
                <ul className='text-gray-400'>
                    <li className='text-[16px] font-bold text-white'>Company</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Support</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <ul className='text-gray-400'>
                    <li className='text-[16px] font-bold text-white'>Company</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Support</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <ul className='text-gray-400'>
                    <li className='text-[16px] font-bold text-white'>Company</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Support</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer
