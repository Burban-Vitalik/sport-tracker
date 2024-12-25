import { supabaseAdmin } from "../client";

type ParamsType = {
  bucket: string;
  folder: string;
  file: File;
};

type ResponseType = {
  id: string;
  path: string;
  fullPath: string;
};

export const uploadFileToStarage = async ({
  bucket = "images",
  folder,
  file,
}: ParamsType): Promise<ResponseType | null> => {
  if (!folder || !file) {
    console.error("Error: 'folder' and 'file' parameters are required.");
    throw new Error("'folder' and 'file' parameters are required.");
  }

  const filePath = `${folder}/${file.name}`;

  try {
    const { data, error } = await supabaseAdmin.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading file:", error.message);
      throw new Error(error.message);
    }

    if (data) {
      console.log(
        `File uploaded successfully to "${bucket}/${filePath}"`,
        data
      );

      return {
        id: data.id,
        path: data.path,
        fullPath: data.path ? `${bucket}/${data.path}` : filePath,
      };
    }
    console.warn("Warning: No data returned after file upload.");
    return null;
  } catch (err) {
    console.error("Unexpected error during file upload:", err);
    throw err;
  }
};
