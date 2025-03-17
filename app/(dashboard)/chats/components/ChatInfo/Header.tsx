import { ChevronLeft, Settings } from "lucide-react";
import { FC } from "react";

type HeaderProps = {
  toggleModal: VoidFunction;
};

export const Header: FC<HeaderProps> = ({ toggleModal }) => {
  return (
    <div className="flex w-full justify-between">
      <span className="flex gap-2">
        <ChevronLeft
          className="cursor-pointer hover:scale-110 transition-all"
          onClick={toggleModal}
          color="gray"
          size={24}
        />
        <p className="font-semibold">Chanel Information</p>
      </span>
      <button>
        <Settings color="gray" size={24} />
      </button>
    </div>
  );
};
