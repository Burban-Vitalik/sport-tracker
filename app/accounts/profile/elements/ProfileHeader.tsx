import Image from "next/image";
import UserLogo from "../../../../public/img/userLogo.png";
import { CustomIconButton } from "@/components/form-elements/buttons/CustomIconButton";
import { Pencil } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <section className="flex items-center w-full border p-4 rounded-md bg-white shadow-sm">
      <div className="flex-shrink-0">
        <Image
          src={UserLogo}
          alt="User Logo"
          height={70}
          width={70}
          className="rounded-full"
        />
      </div>

      <div className="ml-5 flex flex-col">
        <p className="font-bold text-gray-700 text-lg">Vitalik Burban</p>
        <p className="mt-1 text-sm font-medium text-gray-500">
          Product Designer
        </p>
        <p className="text-sm text-gray-500">Lviv, Ukraine</p>
      </div>

      <div className="ml-auto">
        <CustomIconButton variant="outline" className="flex items-center gap-1">
          <Pencil size={14} /> Edit
        </CustomIconButton>
      </div>
    </section>
  );
};
