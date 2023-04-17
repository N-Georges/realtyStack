import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"; // import plugin
import "dayjs/locale/fr"; // import locale

dayjs.extend(customParseFormat); // use plugin
dayjs.locale("fr"); // use locale

export function currentDate() {
  return dayjs().format("ddd DD MMMM, YYYY");
}

export function currentDateTime() {
  return dayjs().format("ddd DD MMMM, YYYY HH:mm");
}
