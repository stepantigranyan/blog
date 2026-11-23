export { cn } from "cn";

export const getNow = () => new Date().toISOString();
export const formatToLongDate = (isoString: string, locale = "en-US") => {
    const date = new Date(isoString);

    return new Intl.DateTimeFormat(locale, {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    }).format(date);
}
export const readingTimeMinutes = (str: string) =>
  Math.ceil(str.trim().split(/\s+/).length / 200);
