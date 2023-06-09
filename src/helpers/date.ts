import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"; // import plugin
import "dayjs/locale/fr";

dayjs.extend(customParseFormat);
dayjs.locale("fr");

export function currentDate() {
  return (
    dayjs().format("ddd DD MMMM, YYYY").charAt(0).toUpperCase() +
    dayjs().format("ddd DD MMMM, YYYY").slice(1)
  );
}

export function currentDateTime() {
  return dayjs().format("ddd DD MMMM, YYYY HH:mm");
}
