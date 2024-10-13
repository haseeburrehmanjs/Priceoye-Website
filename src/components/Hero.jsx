import React from 'react'
import Button from './Button'
import HeroImage from '../assets/HeroImage.png'

const images = [
    'https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/haseeburrehmanjs%40gmail.com%20%2B%201728847522646?alt=media&token=21354b59-c815-48d5-b3ce-6ca1970d6998',
    'https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/haseeburrehmanjs%40gmail.com%20%2B%201728847809704?alt=media&token=228dd6d4-9ac2-45af-8dcb-a4485c53834a',
    'https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/haseeburrehmanjs%40gmail.com%20%2B%201728847876325?alt=media&token=d6c6230d-8403-411f-8009-9c97cd0f88a3',
    'https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/haseeburrehmanjs%40gmail.com%20%2B%201728847909979?alt=media&token=279d53f6-7b88-4fd1-8c62-be18fdcb5ce2',
    'https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/haseeburrehmanjs%40gmail.com%20%2B%201728847932459?alt=media&token=d8743c3f-5055-40e7-8b2f-9ae4fcb36167',
    'https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/haseeburrehmanjs%40gmail.com%20%2B%201728847959459?alt=media&token=63274400-22c0-4307-82b9-b3d5b48936c6'
]

const Hero = () => {
    return (
       <>
         <section className='container mx-auto p-5'>
            <div className='bg-[#E7E6E6] w-[100%] p-10 rounded-3xl'>
                <div className='scale-in-bottom flex justify-center xl:justify-between flex-wrap items-center gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='sm:text-[75px] text-[55px] sm:leading-[75px] leading-[70px] text-black font-bold font-poppins'>
                            LET’S <br />
                            EXPLORE <br />
                            UNIQUE <br />
                            CLOTHES.
                        </h1>
                        <p className='text-xl'>Live for Influential and Innovative fashion!</p>
                        <Button btnText={'SHOP NOW'} />
                    </div>
                    <div>
                        <img className='scale-in-center' width={550} src={HeroImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
            <div className='bg-[#EBD96B] p-4 mt-10'>
                <div className='flex justify-between flex-wrap container mx-auto px-5 gap-3'>
                    {images.map((item, index) => (
                        <img key={index} className='scale-in-center' src={item} alt="images" width={100}/>
                    ))}
                </div>
            </div>
       </>
    )
}

export default Hero
