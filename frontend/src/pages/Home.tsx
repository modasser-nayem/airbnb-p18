import { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
   const apiUrl = import.meta.env.VITE_API_URL;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const [data, setData] = useState<any | undefined>(undefined);
   const [isLoading, setIsLoading] = useState(false);

   const fetchData = async () => {
      try {
         setIsLoading(true);
         const req = await fetch(apiUrl + "/test-api?name=Nayem");
         const res = await req.json();
         setData(res);
      } catch (error) {
         console.log("Something went wrong!", error);
      } finally {
         setIsLoading(false);
      }
   };

   useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const username = data?.data?.query?.name;

   return (
      <div className="container min-h-screen flex items-center justify-center">
         <div className="text-center">
            {isLoading ? (
               <p>Loading...</p>
            ) : username ? (
               <h2 className="text-2xl font-semibold">
                  Hey, {username} Welcome to{" "}
                  <span className="text-primary">Airbnb</span>
               </h2>
            ) : (
               <h2 className="text-2xl font-semibold">
                  Welcome to <span className="text-primary">Airbnb</span>
               </h2>
            )}
            <Link
               className=""
               to="/rooms/500"
            >
               Details
            </Link>
         </div>
      </div>
   );
};

export default Home;
