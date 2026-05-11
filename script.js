@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  overflow: hidden;
  background: #000;
  color: white;
  font-family: "Doto", sans-serif;
  text-transform: uppercase;
}

/* MAIN BACKGROUND */

.breathing-room {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background:
    radial-gradient(circle at center, rgba(255,255,255,0.03), transparent 30%),
    radial-gradient(circle at 50% 50%, rgba(120,170,255,0.04), transparent 38%),
    #000;
}

/* FILM GRAIN */

.breathing-room::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.08;
  pointer-events: none;
  mix-blend-mode: screen;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.35'/%3E%3C/svg%3E");
}

/* STAR FIELD */

.breathing-room::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.4;
  pointer-events: none;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.7) 0 1px, transparent 1.4px),
    radial-gradient(circle, rgba(170,220,255,0.4) 0 1px, transparent 1.5px),
    radial-gradient(circle, rgba(255,180,240,0.3) 0 1px, transparent 1.5px);
  background-size: 260px 260px, 420px 420px, 560px 560px;
  background-position: 60px 120px, 180px 80px, 100px 300px;
  animation: starDrift 80s linear infinite;
}

/* INTRO SCREEN */

.intro-screen {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  text-align: center;
  transition: opacity 1.2s ease;
}

.intro-screen.hidden {
  opacity: 0;
  pointer-events: none;
}

.intro-screen h1 {
  font-size: clamp(3rem, 7vw, 7rem);
  letter-spacing: 0.34em;
  font-weight: 500;
  line-height: 1.2;

  background: linear-gradient(
    90deg,
    #ffffff,
    #dfe9ff,
    #f5d5ff,
    #dff8ff,
    #ffffff
  );

  background-size: 220% auto;

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;

  animation: shimmerText 12s ease-in-out infinite alternate;
}

.intro-screen p {
  max-width: 760px;
  font-size: clamp(0.8rem, 1.3vw, 1.1rem);
  letter-spacing: 0.42em;
  line-height: 2;
  color: rgba(255,255,255,0.58);
}

.start-button {
  margin-top: 26px;

  width: 280px;
  height: 58px;

  border-radius: 999px;

  border: 1px solid rgba(255,255,255,0.22);

  background:
    linear-gradient(
      90deg,
      rgba(255,255,255,0.04),
      rgba(255,255,255,0.02)
    );

  backdrop-filter: blur(18px);

  color: rgba(255,255,255,0.82);

  font-family: "Doto", sans-serif;

  font-size: 0.82rem;

  letter-spacing: 0.42em;

  text-transform: uppercase;

  cursor: pointer;

  transition:
    transform 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;
}

.start-button:hover {
  transform: scale(1.04);

  border-color: rgba(255,255,255,0.42);

  box-shadow:
    0 0 20px rgba(255,255,255,0.06),
    0 0 60px rgba(160,210,255,0.08);
}

/* SESSION SCREEN */

.session-screen {
  position: absolute;
  inset: 0;

  opacity: 0;
  pointer-events: none;

  transition: opacity 1.4s ease;
}

.session-screen.active {
  opacity: 1;
  pointer-events: auto;
}

/* TITLE */

.site-title {
  position: fixed;
  top: 34px;
  left: 40px;

  z-index: 10;

  font-size: 0.9rem;

  letter-spacing: 0.42em;

  color: rgba(255,255,255,0.72);
}

/* BREATH LABEL */

.breath-label {
  position: fixed;

  top: 17%;

  left: 50%;

  transform: translateX(-50%);

  z-index: 10;

  font-size: clamp(1rem, 1.5vw, 1.4rem);

  letter-spacing: 0.38em;

  color: rgba(255,255,255,0.86);

  text-shadow:
    0 0 20px rgba(255,255,255,0.12),
    0 0 40px rgba(180,220,255,0.08);

  transition: opacity 0.6s ease;
}

/* ORB FIELD */

.orb-field {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* CENTER LIGHT */

.center-light {
  position: absolute;

  width: 140px;
  height: 140px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255,255,255,0.92) 0%,
      rgba(255,255,255,0.2) 28%,
      rgba(160,200,255,0.08) 48%,
      transparent 70%
    );

  filter: blur(12px);

  opacity: 0.7;

  animation: centerPulse 14s ease-in-out infinite;
}

/* GLOWING GRADIENT ORBS */

.orb {
  position: absolute;

  width: var(--size);
  height: var(--size);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      var(--c1) 0%,
      var(--c2) 35%,
      transparent 72%
    );

  filter: blur(24px);

  mix-blend-mode: screen;

  opacity: 0.7;

  animation: breatheFloat 14s ease-in-out infinite;
}

/* ORB POSITIONS */

.orb:nth-child(2) {
  --size: 320px;
  --c1: rgba(140,190,255,0.95);
  --c2: rgba(80,120,255,0.22);

  animation-delay: -2s;

  transform:
    translate(-420px, -120px);
}

.orb:nth-child(3) {
  --size: 360px;
  --c1: rgba(255,180,245,0.92);
  --c2: rgba(180,90,255,0.2);

  animation-delay: -5s;

  transform:
    translate(420px, -100px);
}

.orb:nth-child(4) {
  --size: 340px;
  --c1: rgba(255,225,170,0.9);
  --c2: rgba(255,140,80,0.18);

  animation-delay: -8s;

  transform:
    translate(-300px, 240px);
}

.orb:nth-child(5) {
  --size: 400px;
  --c1: rgba(180,230,255,0.9);
  --c2: rgba(100,160,255,0.18);

  animation-delay: -11s;

  transform:
    translate(280px, 260px);
}

.orb:nth-child(6) {
  --size: 260px;
  --c1: rgba(220,180,255,0.9);
  --c2: rgba(120,90,255,0.18);

  animation-delay: -3s;

  transform:
    translate(0px, -320px);
}

/* TIMER */

.timer-area {
  position: fixed;

  left: 50%;
  bottom: 13%;

  transform: translateX(-50%);

  z-index: 10;

  text-align: center;
}

.timer {
  font-size: clamp(2rem, 3.2vw, 3.6rem);

  letter-spacing: 0.18em;

  color: rgba(255,255,255,0.84);

  text-shadow:
    0 0 20px rgba(255,255,255,0.1),
    0 0 40px rgba(160,220,255,0.08);
}

.timer-label {
  margin-top: 10px;

  font-size: 0.7rem;

  letter-spacing: 0.44em;

  color: rgba(255,255,255,0.4);
}

/* BUTTON */

.end-button {
  position: fixed;

  left: 50%;
  bottom: 5%;

  transform: translateX(-50%);

  width: 270px;
  height: 52px;

  border-radius: 999px;

  border: 1px solid rgba(255,255,255,0.18);

  background:
    linear-gradient(
      90deg,
      rgba(255,255,255,0.03),
      rgba(255,255,255,0.015)
    );

  backdrop-filter: blur(18px);

  color: rgba(255,255,255,0.76);

  font-family: "Doto", sans-serif;

  font-size: 0.78rem;

  letter-spacing: 0.38em;

  cursor: pointer;

  z-index: 10;

  transition: 0.35s ease;
}

.end-button:hover {
  border-color: rgba(255,255,255,0.38);

  color: white;

  box-shadow:
    0 0 22px rgba(255,255,255,0.06),
    0 0 42px rgba(160,210,255,0.08);
}

/* FOOTER */

.session-length,
.guide {
  position: fixed;

  bottom: 34px;

  z-index: 10;

  font-size: 0.74rem;

  letter-spacing: 0.34em;

  color: rgba(255,255,255,0.48);
}

.session-length {
  left: 40px;
}

.guide {
  right: 40px;
}

/* ANIMATIONS */

@keyframes shimmerText {
  0% {
    background-position: 0% center;
  }

  100% {
    background-position: 100% center;
  }
}

@keyframes starDrift {
  0% {
    background-position: 60px 120px, 180px 80px, 100px 300px;
  }

  100% {
    background-position: 180px 220px, 100px 180px, 220px 420px;
  }
}

/* TRUE BREATHING MOTION */

@keyframes breatheFloat {

  0% {
    scale: 1;
    opacity: 0.42;
    filter: blur(26px);
  }

  25% {
    scale: 0.82;
    opacity: 0.9;
    filter: blur(18px);
  }

  50% {
    scale: 0.74;
    opacity: 1;
    filter: blur(12px);
  }

  75% {
    scale: 0.9;
    opacity: 0.74;
    filter: blur(20px);
  }

  100% {
    scale: 1;
    opacity: 0.42;
    filter: blur(26px);
  }
}

@keyframes centerPulse {

  0% {
    scale: 0.8;
    opacity: 0.5;
  }

  50% {
    scale: 1.28;
    opacity: 1;
  }

  100% {
    scale: 0.8;
    opacity: 0.5;
  }
}

/* MOBILE */

@media (max-width: 800px) {

  .intro-screen h1 {
    font-size: 3rem;
    letter-spacing: 0.18em;
  }

  .intro-screen p {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    padding: 0 30px;
  }

  .start-button {
    width: 220px;
    height: 52px;
    font-size: 0.7rem;
  }

  .site-title {
    top: 24px;
    left: 20px;
    font-size: 0.72rem;
    letter-spacing: 0.22em;
  }

  .breath-label {
    top: 18%;
    font-size: 0.88rem;
  }

  .session-length,
  .guide {
    font-size: 0.58rem;
    letter-spacing: 0.16em;
  }

  .session-length {
    left: 18px;
  }

  .guide {
    right: 18px;
  }

  .orb {
    filter: blur(34px);
  }
}
