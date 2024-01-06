/**
 * Formats a Date object to a LongString: new Date(2024,1,1) -> January 1, 2024.
 * @param originalDate Date
 * @returns String
 */
export function formatDateToLongString(originalDate: Date) {
  const date = new Date(originalDate);
  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
