export const getFullUserName = (firstName: string, lastName: string) => {
  if (!firstName || !lastName) return "";
  return `${firstName} ${lastName}`;
};
