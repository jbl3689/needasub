/**
 * Format a date to display as "D MMM, YYYY" (e.g. "1 Mar, 2025")
 */
export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return "N/A";

  const dateObj = typeof date === "string" ? new Date(date) : date;

  return `${dateObj.getDate()} ${dateObj.toLocaleString("default", {
    month: "short",
  })}, ${dateObj.getFullYear()}`;
}

/**
 * Format a date in a relative way (e.g. "2 days ago", "just now")
 */
export function formatRelativeTime(
  date: Date | string | null | undefined
): string {
  if (!date) return "N/A";

  const dateObj = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - dateObj.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSecs < 60) return "just now";
  if (diffMins < 60)
    return `${diffMins} ${diffMins === 1 ? "minute" : "minutes"} ago`;
  if (diffHours < 24)
    return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
  if (diffDays < 30)
    return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;

  return formatDate(date);
}
