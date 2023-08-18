export const leadingZeroDecimal = (n) => `${n < 10 ? "0" : ""}${n}`;

export const dateToFormDate = (date) => {
  const d = new Date(date);
  const day = d.getDate();
  const dayString = leadingZeroDecimal(day);
  const month = d.getMonth();
  const monthString = leadingZeroDecimal(month + 1);
  return `${d.getFullYear()}-${monthString}-${dayString}`;
};
