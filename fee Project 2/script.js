const body = document.body;
const hour_hand = document.querySelector(".hour");
const minute_hand = document.querySelector(".minute");
const second_hand = document.querySelector(".second");
const navbar = document.querySelector("nav");
const anchor = document.querySelectorAll("a");

// Digital
const digital_hour = document.querySelector(".digital-hour");
const digital_minute = document.querySelector(".digital-minute");
const digital_second = document.querySelector(".digital-second");

const updateTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let hourtodeg = (hour / 12) * 360;
  let mintodeg = (minute / 60) * 360;
  let sectodeg = (seconds / 60) * 360;
  hour_hand.style.transform = `rotate(${hourtodeg}deg)`;
  minute_hand.style.transform = `rotate(${mintodeg}deg)`;
  second_hand.style.transform = `rotate(${sectodeg}deg)`;
  // Digital

  digital_hour.innerHTML = hour % 12 || 12;
  if (minute < 10) {
    digital_minute.innerHTML = "0" + minute;
  } else {
    digital_minute.innerHTML = minute;
  }
  if (seconds < 10) {
    digital_second.innerHTML = "0" + seconds;
  } else {
    digital_second.innerHTML = seconds;
  }
};
setInterval(updateTime, 1000);
updateTime();

// Dark mode
const digitalText = document.querySelectorAll(".digital-text");
const btn = document.querySelector(".btn");
const navbarToggler = document.querySelector(".navbar-toggler");

const navbarCollapse = document.querySelector(".navbar-collapse");
btn.addEventListener("click", () => {
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-light");
  hour_hand.classList.toggle("bg-light");
  minute_hand.classList.toggle("bg-light");
  anchor.forEach((a) => {
    a.classList.toggle("link-light");
  });
  digitalText.forEach((a) => {
    a.classList.toggle("text-dark");
  });
  digital.classList.toggle("bg-dark");
  analog.classList.toggle("bg-black");
  digital.classList.toggle("bg-gradient");
  analog.classList.toggle("bg-gradient");
  btn.classList.toggle("text-muted");
  btn.classList.toggle("text-white");
  btn.classList.toggle("ri-sun-line");
  navbarToggler.classList.toggle("text-white");
  navbarToggler.classList.toggle("border-white");
  navbarCollapse.classList.toggle("bg-dark");
});

const analogNav = document.querySelector(".analog-nav");
const analog = document.querySelector(".analog");
const digitalNav = document.querySelector(".digital-nav");
const digital = document.querySelector(".digital");

analogNav.addEventListener("click", () => {
  digital.classList.remove("d-block");
  digital.classList.add("d-none");
  analog.classList.remove("d-none");
  analog.classList.add("d-block");
});

digitalNav.addEventListener("click", () => {
  digital.classList.remove("d-none");
  digital.classList.add("d-block");
  analog.classList.remove("d-block");
  analog.classList.add("d-none");
});

//button in media query
const navButton = document.querySelector("button");
const navOptions = document.querySelectorAll(".menu a");
if (document.body.offsetWidth <= 576) {
  navOptions.forEach((option) => {
    option.addEventListener("click", () => {
      navButton.click();
    });
  });
} else {
  console.log("Screen size more than 576px");
}
