import { Routes, Route} from "react-router-dom"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Home from "./pages/Home"
import Technology from "./pages/Technology"






export default function GetRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/destination" element={<Destination/>} />
            <Route path="/crew" element={<Crew/>} />
            <Route path="/technology" element={<Technology/>} />
            <Route path="*" element={<h1>Not found =)</h1>} />

        </Routes>
    )
}