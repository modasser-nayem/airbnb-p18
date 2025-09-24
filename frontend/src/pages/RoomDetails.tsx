import { Link } from "react-router";

const RoomDetails = () => {
   return (
      <div className="container min-h-screen flex items-center justify-center">
         <div className="text-center">
            <h2 className="text-2xl font-semibold">
               Welcome to <span className="text-primary">Airbnb</span> Details
               Page
            </h2>
            <Link
               className=""
               to={"/"}
            >
               Home
            </Link>
         </div>
      </div>
   );
};

export default RoomDetails;
