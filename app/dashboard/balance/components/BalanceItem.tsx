import Image, { StaticImageData } from "next/image";

interface BalanceItemProps {
  drinkType: string;
  fillLevel: number;
  color: string;
  backgroundColor: string;
  icon: StaticImageData;
}

export function BalanceItem({
  drinkType,
  fillLevel,
  color,
  // backgroundColor,
  icon,
}: BalanceItemProps) {
  return (
    <div
      className="w-[200px] h-[400px] rounded-xl flex flex-col justify-end relative shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
      style={{ background: "white" }}
    >
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-center hover:scale-105 transition-all duration-300">
        <Image
          src={icon}
          alt={drinkType}
          height={70}
          width={70}
          className="rounded-full p-2"
          style={{ backgroundColor: "whitesmoke" }}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 w-full transition-all duration-500 ease-in-out"
        style={{
          height: `${fillLevel}%`,
          backgroundColor: color,
        }}
      >
        <svg
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full"
          style={{ fill: "white" }}
        >
          <path d="M0 10 Q 25 20, 50 10 T 100 10 V0 H0 Z" />
        </svg>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-lg z-20 drop-shadow-md text-center hover:scale-105 transition-all duration-300">
        {fillLevel}% <p>{drinkType}</p>
      </div>

      <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 text-gray-700 font-semibold text-sm hover:scale-105 transition-all duration-300">
        {drinkType}
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 pointer-events-none"></div>
    </div>
  );
}
