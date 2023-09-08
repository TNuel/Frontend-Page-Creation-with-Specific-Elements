// Function to update the day of the week and UTC time
function updateDateTime() {
    const dayOfWeekElement = document.getElementById("dayOfWeek");
    const utcTimeElement = document.getElementById("utcTime");

    const now = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    const utcTime = new Date().toUTCString();

    dayOfWeekElement.textContent = dayOfWeek;
    utcTimeElement.textContent = utcTime;
  }

  // Update the time immediately and then every 1 second (1000 milliseconds)
  updateDateTime();
  setInterval(updateDateTime, 1000);