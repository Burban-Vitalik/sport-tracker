export const calculateTime = (
  date1: Date | null,
  date2: Date | null,
  init: string
) => {
  if (!date1 || !date2) return 0;

  const diffInMs = Math.abs(date2.getTime() - date1.getTime());
  const msInDay = 1000 * 60 * 60 * 24;
  const msInWeek = msInDay * 7;
  const msInMonth = msInDay * 30.44;
  const msInHour = msInDay / 24;
  const msInYear = msInDay * 365.25;

  switch (init) {
    case "days":
      return Math.ceil(diffInMs / msInDay);
    case "weeks":
      return Math.ceil(diffInMs / msInWeek);
    case "months":
      return Math.ceil(diffInMs / msInMonth);
    case "years":
      return Math.ceil(diffInMs / msInYear);
    case "hours":
      return Math.ceil(diffInMs / msInHour);
    default:
      return Math.ceil(diffInMs / msInHour);
  }
};
