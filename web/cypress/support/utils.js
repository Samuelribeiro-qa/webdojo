export function getTodayDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();
  
    return `${day}/${month}/${year}`;
  }