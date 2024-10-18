import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Young1 from '../assets/young1.png'
import Young2 from '../assets/young2.png'

const YoungFav = () => {
  return (
    <section className='container mx-auto p-4'>
    <div>
        <h1 className='text-4xl font-bold text-center sm:text-start'>Young’s Favourite</h1>
        <div className='flex justify-between mt-10 flex-wrap gap-5'>
            <div>
                <img width={600} src={Young2} alt="" />
                <div className='flex justify-between items-center mt-4'>
                    <div>
                        <h1 className='font-bold'>Trending on instagram</h1>
                        <p className='text-gray-500'>Explore Now!</p>
                    </div>
                    <div className='btn btn-ghost'>
                        <ArrowRightAltIcon />
                    </div>
                </div>
            </div>
            <div>
                <img width={600} src={Young1} alt="" />
                <div className='flex justify-between items-center mt-4'>
                    <div>
                        <h1 className='font-bold'>Trending on instagram</h1>
                        <p className='text-gray-500'>Explore Now!</p>
                    </div>
                    <div className='btn btn-ghost'>
                        <ArrowRightAltIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default YoungFav
