import { Link } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import RoomsSlider from "../components/RoomsSlider";
import { roomsItem } from "../constant/dummyData";

const Home = () => {
   // const apiUrl = import.meta.env.VITE_API_URL;
   // // eslint-disable-next-line @typescript-eslint/no-explicit-any
   // const [data, setData] = useState<any | undefined>(undefined);
   // const [isLoading, setIsLoading] = useState(false);

   // const fetchData = async () => {
   //    try {
   //       setIsLoading(true);
   //       const req = await fetch(apiUrl + "/test-api?name=Nayem");
   //       const res = await req.json();
   //       setData(res);
   //    } catch (error) {
   //       console.log("Something went wrong!", error);
   //    } finally {
   //       setIsLoading(false);
   //    }
   // };

   // useEffect(() => {
   //    fetchData();
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, []);

   // const username = data?.data?.query?.name;

   return (
      <div>
         {/* Navbar */}
         <Navbar />

         <div className="container min-h-[100px] flex items-center justify-center">
            <div className="text-center">
               <h2 className="text-2xl font-semibold">
                  Welcome to <span className="text-primary">Airbnb</span>
               </h2>
               <Link
                  className=""
                  to="/rooms/500"
               >
                  Details
               </Link>
            </div>
         </div>

         <div className="container py-14">
            <RoomsSlider
               data={roomsItem}
               title="Popular homes in Dhaka District"
            />
            <RoomsSlider
               data={roomsItem}
               title="Homes in Toronto"
            />
            <RoomsSlider
               data={roomsItem}
               title="Available next month in London"
            />
            <RoomsSlider
               data={roomsItem}
               title="Stay in Bangkok"
            />
            <RoomsSlider
               data={roomsItem}
               title="Available next month in Kuala Lumpur"
            />
         </div>

         <Footer />
      </div>
   );
};

export default Home;
