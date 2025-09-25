import { Link, useLocation } from "react-router";
import logo from "../../assets/airbnb_Logo.png";
import { RiGlobalLine } from "react-icons/ri";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FcIdea } from "react-icons/fc";

const Navbar = () => {
   const location = useLocation();

   const navItem = [
      {
         name: "Homes",
         href: "/",
         element: <IoHome />,
      },
      {
         name: "Experiences",
         href: "/experiences",
         element: <FcIdea />,
      },
      {
         name: "Services",
         href: "/services",
         element: <MdOutlineSettingsSuggest />,
      },
   ];

   return (
      <div className="bg-secondary border-b border-gray-300 fixed top-0 w-full z-50">
         <div className="container py-5">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <img
                     className="w-[30px] h-[30px]"
                     src={logo}
                  />
                  <h3 className="text-2xl font-semibold text-primary">
                     airbnb
                  </h3>
               </div>
               <div className="flex items-center gap-8">
                  {navItem.map((item, i) => (
                     <Link
                        key={i}
                        to={item.href}
                        className={`font-semibold py-2.5 px-1 flex items-center gap-2 border-gray-600 ${
                           location.pathname === item.href ? "border-b-4" : ""
                        }`}
                     >
                        {item.element} {item.name}
                     </Link>
                  ))}
               </div>
               <div className="font-semibold flex items-center gap-4">
                  <p className="hover:bg-gray-200 px-4 py-1.5 rounded-full cursor-pointer">
                     Become a host
                  </p>
                  <button className="bg-gray-200 p-2.5 rounded-full">
                     <RiGlobalLine size={20} />
                  </button>
                  <button className="bg-gray-200 p-2.5 rounded-full">
                     <HiMiniBars3 size={16} />
                  </button>
               </div>
            </div>
            {/* filter section */}
            <div></div>
         </div>
      </div>
   );
};

export default Navbar;
