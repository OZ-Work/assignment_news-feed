import { MonthsList } from "constants/date";
import { MonthsRussian } from "enums/urils";

export function getFormattedDate(date: Date) {
  const [day, month, year] = date.toLocaleString().split(",")[0].split("/");
  const formattedMonth = MonthsList.at(
    MonthsList.findIndex((m: MonthsRussian) => m === (month as MonthsRussian))
  );

  return { day, month: formattedMonth, year };
}
