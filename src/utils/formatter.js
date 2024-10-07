export const fromatTime = (date) => {
  console.log(date);
  const dateFormat = new Date(date);
  // To get the formatted Day
  const day =
    dateFormat.getDate() < 10
      ? "0" + dateFormat.getDate()
      : dateFormat.getDate();

      // To  get the formatted Month
  const month =
    dateFormat.getMonth() < 10
      ? "0" + dateFormat.getMonth()
      : dateFormat.getMonth();
  const formattedDate = day + "-" + month + "-" + dateFormat.getFullYear();
  return formattedDate;
};
