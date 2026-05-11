const form = document.getElementById("confessionForm");
const input = document.getElementById("confessionInput");
const messageLayer = document.getElementById("messageLayer");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const confession = input.value.trim();

  if (!confession) return;

  sendIntoVoid(confession);

  input.value = "";
});

function sendIntoVoid(text) {

  const message = document.createElement("div");

  message.classList.add("floating-message");

  message.textContent = text;

  const randomX = Math.random() * 40 - 20;

  message.style.left = `calc(50% + ${randomX}vw)`;

  messageLayer.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 8000);

}
