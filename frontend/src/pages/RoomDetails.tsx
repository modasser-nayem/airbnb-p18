import DetailsHeader from "../components/RoomDetails/DetailsHeader";
import ReviewSection from "../components/RoomDetails/ReviewSection";

export type TRoom = {
   id: string;
   title: string;
   picture: string;
   price: number;
   nights: number;
   avgRating: number;
};

const RoomDetails = () => {
   return (
      <div className="container min-h-screen">
         <DetailsHeader />
         <ReviewSection />
      </div>
   );
};

export default RoomDetails;
