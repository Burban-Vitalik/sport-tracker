import { FC, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChatInfo } from "./ChatInfo";
import { UseModal } from "@/types/modal";

type Props = {
  isOpen: UseModal["isOpen"];
  toggleModal: UseModal["toggleModal"];
};

export const InfoPanel: FC<Props> = ({ isOpen, toggleModal }) => {
  const infoRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!infoRef.current) return;

    gsap.to(infoRef.current, {
      x: isOpen ? 0 : 50,
      width: isOpen ? "350px" : "0%",
      opacity: isOpen ? 1 : 0,
      scale: isOpen ? 1 : 0.95,
      filter: isOpen ? "blur(0px)" : "blur(5px)",
      duration: 0.5,
      ease: "power3.inOut",
      onStart: () => {
        if (isOpen) infoRef.current!.style.visibility = "visible";
      },
      onComplete: () => {
        if (!isOpen) infoRef.current!.style.visibility = "hidden";
      },
    });
  }, [isOpen]);

  return (
    <div
      ref={infoRef}
      className={`transition-all duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible w-0"
      }`}
    >
      <ChatInfo toggleModal={toggleModal} />
    </div>
  );
};
