// SELECTORS
const immersionButton = document.querySelector(".levels_immersion_button");
const onlineButton = document.querySelector(".levels_online_button");
const coachButton = document.querySelector(".levels_coach_button");

const daySpan = document.querySelector(".timer__box .days");
const hourSpan = document.querySelector(".timer__box .hours");
const minuteSpan = document.querySelector(".timer__box .minutes");
const secondSpan = document.querySelector(".timer__box .seconds");

const form = document.querySelector("form");

const date = new Date("2024-03-12T09:30:00").getTime(); // Defina a data alvo do contador aqui

// FUNCTIONS
function immersionClick() {
  console.log("Clicou botão imersão");
}

function onlineClick() {
  console.log("Clicou botão online");
}

function coachClick() {
  console.log("Clicou botão MENTORIA");
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function updateCountdown() {
  const now = new Date().getTime();
  const difference = date - now;

  if (difference <= 0) {
    clearInterval(countdownInterval);
  } else {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daySpan.innerHTML = `${formatTime(days)}`;
    hourSpan.innerHTML = `${formatTime(hours)}`;
    minuteSpan.innerHTML = `${formatTime(minutes)}`;
    secondSpan.innerHTML = `${formatTime(seconds)}`;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

function onSubmit(event) {
  event.preventDefault();
  const name = form.querySelector("#nome").value;
  const email = form.querySelector("#email").value;

  console.log(name, email);
}

// OBSERVERS
immersionButton.addEventListener("click", immersionClick);

onlineButton.addEventListener("click", onlineClick);

coachButton.addEventListener("click", coachClick);

form.addEventListener("submit", onSubmit);
