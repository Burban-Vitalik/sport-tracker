import Img from "@/public/img/userLogo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  name: string;
  email: string;
  onClick?: VoidFunction;
};

export function UserCard({ name, email, onClick }: Props) {
  return (
    <div className="bg-white shadow-lg rounded-2xl border border-gray-200 w-[280px] p-4 flex flex-col items-center text-center">
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-gray-300">
        <Image
          src={Img}
          alt="User Avatar"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
      <Button
        className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg transition"
        onClick={onClick}
      >
        View Profile
      </Button>
    </div>
  );
}
