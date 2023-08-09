import { Route, Routes } from "react-router-dom";

//components
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import NotPageFound from "./components/NotPageFound";


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="*" element={<NotPageFound/> }/>
        </Routes>
    )
};

export default AppRoutes;
