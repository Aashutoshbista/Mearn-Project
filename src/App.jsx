import { BrowserRouter,Routes,Route } from "react-router-dom"

import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Home from "./pages/Home";

export default function App() {
  return( <BrowserRouter> 
  <Routes>
    <Route path="/" element ={<Home />}/>
    <Route path="/signin" element ={<Signin />}/>
    <Route path="/sigup" element ={<Signup />}/>
    <Route path="/about" element ={<About />}/>
    <Route path="/profile" element ={<Profile />}/>
  </Routes>
  </BrowserRouter>
  )
}
