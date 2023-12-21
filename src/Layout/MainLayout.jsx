import { Outlet } from "react-router-dom";
import Menubar from "../Components/Navbar/Navbar";
import FooterSection from "../Components/Footer/FooterSection";


const MainLayout = () => {
    return (
        <div>
            <Menubar/>
            <Outlet/>
            <FooterSection/>
        </div>
    );
};

export default MainLayout;