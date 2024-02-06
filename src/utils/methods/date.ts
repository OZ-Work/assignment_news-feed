import { MonthsTranslateList } from "constants/date";
import { MonthsTranslate } from "enums/date";

export function getFormattedDate(date: Date) {
  const [day, month, year] = date.toLocaleString().split(",")[0].split("/");
  const formattedMonth = MonthsTranslateList.at(
    MonthsTranslateList.findIndex(
      (m: MonthsTranslate) => m === (month as MonthsTranslate)
    )
  );

  return { day, month: formattedMonth, year };
}
