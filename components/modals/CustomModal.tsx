"use client";

import { UserPen, X } from "lucide-react";
import React from "react";

import { CustomIconButton } from "../form-elements/buttons/CustomIconButton";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

export function CustomModal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fadeBackdrop"
      aria-labelledby={title ? "modal-title" : undefined}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg w-full sm:w-[600px] max-w-lg relative shadow-2xl transform animate-scaleIn transition-transform">
        <div className="flex justify-between items-center border-b border-gray-100 p-5">
          {title && (
            <h2
              id="modal-title"
              className="text-xl font-semibold text-gray-400 flex gap-2 items-center"
            >
              <UserPen />
              {title}
            </h2>
          )}
          <CustomIconButton
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </CustomIconButton>
        </div>

        <div className="p-6 space-y-4">{children}</div>
      </div>
    </div>
  );
}
