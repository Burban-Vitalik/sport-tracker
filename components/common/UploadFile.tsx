"use client";
import { useState } from "react";
import CustomIconInput from "../form-elements/CustomIconInput";
import Image from "next/image";
import { Check, X } from "lucide-react";

type PropsType = {
  children: React.ReactNode;
  handleUploadImage: (file: File) => void;
};

export const UploadFile = ({ children, handleUploadImage }: PropsType) => {
  const [uploadedFile, setUploadedFile] = useState<{
    file: File;
    fileUrl: string;
  } | null>(null);

  //   const [imageUrl, setImageUrl] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setUploadedFile({ file, fileUrl });
  }

  function handleImageClick() {
    const inputElement = document.getElementById(
      "fileInput"
    ) as HTMLInputElement;

    if (inputElement) {
      inputElement.click();
    }
  }

  return (
    <div>
      <CustomIconInput
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div
        className="cursor-pointer rounded-full border-2 border-gray-300 w-[70px] h-[70px] overflow-visible"
        onDoubleClick={handleImageClick}
      >
        {uploadedFile?.fileUrl ? (
          <div className="relative w-[70px] h-[70px]">
            <Image
              width={70}
              height={70}
              alt="photo"
              src={uploadedFile?.fileUrl as string}
              draggable={false}
              className="object-cover w-full h-full rounded-full"
            />
            <Check
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                handleUploadImage(uploadedFile.file);
                setUploadedFile(null);
              }}
              className="absolute -bottom-1 left-1 text-white bg-green-400 p-1 rounded-full cursor-pointer shadow-md"
            />
            <X
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setUploadedFile(null);
              }}
              className="absolute -bottom-1 right-1 text-white bg-red-400 p-1 rounded-full cursor-pointer shadow-md"
            />
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
