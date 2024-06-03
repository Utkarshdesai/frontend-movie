import Login from "./component/Login"
import Modal from "./component/Modal"
import Navbar from "./component/Navbar"
import Playlist from "./component/Playlist"
import Home from "./pages/Home"
import { Routes ,Route } from "react-router-dom"
import "./App.css";
import Signup from "./component/Signup"
import Showplaylist from "./pages/Showplaylist"



function App() {

  

  return (
    <div className=" w-screen min-h-screen flex flex-col font-inter bg-richblack-400">
     
 
      <Navbar/>
   
       <Routes>
         <Route path="/playlist" element={<Playlist></Playlist>} ></Route>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/Modal" element={<Modal></Modal>}></Route>
         <Route path="/login" element={<Login> </Login>}> </Route>
         <Route path="/signup" element={<Signup></Signup>}> </Route>
         <Route path="/showplaylist" element={<Showplaylist></Showplaylist>}></Route>
       </Routes>
    </div>
  )
}

export default App
