import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export const CollapsibleWrapper: FC<Props> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg w-full">
      <button
        className="w-full flex justify-between items-center py-2  transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{!isOpen ? title : ""}</span>
        <span
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown />
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};
