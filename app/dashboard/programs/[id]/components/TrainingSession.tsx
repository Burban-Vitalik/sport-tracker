import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TimerImg from "../../../../../public/img/timer.png";

export const TrainingSession = () => {
  return (
    <section className="border bg-white p-6 rounded-lg flex items-center gap-6 shadow-md">
      <Image
        height={60}
        width={60}
        src={TimerImg}
        alt="Timer"
        className="rounded-full border p-1"
      />
      <div className="flex flex-col gap-1 text-gray-800">
        <p className="font-semibold text-lg">Next Training Session</p>
        <p className="text-sm text-gray-600">Tuesday, March 13, 2025</p>
        <p className="text-sm text-gray-600 font-semibold">3:00 PM</p>
      </div>
      <Button
        variant="outline"
        className="ml-auto flex items-center gap-2 hover:bg-green-50 hover:border-green-500"
      >
        Book Session <ArrowRight size={16} color="green" />
      </Button>
    </section>
  );
};
