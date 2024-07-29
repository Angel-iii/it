function isToday(date) {
  const today = new Date();
  
  // Extract year, month, and day from the date parameter
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  const dateDay = date.getDate();
  
  // Extract year, month, and day from today's date
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  
  // Compare year, month, and day
  return (dateYear === todayYear) && (dateMonth === todayMonth) && (dateDay === todayDay);
}
