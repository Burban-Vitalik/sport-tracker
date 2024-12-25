interface FileInfo {
  baseUrl: string;
  bucket: string;
  folder: string;
  fileName: string;
  fileExtension: string;
}

export const parseUrl = (url: string): FileInfo | null => {
  try {
    const regex =
      /https:\/\/([a-zA-Z0-9\-]+)\.supabase\.co\/storage\/v1\/object\/public\/([a-zA-Z0-9\-]+)\/([^\/]+)\/(.+)$/;
    const match = url.match(regex);
    console.log("match", match);

    if (match) {
      const filePath = match[4];
      const folder = match[3];
      const fileName = filePath.split("/").pop() || "";
      const fileExtension = fileName.split(".").pop() || "";

      return {
        baseUrl: match[0],
        bucket: match[2],
        folder: folder,
        fileName: fileName,
        fileExtension: fileExtension,
      };
    }
    return null;
  } catch (error) {
    console.error("Error parsing URL:", error);
    return null;
  }
};
