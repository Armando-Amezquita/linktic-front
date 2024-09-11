import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebSite } from "../views/WebSite/WebSite";
import { NotFound } from "../views/NotFound/NotFound";
import { Login } from "../components/Login/Login.jsx";
import { SignUp } from "../components/SignUp/SignUp";
import { DashBoard } from "../views/Dashboard/DashBoard.jsx";
import { HotelDetail } from "../views/HotelDetails/HotelDetails.jsx";

function AppRouter(){
    return (
        <>
            <BrowserRouter >
            {/* </Menu> */}
                <Routes>
                    <Route path="/" element={<WebSite />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/dashboard" element={<DashBoard />}/>
                    <Route path="/hotel/:id" element={<HotelDetail />} /> 
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export { AppRouter }