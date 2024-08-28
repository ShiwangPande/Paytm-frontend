import React, { useState } from "react";
import User from "./User";
import axios from "axios";;
import { useEffect } from "ract";
export default function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
 useEffect(() => {
    axios.get(`https://paytm-backend-3zxw.onrender.com/api/v1/user/bulk?filter=` + filter)
        .then(response =>{
            setUsers(response.data.user)
        })
 }, [filter])

 
  return (
    <div className="">
      {/* <div className='font-bold text-xl '>Users</div> */}

      <div className="text-lg font-semibold mx-4 mt-1">Users</div>
      <input
        placeholder="Search users.."
        className="border-2 rounded-lg w-11/12 mx-4 border-gray-300 p-[6px] my-1"
        onChange={(e)=>{
            setFilter(e.target.value)
        }}
      />
      <div>
        {users.map(user =>       
          <User user={user} />
        )}
      </div>
    </div>
  );
}

