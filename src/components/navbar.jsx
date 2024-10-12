import React from 'react'
import Logo from '../assets/logo.png'
import Button from './Button'

const Navbar = () => {
  return (
    <section className='h-24px h-[60px] flex items-center mt-3'>
      <div className='container mx-auto'>
        <div className="navbar bg-base-100 flex items-center">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl"><img width={100} src={Logo} alt="" /></a>
          </div>
          <div className="flex gap-4">
            <ul className="hidden md:flex flex flex-wrap justify-center items-center">
              <li className='btn btn-ghost'>CATALOGUE</li>
              <li className='btn btn-ghost'>FASHION</li>
              <li className='btn btn-ghost'>FAVOURITE</li>
              <li className='btn btn-ghost'>LIFESTYLE</li>
            </ul>
            <div>
              <Button btnText={'SIGN UP'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
