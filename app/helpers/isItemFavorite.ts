import { Favorite } from "@prisma/client";

export function isItemFavorite(itemId: string, favorites: Favorite[]) {
  return favorites.some((fav) => fav.entityId === itemId);
}
