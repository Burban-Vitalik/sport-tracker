"use client";
import { UseModal } from "@/types/modal";
import { useState } from "react";

export const useModal = (): UseModal => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return { isOpen, openModal, closeModal, toggleModal };
};
