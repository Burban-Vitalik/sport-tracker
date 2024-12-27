import { supabaseAdmin } from "../client";
import { formFullUrl } from "../helperes/makeFullUrl";

type ParamsType = {
  bucket: string;
  folder: string;
};

export const getFilesFromStorage = async ({
  bucket = "images",
  folder,
}: ParamsType): Promise<string[] | null> => {
  try {
    const { data, error } = await supabaseAdmin.storage
      .from(bucket)
      .list(folder);

    if (error) {
      console.error("Error fetching files:", error.message);
      return null;
    }

    const photos = data?.map(
      (file) =>
        `${formFullUrl({
          bucket: bucket,
          filePath: `${folder}/${file.name}`,
        })}`
    );

    //;
    return photos || null;
  } catch (err) {
    console.error("Error fetching files:", err);
    return null;
  }
};
