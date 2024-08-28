import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import SubHeading from "../components/SubHeading"

function Signin() {
  return (
    <div className="mx-auto  w-full flex flex-row items-center justify-center h-screen  bg-slate-300 ">
    <div className="flex flex-col rounded-lg  w-80  my-auto bg-white  ">
    <Heading label={"Sign In"}/>
    <SubHeading label={"Enter your information to access your account"}/>
    <Inputbox label={"Email"} placeholder={"shiwang@gmail.com"}/>
    <Inputbox label={"Password"} placeholder={"123456"}/>
    <div className="m-4">
    <Button label={"Sign Up"} />
    </div>
    <BottomWarning label={"Already have an account?"} to={"/signup"} button={"Sign up"}/>
    </div>
</div>
  )
}

export default Signin