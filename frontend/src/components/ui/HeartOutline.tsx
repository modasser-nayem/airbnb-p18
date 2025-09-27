import React from "react";

type Props = {
   size?: number | string;
   fill?: string;
   stroke?: string;
   strokeWidth?: string;
   className?: string;
   onClick?: (e: React.MouseEvent) => void;
   title?: string;
};

/**
 * HeartOutline - an SVG heart similar to IoMdHeartEmpty,
 * but with controllable fill & stroke.
 */
export default function HeartOutline({
   size = 24,
   fill = "transparent",
   stroke = "currentColor",
   strokeWidth = "8",
   className = "",
   onClick,
   title = "Favorite",
}: Props) {
   // Using a well-formed common heart path instead (reliable)
   const heartPath =
      "M256 464l-16-14C119 343 48 276 48 192 48 126 102 72 168 72c36 0 68 18 88 46 20-28 52-46 88-46 66 0 120 54 120 120 0 84-71 151-192 258l-16 14z";

   return (
      <svg
         viewBox="0 0 512 512"
         width={size}
         height={size}
         onClick={onClick}
         role={onClick ? "button" : "img"}
         aria-label={title}
         className={`transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer ${className}`.trim()}
      >
         {/* The heart path: fill controls interior, stroke controls outline */}
         <path
            d={heartPath}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
         />
      </svg>
   );
}
