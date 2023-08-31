function formatDate(inputDate: string): string {
    if (!inputDate) return "";
    const months: string[] = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const [year, month, day] = inputDate.trim().split("-");
    const formattedDate = `${months[Number(month) - 1]} ${day}, ${year}`;
    
    return formattedDate;
  }
  

  
export default formatDate;

