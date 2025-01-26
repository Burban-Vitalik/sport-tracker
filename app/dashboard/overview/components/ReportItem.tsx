type PropsType = {
  title: string;
  report: string;
};

import SleepImg from "../../../../public/img/2829069.png";
import Image from "next/image";

export function ReportItem({ title, report }: PropsType) {
  return (
    <div className="flex flex-col flex-1 items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="w-20 h-20 bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-500 rounded-full flex justify-center items-center overflow-hidden mb-6 shadow-md">
        <Image
          src={SleepImg}
          alt="Sleep"
          height={80}
          width={80}
          className="object-cover"
        />
      </div>
      <p className="font-semibold text-xl text-gray-800 text-center mb-2 transition-all duration-300">
        {report}
      </p>
      <p className="font-medium text-gray-500 text-center">{title}</p>
    </div>
  );
}
