"use client";

import { useEffect, useState, ChangeEvent } from "react";
import Image from "next/image";
import { formFullUrl } from "@/lib/supabase/helperes/makeFullUrl";
import { deleteFileFromStorage } from "@/lib/supabase/storage/deleteFile";
import { getFilesFromStorage } from "@/lib/supabase/storage/getFiles";
import { uploadFileToStarage } from "@/lib/supabase/storage/uploadFile";
import { showToast } from "@/app/helpers/showToast";

const Page3 = () => {
  const [photos, setPhotos] = useState<string[] | null>(null);
  const userId = 2;

  useEffect(() => {
    const fetchPhotos = async () => {
      const fetchedPhotos = await getFilesFromStorage({
        bucket: "images",
        folder: userId.toString(),
      });
      setPhotos(fetchedPhotos);
    };
    fetchPhotos();
  }, [userId]);

  const handleUploadFiles = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const response = await uploadFileToStarage({
      bucket: "images",
      folder: userId.toString(),
      file,
    });

    formFullUrl({
      bucket: "images",
      filePath: response?.path || "",
    });

    if (response) {
      showToast({ message: "File is uploaded successfully", type: "success" });
    } else {
      showToast({
        message: "File is not uploaded successfully",
        type: "error",
      });
    }
  };

  const handleDeleteFile = async (photo: string) => {
    const res = await deleteFileFromStorage({
      bucket: "images",
      folder: userId.toString(),
      fileUrl: photo,
    });

    if (res.success) {
      showToast({ message: "File is deleted successfully", type: "success" });
    } else {
      showToast({ message: "File is not deleted successfully", type: "error" });
    }

    debugger;
  };

  if (!photos) {
    return <p>Завантаження...</p>;
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        id="file_input"
        onChange={handleUploadFiles}
      />

      <h1>Галерея фотографій</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {photos.map((photo, index) => (
          <Image
            key={index}
            src={photo}
            alt={`Фото ${index + 1}`}
            width={300}
            height={300}
            onDoubleClick={() => handleDeleteFile(photo)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page3;
