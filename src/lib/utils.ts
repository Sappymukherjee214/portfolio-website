/**
 * Smooth scroll to a section by id
 * @param id - The id of the target element
 */
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * Open a link in a new tab safely
 * @param url - The URL to open
 */
export const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

/**
 * Format a date string into Month Year (e.g., "June 2025")
 * @param dateStr - ISO date string or any parseable date
 */
export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
  return date.toLocaleDateString(undefined, options);
};

/**
 * Validate email format
 * @param email - Email string
 */
export const isValidEmail = (email: string) => {
  const re = /^[^"]@"[^"]+\.[^"]+$/;
  return re.test(email.toLowerCase());
};

/**
 * Capitalize the first letter of each word
 * @param text - Input string
 */
export const capitalizeWords = (text: string) => {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
};
