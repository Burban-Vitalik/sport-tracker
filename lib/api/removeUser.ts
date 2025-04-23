export async function removeUser(id: string) {
  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${id}`, {
    method: "DELETE",
  });
}
