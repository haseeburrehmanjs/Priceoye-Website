import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram , FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="container mx-auto p-4">
            <div className='w-[100%] p-[70px] sm:p-[80px] bg-black flex justify-between flex-wrap gap-5'>
                <div>
                    <h1 className='text-white font-bold text-3xl'>FASHION</h1>
                    <p className='text-gray-300 mt-3'>Complete your style with awesome <br /> clothes from us.</p>
                    <div className='flex gap-4 mt-5'>
                        <div className='w-[40px] h-[40px] bg-[#FFEC63] rounded-lg flex items-center justify-center'>
                            <AiFillLinkedin color='black' fontSize={20}/>
                        </div>
                        <div className='w-[40px] h-[40px] bg-[#FFEC63] rounded-lg flex items-center justify-center'>
                            <FaFacebookF color='black' fontSize={20}/>
                        </div>
                        <div className='w-[40px] h-[40px] bg-[#FFEC63] rounded-lg flex items-center justify-center'>
                            <FaTwitter color='black' fontSize={20}/>
                        </div>
                        <div className='w-[40px] h-[40px] bg-[#FFEC63] rounded-lg flex items-center justify-center'>
                            <FaInstagram color='black' fontSize={20}/>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='text-gray-400 leading-7'>
                        <li className='text-[16px] font-bold text-white'>Company</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Support</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-gray-400 leading-7'>
                        <li className='text-[16px] font-bold text-white'>Quick Link</li>
                        <li>Share Location</li>
                        <li>Orders Tracking</li>
                        <li>Size Guide</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-gray-400 leading-7'>
                        <li className='text-[16px] font-bold text-white'>Legal</li>
                        <li>Terms & conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer
