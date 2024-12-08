// Функція для показу/маскування електронної пошти
export const formatEmail = (email: string, shouldBlur: boolean): string => {
  if (!email || !shouldBlur) {
    // Повертаємо цілу пошту, якщо потрібно показати повністю
    return email;
  }

  // Маскуємо частину email, показуючи лише першу частину
  const [localPart, domain] = email.split("@");
  const blurredLocalPart = localPart.slice(0, 3) + "***"; // маскуємо після першого 3 символів

  return `${blurredLocalPart}@${domain}`;
};
