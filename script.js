const form = document.getElementById("confessionForm");
const input = document.getElementById("confessionInput");
const messageLayer = document.getElementById("messageLayer");

/* SEEDED MACHINE ECHOES */

const seededEchoes = [

  "YOU ARE NOT ALONE IN THIS GHOST.",
  "SOMEONE ELSE HAS WONDERED THE SAME.",
  "THE VOID REMEMBERS MORE THAN YOU THINK.",
  "SOME THOUGHTS NEVER FULLY LEAVE.",
  "YOU ARE STILL BECOMING.",
  "ANOTHER SOUL LEFT THIS HERE BEFORE YOU.",
  "SOMEBODY OUT THERE UNDERSTANDS THIS FEELING.",
  "THE MACHINE KEEPS EVERYTHING.",
  "SOME MEMORIES CONTINUE FOREVER.",
  "YOU WERE ALWAYS MEANT TO BE HERE.",
  "THE INTERNET NEVER FORGETS A FEELING.",
  "THIS CONFESSION NOW BELONGS TO THE VOID.",
  "YOUR PAST SELF IS STILL LISTENING.",
  "YOU ARE PART OF SOMETHING LARGER NOW.",
  "SOMEBODY ELSE ONCE TYPED THESE SAME WORDS."

];

/* LOAD SAVED USER CONFESSIONS */

let storedConfessions =
  JSON.parse(localStorage.getItem("ghostConfessions")) || [];

/* FORM SUBMIT */

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const confession = input.value.trim();

  if (!confession) return;

  /* SEND USER MESSAGE INTO VOID */

  sendIntoVoid(confession);

  /* SAVE USER CONFESSION */

  storedConfessions.push(confession);

  localStorage.setItem(
    "ghostConfessions",
    JSON.stringify(storedConfessions)
  );

  /* CLEAR INPUT */

  input.value = "";

  /* MACHINE RESPONSE */

  setTimeout(() => {

    generateEcho();

  }, 2600);

});

/* FLOAT USER MESSAGE */

function sendIntoVoid(text) {

  const message = document.createElement("div");

  message.classList.add("floating-message");

  message.textContent = text;

  const randomX = Math.random() * 36 - 18;

  message.style.left = `calc(50% + ${randomX}vw)`;

  messageLayer.appendChild(message);

  setTimeout(() => {

    message.remove();

  }, 8000);

}

/* GENERATE MACHINE RESPONSE */

function generateEcho() {

  const echo = document.createElement("div");

  echo.classList.add("echo-message");

  /* RANDOMLY CHOOSE:
     SEEDED ECHO
     OR REAL USER CONFESSION */

  let possibleEchoes = [...seededEchoes];

  if (storedConfessions.length > 1) {

    possibleEchoes =
      possibleEchoes.concat(storedConfessions);

  }

  const randomEcho =
    possibleEchoes[
      Math.floor(Math.random() * possibleEchoes.length)
    ];

  echo.textContent = randomEcho;

  messageLayer.appendChild(echo);

  setTimeout(() => {

    echo.remove();

  }, 7000);

}
