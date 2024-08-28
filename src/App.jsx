import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signin from "./pages/Signin";
import SendMoney from "./pages/SendMoney";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";  
function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/send" element={<SendMoney/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
