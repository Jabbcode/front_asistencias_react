import { addDays, format, subDays } from "date-fns";

export const subDaysToDate = (date: Date | string, days: number = 1) => {
  return format(subDays(date, days), "yyyy-MM-dd");
};

export const addDaysToDate = (date: Date | string, days: number = 1) => {
  return format(addDays(date, days), "yyyy-MM-dd");
};
