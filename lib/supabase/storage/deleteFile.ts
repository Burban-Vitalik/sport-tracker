import { supabaseAdmin } from "../client";

type DeleteFileParams = {
  bucket: string;
  folder: string;
  fileUrl: string;
};

type DeleteFileResult = {
  success: boolean;
  message: string;
};

export const deleteFileFromStorage = async ({
  bucket,
  folder,
  fileUrl,
}: DeleteFileParams): Promise<DeleteFileResult> => {
  if (!bucket || !folder || !fileUrl) {
    const errorMessage =
      "Error: 'bucket', 'folder', and 'fileUrl' parameters are required.";
    console.error(errorMessage);
    return { success: false, message: errorMessage };
  }

  const fileParts = fileUrl.split("/");

  try {
    const { error } = await supabaseAdmin.storage
      .from(bucket)
      .remove([`${fileParts[8]}/${fileParts[9]}`]);

    if (error) {
      const errorMessage = `Error deleting file: ${error.message}`;
      console.error(errorMessage);
      return { success: false, message: errorMessage };
    }

    const successMessage = `File '${folder}/${fileUrl}' is successefuly removed from bucket '${bucket}'.`;
    console.log(successMessage);
    debugger;
    return { success: true, message: successMessage };
  } catch (error) {
    const errorMessage = `Error deleting file: ${
      error instanceof Error ? error.message : "Unknown error"
    }`;
    console.error(errorMessage);
    return { success: false, message: errorMessage };
  }
};
