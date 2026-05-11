const breathLabel = document.getElementById("breathLabel");
const timer = document.getElementById("timer");
const endButton = document.getElementById("endButton");

let totalSeconds = 180;
let remainingSeconds = totalSeconds;
let sessionRunning = true;

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
  },
  {
    label: "REST",
    duration: 2000
  }
];

let cycleIndex = 0;

/* START */

updateTimer();
runBreathCycle();

const countdown = setInterval(() => {
  if (!sessionRunning) return;

  remainingSeconds--;

  if (remainingSeconds <= 0) {
    remainingSeconds = 0;
    sessionRunning = false;
    clearInterval(countdown);
    breathLabel.textContent = "SESSION COMPLETE";
    endButton.textContent = "BEGIN AGAIN";
  }

  updateTimer();
}, 1000);

/* BREATH GUIDE */

function runBreathCycle() {
  if (!sessionRunning) return;

  const currentStep = breathCycle[cycleIndex];

  breathLabel.textContent = currentStep.label;

  cycleIndex = (cycleIndex + 1) % breathCycle.length;

  setTimeout(() => {
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

/* END / RESTART */

endButton.addEventListener("click", () => {
  if (sessionRunning) {
    sessionRunning = false;
    breathLabel.textContent = "SESSION PAUSED";
    endButton.textContent = "BEGIN AGAIN";
  } else {
    remainingSeconds = totalSeconds;
    sessionRunning = true;
    cycleIndex = 0;
    endButton.textContent = "END SESSION";
    updateTimer();
    runBreathCycle();
  }
});
