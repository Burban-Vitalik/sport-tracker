export const useRemoveFromFavorites = () => {
  const removeFromFavorites = async (itemId: string) => {
    try {
      await fetch("/api/favorites", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: itemId }),
      });
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  return { removeFromFavorites };
};
