import React from 'react'
import Button from './Button'
import HeroImage from '../assets/HeroImage.png'

const Hero = () => {
    return (
        <section className='container mx-auto p-5'>
            <div className='bg-[#E7E6E6] w-[100%] h-[80vh] rounded-3xl'>
                <div className='flex justify-between items-center px-10 flex-wrap'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='heroText text-[55px] font-bold'>
                            LET’S <br />
                            EXPLORE <br />
                            UNIQUE <br />
                            CLOTHES.
                        </h1>
                        <p className='text-xl'>Live for Influential and Innovative fashion!</p>
                        <Button btnText={'SHOP NOW'}/>
                    </div>
                    <div>
                        <img width={550} src={HeroImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
