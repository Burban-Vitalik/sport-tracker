"use client";

import React from "react";
import { CustomIconButton } from "../form-elements/buttons/CustomIconButton";
import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

export function CustomModal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full sm:w-[600px] max-w-lg relative shadow-xl transition-all transform">
        {/* Закриття модалі */}
        <CustomIconButton
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </CustomIconButton>

        {/* Заголовок модалі */}
        {title && (
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        )}

        {/* Вміст модалі */}
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}
