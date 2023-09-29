function minutesToHours(seconds: number): string {
    const hours = Math.floor(seconds / 60);
    const minutes = seconds % 60;
    return `${hours}h ${minutes}m`;
}


export default minutesToHours;