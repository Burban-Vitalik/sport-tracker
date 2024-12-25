import { supabaseAdmin } from "../client";

type ParamsType = {
  bucket: string;
  filePath: string;
};

export const formFullUrl = ({ bucket, filePath }: ParamsType) => {
  const publicUrl = supabaseAdmin.storage.from(bucket).getPublicUrl(filePath)
    .data.publicUrl;
  return publicUrl;
};
