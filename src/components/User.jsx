import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
export default function User({user}) {
  const navigate = useNavigate();
  return (
    <div>
   
    <div key={user._id} className="shadow h-14 w-11/12 mx-4 mt-4 p-4 flex justify-between ">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mr-4">
          <div className="flex flex-col justify-center h-full capitalize text-lg font-semibold">{user.firstName[0]}</div>
        </div>
        <div className="flex flex-col justify-center h-full mr-4">
         {user.firstName}
        </div>
      </div>
      <div className="flex flex-col justify-center h-full ml-4">
        <Button onClick={(e)=>{
          navigate("/send?id=" + user._id + "&name=" + user.firstName);
        }}  label={"Send Money"} />
      </div>
      </div>
  

    </div>
  )
}
