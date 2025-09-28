import Navbar from "../components/shared/Navbar";
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

         <div className="pt-5 text-center">
            <h2 className="text-3xl font-semibold">
               Welcome to <span className="text-primary">Airbnb</span>
            </h2>
            <p className="text-lg font-medium">Explore your Destination</p>
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
      </div>
   );
};

export default Home;
