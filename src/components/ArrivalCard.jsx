import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const ArrivalCard = ({url, title}) => {
    return (
        <>
            <div>
                <div>
                    <img className='w-[350px]' src={url} alt="" />
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <div>
                        <h1 className='font-bold'>{title}</h1>
                        <p className='text-gray-500'>Explore Now!</p>
                    </div>
                    <div className='btn btn-ghost'>
                        <ArrowRightAltIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArrivalCard
