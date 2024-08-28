
import InputBox from "../components/InputBox";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function SendMoney() {
  const [searchParams] = useSearchParams();
  const id= searchParams.get("id");
  const [amount, setAmount]=useState(0);
  const name= searchParams.get("name");
  const handleclick=()=>{
    axios.post("https://paytm-backend-3zxw.onrender.com/api/v1/account/transfer",
      {
        to: id,
        amount: amount
    },
  {
    headers: {
      Authorization: "Bearer "+ localStorage.getItem("token")
    }
  }
    )
  }
  return (
    <div className="mx-auto  w-full  flex flex-row items-center justify-center h-screen  bg-slate-200 ">
    <div className="flex flex-col rounded-lg  w-96  my-auto bg-white shadow-lg ">
    <div className="font-bold text-center text-3xl pt-6">Send Money</div>
<div className="flex flex-col mx-5">
      <div className="flex items-center mx-3 mt-10">
        <div className="rounded-full  h-12 w-12 bg-green-400 flex justify-center mr-2">
                <div className="flex flex-col text-white font-bold justify-center h-full text-xl">
                {name[0].toUpperCase()}
                </div>
            </div>
            <div className="flex font-bold text-xl flex-col justify-center h-full ">
                {name}
            </div>
         
        </div>
      <InputBox onChange={(e)=>{
         setAmount(e.target.value)
      }} placeholder={"Enter Amount"} label={" Amount (in Rs)"}/>
  
 
   
   
     
     <button onClick={handleclick}  className='w-11/12 mx-auto  font-semibold p-2 mt-3 mb-5 rounded-lg text-md bg-green-500 text-white text-center'>Initiate Transfer</button>
      </div>
      </div>
    </div>
  )
}

export default SendMoney