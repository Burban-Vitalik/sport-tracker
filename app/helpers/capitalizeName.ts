export function capitalizeName(name: string) {
  if (!name) return null;

  return name
    .split(" ")
    .map(
      (word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
}
