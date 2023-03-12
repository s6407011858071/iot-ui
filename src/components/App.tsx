import './app.css'
import {Route, Routes, Navigate, Outlet} from "react-router-dom";
import Home from "./Home";
import {ReactComponent as AQ} from '../assets/IoT-Aquarium-logo.svg'



const Layout = () => {
  return (
    <div className="bg-1 h-screen w-screen">
      <div className="flex h-[100px]  bg-white ">
        <div className="container mx-32 flex flex-row py-[15px]  items-center justify-between">
          <div className="flex flex-row">
            <AQ/>
            <div className="flex-start ml-[10px] flex flex-col">
              <div className="text-[35px] font-bold text-crayon-100">
                Smart Aquarium
              </div>
              <div className="text-[15px] text-crayon-100">
                Internet of Things - Project
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 text-gray-600">
            <div>About us</div>
            <div>Dashboard</div>
            <div>Setting</div>
            <div>Contact us</div>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
