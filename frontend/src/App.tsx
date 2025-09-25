import { Outlet } from "react-router";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const AppLayout = () => {
   return (
      <div>
         <Navbar />
         <div className="mt-28">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default AppLayout;
