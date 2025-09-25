import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { LuDot, LuGrip } from "react-icons/lu";
import WheatLeftIcon from "../ui/WheatLeftIcon";
import WheatRightIcon from "../ui/WheatRightIcon";
import { FaStar } from "react-icons/fa";

const DetailsHeader = () => {
   return (
      <div className="mt-6">
         <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <h2 className="text-2xl font-semibold">
               Rest & Retreat: Luxury full flat (2BHK) in a condo
            </h2>
            <div className="flex items-baseline gap-5">
               <button className="flex items-center gap-1">
                  <FiShare /> <span className="underline pb-1">Share</span>
               </button>
               <button className="flex items-center gap-1">
                  <IoMdHeartEmpty />{" "}
                  <span className="underline pb-1">Save</span>
               </button>
            </div>
         </div>

         {/* Picture Gallery */}
         <div className="my-4 grid sm:grid-cols-2 gap-2">
            {/* Left big image */}
            <div className="h-[380px]">
               <img
                  src="https://a0.muscache.com/im/pictures/hosting/Hosting-1153380542559307401/original/d39851f7-2bc8-48f8-9382-29fe65c86758.jpeg?im_w=960"
                  alt="room"
                  className="w-full h-full object-cover rounded-s-lg"
               />
            </div>

            {/* Right 2×2 images */}
            <div className="hidden sm:block">
               <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[380px] relative">
                  {[
                     "https://a0.muscache.com/im/pictures/hosting/Hosting-1153380542559307401/original/8d9f3e1c-f659-4472-8482-665f431147e9.jpeg?im_w=480",
                     "https://a0.muscache.com/im/pictures/hosting/Hosting-1153380542559307401/original/8d9f3e1c-f659-4472-8482-665f431147e9.jpeg?im_w=480",
                     "https://a0.muscache.com/im/pictures/hosting/Hosting-1153380542559307401/original/8d9f3e1c-f659-4472-8482-665f431147e9.jpeg?im_w=480",
                     "https://a0.muscache.com/im/pictures/hosting/Hosting-1153380542559307401/original/8d9f3e1c-f659-4472-8482-665f431147e9.jpeg?im_w=480",
                  ].map((src, i) => (
                     <div
                        key={i}
                        className="h-full w-full"
                     >
                        <img
                           src={src}
                           alt={`room ${i + 1}`}
                           className={`w-full h-full object-cover ${
                              i === 1
                                 ? "rounded-tr-lg"
                                 : i === 3
                                 ? "rounded-br-lg"
                                 : ""
                           }`}
                        />
                     </div>
                  ))}
                  <div className="absolute sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 border rounded-md bg-white text-sm font-semibold px-3 py-1.5 flex items-center gap-2">
                     <LuGrip size={20} />{" "}
                     <span className="">Show all Photos</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex gap-10">
            <div className="h-screen flex-1">
               <div>
                  <div>
                     <h2 className="text-2xl font-semibold">
                        Entire serviced apartment in Dhaka, Bangladesh
                     </h2>
                     <div className="flex items-center gap-0.5 font-medium">
                        <p>4 guests</p>
                        <p className="flex items-center">
                           <span>
                              <LuDot />
                           </span>{" "}
                           2 bedrooms
                        </p>
                        <p className="flex items-center">
                           <span>
                              <LuDot />
                           </span>{" "}
                           2 beds
                        </p>
                        <p className="flex items-center">
                           <span>
                              <LuDot />
                           </span>{" "}
                           2 baths
                        </p>
                     </div>
                  </div>
               </div>

               <div className="mt-8 max-w-2xl font-semibold text-lg flex items-center justify-between border border-gray-300 px-8 py-6 rounded-2xl">
                  <div className="flex items-center gap-1.5">
                     <WheatLeftIcon />
                     <div className="text-center">
                        <span className="block leading-1">Guest</span>{" "}
                        <span className="block">favorite</span>
                     </div>
                     <WheatRightIcon />
                  </div>

                  <div className="bg-gray-300 w-[2px] min-h-[32px]"></div>

                  <div className="text-center">
                     <p>4.9</p>
                     <p className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                           <FaStar
                              size={10}
                              key={i}
                           />
                        ))}
                     </p>
                  </div>

                  <div className="bg-gray-300 w-[2px] min-h-[32px]"></div>

                  <div className="text-center">
                     <p>49</p>
                     <p className="leading-1.5 text-sm">Reviews</p>
                  </div>
               </div>
            </div>

            {/* striky */}
            <div className="sm:relative">
               <div className="z-40 fixed left-1 bottom-1 sm:sticky sm:top-28 w-full sm:min-w-[350px] bg-white border border-gray-300 rounded-lg shadow-2xl p-5 flex sm:flex-col items-center justify-between sm:items-stretch sm:flex-none">
                  <div>
                     <h2 className="text-2xl mb-2">Add dates for prices</h2>
                     <p className="sm:hidden text-xs font-semibold flex items-center gap-1">
                        <FaStar size={8} /> 4.89
                     </p>
                  </div>
                  <div className="hidden sm:block my-4 border border-gray-400 rounded-xl">
                     <div className="flex items-center justify-around border-b border-b-gray-400">
                        <div className="px-4 py-3">
                           <p className="uppercase text-[10px] font-bold">
                              check-in
                           </p>
                           <p className="capitalize text-sm text-gray-600 font-semibold">
                              Add Date
                           </p>
                        </div>

                        <div className="bg-gray-400 w-[1px] h-[60px]"></div>

                        <div className="px-4 py-3">
                           <p className="uppercase text-[10px] font-bold">
                              checkout
                           </p>
                           <p className="capitalize text-sm text-gray-600 font-semibold">
                              Add Date
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center justify-between mx-5">
                        <div className="px-4 py-3">
                           <p className="uppercase text-[10px] font-bold">
                              guests
                           </p>
                           <p className="capitalize text-sm text-gray-600 font-semibold">
                              1 Guest
                           </p>
                        </div>
                        <div className="">
                           <IoIosArrowDown size={24} />
                        </div>
                     </div>
                  </div>

                  <button className="sm:w-full text-lg text-white text-center font-semibold px-6 py-3 bg-gradient-to-r from-[#FF385C] to-pink-700 rounded-full">
                     Check Availability
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DetailsHeader;
