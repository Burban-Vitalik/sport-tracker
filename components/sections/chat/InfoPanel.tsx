"use client";
import { gsap } from "gsap";
import { FC, useLayoutEffect, useRef } from "react";

import { EModal } from "@/app/enums/modal.enum";
import { MyPick } from "@/types/custom-types";
import { UseModal } from "@/types/modal";

import { ChatInfo } from "./ChatInfo/ChatInfo";

type Props = {} & MyPick<UseModal, EModal.isOpen | EModal.toggleModal>;

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
      className={`transition-all duration-500 border ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible w-0"
      }`}
    >
      <ChatInfo toggleModal={toggleModal} />
    </div>
  );
};
