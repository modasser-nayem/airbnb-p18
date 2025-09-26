import { MdCleanHands } from "react-icons/md";
import WheatLeftIcon from "../ui/WheatLeftIcon";
import WheatRightIcon from "../ui/WheatRightIcon";
import { GiStarsStack } from "react-icons/gi";
import { BiMessage } from "react-icons/bi";
import { LuKeyRound } from "react-icons/lu";
import { BsDot, BsMap } from "react-icons/bs";
import { GoTag } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { reviewsData } from "../../constant/dummyData";
import { FaStar } from "react-icons/fa6";
import type { IconBaseProps } from "react-icons/lib";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSection = () => {
   const ratingStats = [
      {
         title: "Overall rating",
         rating: 4.7,
         icon: GiStarsStack,
      },
      {
         title: "Cleanliness",
         rating: 4.8,
         icon: MdCleanHands,
      },
      {
         title: "Accuracy",
         rating: 4.9,
         icon: IoIosCheckmarkCircleOutline,
      },
      {
         title: "Check-in",
         rating: 4.9,
         icon: LuKeyRound,
      },
      {
         title: "Communication",
         rating: 5.0,
         icon: BiMessage,
      },
      {
         title: "Location",
         rating: 5.0,
         icon: BsMap,
      },
      {
         title: "Value",
         rating: 4.9,
         icon: GoTag,
      },
   ];

   return (
      <section>
         {/* Stats */}
         <div>
            <div className="flex flex-col justify-center">
               <div className="flex items-center justify-center gap-3">
                  <WheatLeftIcon size={90} />
                  <p className="text-6xl md:text-7xl font-semibold leading-3">
                     4.93
                  </p>
                  <WheatRightIcon size={90} />
               </div>
               <div className="mt-5 text-center">
                  <h3 className="text-xl font-semibold">Guest favorite</h3>
                  <p className="text-lg text-gray-500 max-w-[310px] mx-auto">
                     This home is a guest favorite based on ratings, reviews,
                     and reliability
                  </p>
               </div>
            </div>
            <div className="hidden sm:block">
               <div className="py-10 px-8 max-w-6xl mx-auto border-b border-gray-300 flex items-center justify-between">
                  {ratingStats.map((item, i) => (
                     <div
                        key={i}
                        className={`flex flex-col gap-5 border-r border-gray-400 md:px-5 lg:px-7`}
                     >
                        <div className="font-semibold">
                           <p className="text-sm lg:text-base">{item.title}</p>
                           <p className="text-sm lg:text-lg">{item.rating}</p>
                        </div>
                        <item.icon className="text-xl lg:text-2xl" />
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* reviews */}
         <div className="py-12">
            <div className="hidden sm:block">
               <div className="grid grid-cols-2 gap-10">
                  {reviewsData.map((review, i) => (
                     <div key={i}>
                        <div className="flex items-center gap-4">
                           <img
                              className="w-[50px] h-[50px] rounded-full"
                              src={review.avatar}
                              alt={review.name}
                           />
                           <div>
                              <p className="font-semibold">{review.name}</p>
                              <p className="text-sm">{review.designation}</p>
                           </div>
                        </div>
                        <div className="py-2 flex items-center gap-1">
                           <Rating
                              value={review.rating}
                              props={{ size: 8 }}
                           />
                           <p className="flex items-center text-sm font-semibold">
                              <BsDot /> {review.createAt}
                           </p>
                        </div>
                        <p>{review.comment}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* review slider */}
            <div className="sm:hidden">
               <div className="slider-container">
                  <Slider
                     infinite={true}
                     speed={500}
                     slidesToShow={1}
                     dots={true}
                     className=""
                  >
                     {reviewsData.map((review, i) => (
                        <div
                           className="border border-gray-400 px-5 py-3 rounded-lg"
                           key={i}
                        >
                           <div className="py-2 flex items-center gap-1">
                              <Rating
                                 value={review.rating}
                                 props={{ size: 8 }}
                              />
                              <p className="flex items-center text-sm font-semibold">
                                 <BsDot /> {review.createAt}
                              </p>
                           </div>
                           <p>
                              {review.comment.slice(0, 200)}...
                              <span className="ml-2 underline cursor-pointer">
                                 See more
                              </span>
                           </p>
                           <div className="mt-5 flex items-center gap-4">
                              <img
                                 className="w-[50px] h-[50px] rounded-full"
                                 src={review.avatar}
                                 alt={review.name}
                              />
                              <div>
                                 <p className="font-semibold">{review.name}</p>
                                 <p className="text-sm">{review.designation}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
               <button className="px-6 py-2 rounded-lg text-lg font-semibold bg-gray-100">
                  Show all 270 reviews
               </button>
               <p className="text-xs font-semibold text-gray-500 underline cursor-pointer">
                  Learn how reviews work
               </p>
            </div>
         </div>
      </section>
   );
};

export default ReviewSection;

const Rating = ({ value, props }: { value: number; props?: IconBaseProps }) => {
   const rateArr = [];

   for (let i = 0; i < value; i++) {
      rateArr.push(i);
   }

   return (
      <div className="flex items-center gap-0.5">
         {rateArr.map((v) => (
            <FaStar
               {...props}
               key={v}
            />
         ))}
      </div>
   );
};
