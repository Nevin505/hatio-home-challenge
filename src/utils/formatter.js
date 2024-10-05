export const fromatTime=(time)=>{
    const date = new Date(time);
    

// Format the time with a specific time zone (e.g., 'America/New_York')
const formattedTime = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true, // Set to `false` for 24-hour format
  timeZone: 'America/New_York', // Specify the time zone here
}).format(date);
  return formattedTime;
}
