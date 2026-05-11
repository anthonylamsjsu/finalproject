const introScreen = document.getElementById("introScreen");
const sessionScreen = document.getElementById("sessionScreen");
const startButton = document.getElementById("startButton");

const breathLabel = document.getElementById("breathLabel");
const timer = document.getElementById("timer");
const endButton = document.getElementById("endButton");

let totalSeconds = 180;
let remainingSeconds = totalSeconds;

let sessionRunning = false;
let countdownInterval;
let breathTimeout;

const breathCycle = [
  {
    label: "BREATHE IN",
    duration: 4000
  },
  {
    label: "HOLD",
    duration: 2000
  },
  {
    label: "BREATHE OUT",
    duration: 6000
  }
];

let cycleIndex = 0;

/* START SESSION */

startButton.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  sessionScreen.classList.add("active");

  startSession();
});

/* START / RESTART */

function startSession() {
  clearInterval(countdownInterval);
  clearTimeout(breathTimeout);

  remainingSeconds = totalSeconds;
  sessionRunning = true;
  cycleIndex = 0;

  endButton.textContent = "END SESSION";

  updateTimer();
  runBreathCycle();

  countdownInterval = setInterval(() => {
    if (!sessionRunning) return;

    remainingSeconds--;

    if (remainingSeconds <= 0) {
      remainingSeconds = 0;
      completeSession();
    }

    updateTimer();
  }, 1000);
}

/* BREATH GUIDE */

function runBreathCycle() {
  if (!sessionRunning) return;

  const currentStep = breathCycle[cycleIndex];

  breathLabel.textContent = currentStep.label;

  cycleIndex = (cycleIndex + 1) % breathCycle.length;

  breathTimeout = setTimeout(() => {
    runBreathCycle();
  }, currentStep.duration);
}

/* TIMER */

function updateTimer() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  timer.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

/* COMPLETE SESSION */

function completeSession() {
  sessionRunning = false;

  clearInterval(countdownInterval);
  clearTimeout(breathTimeout);

  breathLabel.textContent = "SESSION COMPLETE";
  endButton.textContent = "BEGIN AGAIN";
}

/* END / BEGIN AGAIN */

endButton.addEventListener("click", () => {
  if (sessionRunning) {
    completeSession();
  } else {
    startSession();
  }
});
