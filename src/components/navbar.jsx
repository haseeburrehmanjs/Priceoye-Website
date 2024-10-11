import React from 'react'
import Logo from '../assets/logo.png'
import Button from './Button'

const Navbar = () => {
  return (
    <section className='h-24px h-[60px] flex items-center mt-3'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center p-5'>
            <div>
               <img width={100} src={Logo} alt="" />
            </div>
            <div className='flex gap-5 items-center'>
              <ul className='flex gap-8 items-center'>
                <li>CATALOGUE</li>
                <li>FASHION</li>
                <li>FAVOURITE</li>
                <li>LIFESTYLE</li>
              </ul>
              <div className='xl:hidden '>
                <img width={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt="" />
              </div>
              <Button btnText={'SING UP'} /> 
            </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
