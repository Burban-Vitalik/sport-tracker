export function showTimeBasedGreeting(time: Date) {
  const date = time.getHours();
  let message = "";

  switch (true) {
    case date >= 6 && date < 12:
      message = "Good Morning";
      break;
    case date >= 12 && date < 18:
      message = "Good Afternoon";
      break;
    case date >= 18 && date < 24:
      message = "Good Evening";
      break;
    default:
      message = "Good Night";
  }

  return message;
}
