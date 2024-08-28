import React from 'react'
import { Link } from 'react-router-dom'
export default function BottomWarning({label, button, to}) {
  return (
    <div className='text-center font-semibold pb-4 text-md'>
        {label} <Link to={to} className='underline pl-1 cursor-pointer'>{button}</Link>
    </div>
  )
}
