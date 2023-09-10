// Slack Name
document.querySelector('[data-testid="slackUserName"]').textContent = "Tolani Emmanuel";

// Current Day of the Week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const currentDay = daysOfWeek[today.getDay()];
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;

// Current Time (hours, minutes, seconds, and milliseconds)
function updateCurrentTime() {
      const utcTimeString = new Date().toUTCString();
      const utcTimeComponents = utcTimeString.match(/\d{2}:\d{2}:\d{2}/)[0].split(":");
      const hours = utcTimeComponents[0];
      const minutes = utcTimeComponents[1];
      const seconds = utcTimeComponents[2];
      const milliseconds = new Date().getUTCMilliseconds().toString().padStart(3, '0');
      
      const currentTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
      document.querySelector('[data-testid="currentUTCTime"]').textContent = currentTime;
  }
  
  // Update the current time initially and then every millisecond
  updateCurrentTime();
  setInterval(updateCurrentTime, 1);