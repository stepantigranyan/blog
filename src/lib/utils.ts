export { cn } from "cn";

export const getNow = () => new Date().toISOString();

export const readingTimeMinutes = (str: string) =>
  Math.ceil(str.trim().split(/\s+/).length / 200);
