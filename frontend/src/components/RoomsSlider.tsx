import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useRef, useState } from "react";
import type { IRoom } from "../types/room";
import { Link } from "react-router";
import HeartOutline from "./ui/HeartOutline";

const RoomsSlider = ({ data, title }: { data: IRoom[]; title: string }) => {
   const sliderRef = useRef<Slider | null>(null);
   const [currentSlide, setCurrentSlide] = useState(0);

   const settings: Settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      afterChange: (currSlide) => setCurrentSlide(currSlide),
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 6,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
   };

   const rooms = data;

   return (
      <div>
         <div className="flex items-center justify-between px-2 py-2.5">
            <h2 className="text-xl font-semibold flex items-center">
               {title}
               <IoIosArrowForward />
            </h2>
            <div className="hidden sm:block">
               <button
                  className="p-1 border border-gray-400 rounded-full hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-inherit"
                  onClick={() => sliderRef.current?.slickPrev()}
                  disabled={currentSlide === 0}
               >
                  <IoIosArrowBack size={16} />
               </button>
               <button
                  className="ml-2 p-1 border border-gray-400 rounded-full hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-inherit"
                  onClick={() => sliderRef.current?.slickNext()}
                  disabled={rooms.length === currentSlide}
               >
                  <IoIosArrowForward size={16} />
               </button>
            </div>
         </div>
         <div className="slider-container">
            <Slider
               ref={sliderRef}
               {...settings}
               className=""
            >
               {rooms.map((room) => (
                  <Link
                     key={room.id}
                     to={`/rooms/${room.id}`}
                  >
                     <div className="px-2">
                        <div className="relative max-w-[300px] max-h-[300px]">
                           <img
                              className="rounded-2xl"
                              src={room.picture}
                           />
                           <div className="absolute top-2.5 w-full flex items-center justify-between px-3">
                              <p className="bg-white/75 px-3 py-1 rounded-full text-xs font-semibold">
                                 Guest Favorite
                              </p>
                              <Link
                                 to={`/rooms/${room}`}
                                 className=""
                              >
                                 <HeartOutline
                                    size={26}
                                    fill="rgba(0,0,0,0.4)"
                                    stroke="white"
                                    strokeWidth="30"
                                    className="text-black/40 hover:text-black/60"
                                 />
                              </Link>
                           </div>
                        </div>

                        <h4 className="pt-2 text-sm font-semibold">
                           {room.title}
                        </h4>
                        <p className="text-xs text-gray-600 flex items-center gap-1">
                           ${room.price} for {room.nights} nights.{" "}
                           <span className="flex items-center gap-0.5">
                              <FaStar size={8} /> 4.98
                           </span>
                        </p>
                     </div>
                  </Link>
               ))}
            </Slider>
         </div>
      </div>
   );
};

export default RoomsSlider;
