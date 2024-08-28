import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleclick = async ()=>{
    const response = await axios.post("https://paytm-backend-3zxw.onrender.com/api/v1/user/signup", {
       username,
       firstName,
       lastName,
       password
     })
     localStorage.setItem("token", response.data.token)
     navigate("/dashboard");
   }
  return (
    <div className="mx-auto  w-full flex flex-row items-center justify-center h-screen  bg-slate-300 ">
    <div className="flex flex-col rounded-lg  w-80  my-auto bg-white  ">
    <Heading label={"Sign Up"}/>
    <SubHeading label={"Enter your information to create an account"}/>
    <InputBox onChange={e=>{
      setFirstName(e.target.value);
    }} label={"First Name"} placeholder={"Shiwang"}/>
    <InputBox onChange={(e)=>{
      setLastName(e.target.value)
    }} label={"Last Name"} placeholder={"Pandey"}/>
     <InputBox onChange={(e)=>{
      setUsename(e.target.value)
    }}  label={"Email"} placeholder={"shiwang@gmail.com"}/>
     <InputBox onChange={(e)=>{
      setPassword(e.target.value)
    }}  label={"Password"} placeholder={"123456"}/>
    <div className="m-4">
    <Button onClick={handleclick} label={"Sign In"} />
    </div>
    <BottomWarning label={"Already have an account?"} to={"/signin"} button={"Sign in"}/>
    </div>
</div>
  )
}

export default Signup