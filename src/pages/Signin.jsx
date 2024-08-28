import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import SubHeading from "../components/SubHeading";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signin() {

  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleclick = async ()=>{
    const response = await axios.post("https://paytm-backend-3zxw.onrender.com/api/v1/user/signin", {
       username,
       password
     })
     localStorage.setItem("token", response.data.token)
     navigate("/dashboard");
   }
  return (
    <div className="mx-auto  w-full flex flex-row items-center justify-center h-screen  bg-slate-300 ">
    <div className="flex flex-col rounded-lg  w-80  my-auto bg-white  ">
    <Heading label={"Sign In"}/>
    <SubHeading label={"Enter your information to access your account"}/>
    <Inputbox onChange={(e)=>{
      setUsename(e.target.value)
    }}  label={"Email"} placeholder={"shiwang@gmail.com"}/>
    <Inputbox onChange={(e)=>{
      setPassword(e.target.value)
    }}  label={"Password"} placeholder={"123456"}/>
    <div className="m-4">
    <Button onClick={handleclick} label={"Sign Up"} />
    </div>
    <BottomWarning label={"Already have an account?"} to={"/signup"} button={"Sign up"}/>
    </div>
</div>
  )
}

export default Signin