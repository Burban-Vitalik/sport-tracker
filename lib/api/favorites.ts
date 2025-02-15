enum FavoriteTypeEnum {
  EXERCISE = "EXERCISE",
  WORKOUT = "WORKOUT",
}

type PropsType = {
  type: FavoriteTypeEnum.EXERCISE | FavoriteTypeEnum.WORKOUT;
  userId: number;
  entityId: string;
};

async function addToFavorites({ type, userId, entityId }: PropsType) {
  if (!userId || !entityId || !type) return null;

  await fetch("/api/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: userId,
      entityId,
      type,
    }),
  });
}

async function removeFromFavorites({
  favoriteItemId,
}: {
  favoriteItemId: string;
}) {
  if (!favoriteItemId) return;

  await fetch("/api/favorites", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: favoriteItemId }),
  });
}

export { addToFavorites, removeFromFavorites, FavoriteTypeEnum };
