import { FavoriteTypeEnum } from "@/lib/api/favorites";

type DataType = {
  userId: string;
  entityId: string;
  type: FavoriteTypeEnum.EXERCISE;
};

export const useAddToFavorites = (userId: DataType["userId"]) => {
  const addToFavorites = async (
    entityId: DataType["entityId"],
    type: DataType["type"]
  ) => {
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: userId,
        entityId,
        type,
      }),
    });

    return res.ok;
  };

  return { addToFavorites };
};
