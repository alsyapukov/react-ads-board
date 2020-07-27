const dateFormat = (date, locale = "ru-RU") => {
  date = new Date(date);
  const formatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
  return formatter.format(date);
}

const dateFormatTime = (date, locale = "ru-RU") => {
  date = new Date(date);
  const formatter = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "numeric"
  });
  return `${dateFormat(date, locale)} ${formatter.format(date)}`;
}

export default dateFormat;

export {
  dateFormat,
  dateFormatTime
}