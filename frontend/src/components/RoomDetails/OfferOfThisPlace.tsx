import { MdOutlinePool } from "react-icons/md";
import { TbAirConditioning, TbDesk, TbToolsKitchen2 } from "react-icons/tb";
import { PiElevatorLight } from "react-icons/pi";
import { LuCctv } from "react-icons/lu";
import { FaTv, FaWifi } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import { AiOutlineAlert } from "react-icons/ai";

const OfferOfThisPlace = () => {
   const amenities = [
      {
         name: "Kitchen",
         icon: TbToolsKitchen2,
      },
      {
         name: "Dedicated workspace",
         icon: TbDesk,
      },
      {
         name: "Pool",
         icon: MdOutlinePool,
      },
      {
         name: "Elevator",
         icon: PiElevatorLight,
      },
      {
         name: "Exterior security cameras on property",
         icon: LuCctv,
      },
      {
         name: "Wifi",
         icon: FaWifi,
      },
      {
         name: "Free parking on premises",
         icon: IoCarSportOutline,
      },
      {
         name: "TV",
         icon: FaTv,
      },
      {
         name: "Air conditioning",
         icon: TbAirConditioning,
      },
      {
         name: "Carbon monoxide alarm",
         icon: AiOutlineAlert,
      },
   ];

   return (
      <div className="mb-16 pb-10 border-b border-gray-400">
         <h2 className="text-2xl font-semibold mb-6">Where you’ll sleep</h2>
         <div className="flex flex-col sm:flex-row items-center gap-5">
            <div>
               <img
                  className="w-[350px] max-h-[230px] rounded-md"
                  src="https://a0.muscache.com/im/pictures/hosting/Hosting-1153380542559307401/original/d39851f7-2bc8-48f8-9382-29fe65c86758.jpeg?im_w=720"
                  alt="bedroom"
               />
               <div className="mt-2">
                  <p className="text-lg font-semibold">Bedroom 1</p>
                  <p className="text-gray-600">1 double bed</p>
               </div>
            </div>
            <div>
               <img
                  className="w-[350px] max-h-[230px] rounded-md"
                  src="https://a0.muscache.com/im/pictures/hosting/Hosting-1153380542559307401/original/68428d84-c462-49aa-8103-d6945be98c68.jpeg?im_w=720"
                  alt="bedroom"
               />
               <div className="mt-2">
                  <p className="text-lg font-semibold">Bedroom 2</p>
                  <p className="text-gray-600">1 queen bed</p>
               </div>
            </div>
         </div>

         <div className="border-t border-gray-400 mt-10 pt-10">
            <h2 className="text-2xl font-semibold mb-6">
               What this place offers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
               {amenities.map((amen, i) => (
                  <div
                     key={i}
                     className="flex items-center gap-4"
                  >
                     <amen.icon size={26} />
                     <p className="text-xl">{amen.name}</p>
                  </div>
               ))}
            </div>
            <button className="mt-8 px-4 py-2 bg-gray-200 font-semibold rounded-lg">
               Show all 25 amenities
            </button>
         </div>
      </div>
   );
};

export default OfferOfThisPlace;
