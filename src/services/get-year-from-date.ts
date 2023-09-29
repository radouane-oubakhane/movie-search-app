

function getYearFromDate(date: string): string {
    if (!date) return "";
    const [year, month, day] = date.trim().split("-");
    return "(" + year + ")";
  }


export default getYearFromDate;