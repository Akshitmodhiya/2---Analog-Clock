// =============== CLOCK ===============
const hour = document.getElementById('clock-hour'),
  min = document.getElementById('clock-min'),
  sec = document.getElementById('clock-sec');

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30;
  mm = date.getMinutes() * 6;
  ss = date.getSeconds() * 6;

  // ADD ROTATION TO ELEMENT
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000);


// =============== CLOCK & DATE TEXT ===============
const textHour = document.getElementById('text-hour'),
  textMin = document.getElementById('text-min'),
  textAmPm = document.getElementById('text-ampm'),
  dateDay = document.getElementById('date-day'),
  dateMonth = document.getElementById('date-month'),
  dateYear = document.getElementById('date-year');

const clockText = () => {
  let date = new Date();

  let hh = date.getHours(),
    ampm,
    mm = date.getMinutes(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();


  // CHANGE HOURS FROM 24 to 12 HOURS 
  if (hh > 12) {
    hh = hh - 12;
    ampm = 'PM';
  } else {
    ampm = "AM";
  }

  // DETECT WHEN 0AM & TRANSFORM TO 12AM 
  if (hh == 0) { hh = 12; }

  // SHOW A ZERO BEFORE HOURS
  if (hh < 10) { hh = `0${hh}`; }

  // SHOW TIME
  textHour.innerHTML = `${hh}:`;

  // SHOW ZERO BEFORE MINS
  if (mm < 10) { mm = `0${mm}`; }


  // SHOW MINS
  textMin.innerHTML = mm;

  // SHOW AM OR PM
  textAmPm.innerHTML = ampm;

  // GET MONTHS OF YEAR AND SHOW IT
  let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

  // SHOW DAY, MONTH & YEAR
  dateDay.innerHTML = day;
  dateMonth.innerHTML = `${months[month]},`;
  dateYear.innerHTML = year;

};

setInterval(clockText, 1000);

// =============== DARK/LIGHT THEME ===============
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});