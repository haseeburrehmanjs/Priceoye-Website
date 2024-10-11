import React from 'react'

const Button = ({btnText}) => {
  return (
    <div>
      <button className='p-3 rounded-lg bg-black py-2 text-white'>{btnText}</button>
    </div>
  )
}

export default Button
