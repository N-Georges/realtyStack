import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"; // import plugin
import "dayjs/locale/fr";

dayjs.extend(customParseFormat);
dayjs.locale("fr");

export function currentDate() {
  return dayjs().format("ddd DD MMMM, YYYY");
}

export function currentDateTime() {
  return dayjs().format("ddd DD MMMM, YYYY HH:mm");
}
