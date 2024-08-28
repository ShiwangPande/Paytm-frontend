import React from 'react'

export default function Inputbox({placeholder, label, onChange}) {
  return (
    <div>
    <div className='text-lg font-semibold mx-4 mt-1'>{label}</div>
    <input onChange={onChange} placeholder={placeholder} className='border-2 rounded-lg w-11/12 mx-4 border-gray-300 p-2 my-1'/>
    </div>
  )
}