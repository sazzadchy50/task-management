import { Outlet } from "react-router-dom";
import Menubar from "../Components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Menubar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;