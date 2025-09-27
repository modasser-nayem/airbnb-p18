import { Link } from "react-router";
import { RiGlobalLine } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
   const linksItem = {
      support: [
         { title: "Help Center", href: "#" },
         { title: "Get help with a safety issue", href: "#" },
         { title: "AirCover", href: "#" },
         { title: "Anti-discrimination", href: "#" },
         { title: "Disability support", href: "#" },
         { title: "Cancellation options", href: "#" },
         { title: "Report neighborhood concern", href: "#" },
      ],
      hosting: [
         { title: "Airbnb your home", href: "#" },
         { title: "Airbnb your experience", href: "#" },
         { title: "Airbnb your service", href: "#" },
         { title: "AirCover for Hosts", href: "#" },
         { title: "Hosting resources", href: "#" },
         { title: "Community forum", href: "#" },
         { title: "Hosting responsibly", href: "#" },
         { title: "Airbnb-friendly apartments", href: "#" },
         { title: "Join a free Hosting class", href: "#" },
         { title: "Find a co-host", href: "#" },
      ],
      airbnb: [
         { title: "2025 Summer Release", href: "#" },
         { title: "Newsroom", href: "#" },
         { title: "Careers", href: "#" },
         { title: "Investors", href: "#" },
         { title: "Gift cards", href: "#" },
         { title: "Airbnb.org emergency stays", href: "#" },
      ],
   };

   return (
      <div className="bg-secondary">
         <div className="container">
            <div className="py-10 grid sm:grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-300">
               <div>
                  <h2 className="text font-semibold">Support</h2>
                  {linksItem.support.map((item, i) => (
                     <Link
                        key={i}
                        to={item.href}
                        className="block mt-3 text-base hover:underline"
                     >
                        {item.title}
                     </Link>
                  ))}
               </div>
               <div className="border-y border-gray-300 py-5 md:py-0 md:border-none">
                  <h2 className="text font-semibold">Support</h2>
                  {linksItem.hosting.map((item, i) => (
                     <Link
                        key={i}
                        to={item.href}
                        className="block mt-3 text-base hover:underline"
                     >
                        {item.title}
                     </Link>
                  ))}
               </div>
               <div>
                  <h2 className="text font-semibold">Support</h2>
                  {linksItem.airbnb.map((item, i) => (
                     <Link
                        key={i}
                        to={item.href}
                        className="block mt-3 text-base hover:underline"
                     >
                        {item.title}
                     </Link>
                  ))}
               </div>
            </div>
            <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
               <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <p className="inline-block">© 2025 Airbnb, Inc.</p>
                  {["Terms", "Sitemap", "Privacy", "Your Privacy Choices"].map(
                     (item, i) => (
                        <Link
                           key={i}
                           to={"#"}
                           className="inline-block ml-2 hover:underline"
                        >
                           . {item}
                        </Link>
                     )
                  )}
               </div>
               <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-base font-semibold">
                  <Link
                     to={"#"}
                     className="flex items-center gap-1"
                  >
                     <RiGlobalLine /> English (US)
                  </Link>
                  <Link
                     to={"#"}
                     className="flex items-center gap-1"
                  >
                     <BiDollar /> USD
                  </Link>
                  <Link
                     to={"#"}
                     className="p-2 hover:bg-gray-200 rounded-full"
                  >
                     <FaFacebook />
                  </Link>
                  <Link
                     to={"#"}
                     className="p-2 hover:bg-gray-200 rounded-full"
                  >
                     <FaXTwitter />
                  </Link>
                  <Link
                     to={"#"}
                     className="p-2 hover:bg-gray-200 rounded-full"
                  >
                     <FaInstagram />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
