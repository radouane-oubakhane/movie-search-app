function getYearFromDate(date: string): string {
  if (!date) return "";
  const [year, ,] = date.trim().split("-");
  return "(" + year + ")";
}

export default getYearFromDate;
