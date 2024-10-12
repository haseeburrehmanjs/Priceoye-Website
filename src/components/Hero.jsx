import React from 'react'
import Button from './Button'
import HeroImage from '../assets/HeroImage.png'

const Hero = () => {
    return (
        <section className='container mx-auto p-5'>
            <div className='bg-[#E7E6E6] w-[100%] p-10 rounded-3xl'>
                <div className='flex justify-center xl:justify-between flex-wrap items-center gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='sm:text-[75px] text-[55px] sm:leading-[75px] leading-[70px] font-bold'>
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
