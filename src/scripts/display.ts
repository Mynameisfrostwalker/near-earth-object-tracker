import type { AsteroidInfo } from "./fetchData";
import spacemp3 from "../assets/space.mp3";
import spaceogg from "../assets/space.ogg";

const createAudio = () => {
  const audio = document.createElement("audio");
  audio.classList.add("space");
  audio.setAttribute("loop", "true");
  const source = document.createElement("source");
  source.src = spacemp3;
  source.type = "audio/mpeg";
  audio.appendChild(source);
  const source2 = document.createElement("source");
  source2.src = spaceogg;
  source2.type = "audio/ogg";
  audio.appendChild(source2);
  return audio;
};

const initialDisplay = () => {
  const container = document.querySelector(".container");
  if (container instanceof HTMLElement) {
    const soundDiv = document.createElement("div");
    soundDiv.classList.add("soundDiv");

    let sound = false;
    const microDiv = document.createElement("div");
    microDiv.classList.add("microDiv");
    const i = document.createElement("i");
    i.classList.add("fas", "fa-microphone-slash");
    microDiv.appendChild(i);
    const audio = createAudio();
    microDiv.appendChild(audio);
    soundDiv.appendChild(microDiv);

    microDiv.addEventListener("click", () => {
      if (!sound) {
        sound = true;
        audio
          .play()
          .then(() => {
            const microDiv2 = document.querySelector(".microDiv");
            const soundDiv2 = document.querySelector(".soundDiv");
            const audio2 = document.querySelector("audio");
            if (microDiv2 && soundDiv2 && audio2) {
              microDiv2.replaceChildren();
              const i2 = document.createElement("i");
              i2.classList.add("fas", "fa-microphone");
              microDiv2.appendChild(i2);
              microDiv2.appendChild(audio2);
              soundDiv2.appendChild(microDiv2);
            }
          })
          .catch(() => {
            console.log("Audio failed to play!");
          });
      } else {
        sound = false;
        const audio2 = document.querySelector("audio");
        const microDiv2 = document.querySelector(".microDiv");
        const soundDiv2 = document.querySelector(".soundDiv");
        if (microDiv2 && soundDiv2 && audio2) {
          audio2.pause();
          microDiv2.replaceChildren();
          const i2 = document.createElement("i");
          i2.classList.add("fas", "fa-microphone-slash");
          microDiv2.appendChild(i2);
          microDiv2.appendChild(audio2);
          soundDiv2.appendChild(microDiv2);
        }
      }
    });

    container.appendChild(soundDiv);
  }
};

const displayDiv1Info = (asteroidInfo: AsteroidInfo) => {
  const div1 = document.createElement("div");
  div1.classList.add("div1");

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("nameDiv");
  nameDiv.textContent = `Name: ${asteroidInfo.name}`;
  div1.appendChild(nameDiv);

  const magnitudeDiv = document.createElement("div");
  magnitudeDiv.classList.add("magnitudeDiv");
  magnitudeDiv.textContent = `Absolute Magnitude: ${asteroidInfo.absoluteMagnitude}`;
  div1.appendChild(magnitudeDiv);

  const velocityDiv = document.createElement("div");
  velocityDiv.classList.add("velocityDiv");
  velocityDiv.textContent = `Relative velocity: ${parseFloat(
    asteroidInfo.relativeVelocity
  ).toFixed(1)} km/s`;
  div1.appendChild(velocityDiv);

  return div1;
};

const displayDiv2Info = (asteroidInfo: AsteroidInfo) => {
  const div2 = document.createElement("div");
  div2.classList.add("div2");

  const maxDiameterDiv = document.createElement("div");
  maxDiameterDiv.classList.add("maxDiameterDiv");
  maxDiameterDiv.textContent = `Maximum estimated diameter: ${(
    parseFloat(asteroidInfo.estimatedDiameterMax.toString()) * 1000
  ).toFixed(2)} m`;
  div2.appendChild(maxDiameterDiv);

  const minDiameterDiv = document.createElement("div");
  minDiameterDiv.classList.add("minDiameterDiv");
  minDiameterDiv.textContent = `Minimum estimated diameter: ${(
    parseFloat(asteroidInfo.estimatedDiameterMin.toString()) * 1000
  ).toFixed(2)} km / 1000`;
  div2.appendChild(minDiameterDiv);

  const orbitingBodyDiv = document.createElement("div");
  orbitingBodyDiv.classList.add("orbitingBodyDiv");
  orbitingBodyDiv.textContent = `Orbiting body: ${asteroidInfo.orbitingBody}`;
  div2.appendChild(orbitingBodyDiv);

  return div2;
};

const displayDiv3Info = (
  asteroidInfo: AsteroidInfo,
  revertFunction: () => void
) => {
  const div3 = document.createElement("div");
  div3.classList.add("div3");

  const hazardDiv = document.createElement("div");
  hazardDiv.classList.add("hazardDiv");
  const iconDiv = document.createElement("div");
  const i = document.createElement("i");
  const textDiv = document.createElement("div");

  if (asteroidInfo.potentiallyHazardous) {
    i.classList.add("fas", "fa-exclamation-triangle");
    iconDiv.appendChild(i);
    hazardDiv.appendChild(iconDiv);

    textDiv.textContent = "Asteroid is potentially hazardous!";
    hazardDiv.appendChild(textDiv);

    hazardDiv.classList.add("hazard");
  } else {
    i.classList.add("fas", "fa-check-circle");
    iconDiv.appendChild(i);
    hazardDiv.appendChild(iconDiv);

    textDiv.textContent = "Asteroid is not potentially hazardous!";
    hazardDiv.appendChild(textDiv);

    hazardDiv.classList.add("not-hazard");
  }
  div3.appendChild(hazardDiv);

  const backDiv = document.createElement("div");
  backDiv.classList.add("backDiv");

  const backIcon = document.createElement("div");
  const backI = document.createElement("i");
  backI.classList.add("fas", "fa-arrow-alt-circle-left");
  backIcon.appendChild(backI);
  backDiv.appendChild(backIcon);

  const backText = document.createElement("text");
  backText.textContent = "Back to Earth View";
  backDiv.appendChild(backText);

  backDiv.addEventListener("click", revertFunction);

  div3.appendChild(backDiv);

  return div3;
};

const displayDiv4Info = (asteroidInfo: AsteroidInfo) => {
  const div4 = document.createElement("div");
  div4.classList.add("div4");

  const closestApproachDiv = document.createElement("div");
  closestApproachDiv.classList.add("closestApproachDiv");
  closestApproachDiv.textContent = `Closest approach date: ${asteroidInfo.closestApproachDate}`;
  div4.appendChild(closestApproachDiv);

  const missDistanceDiv = document.createElement("div");
  missDistanceDiv.classList.add("missDistanceDiv");
  missDistanceDiv.textContent = `Miss distance: ${(
    parseFloat(asteroidInfo.missDistance) / 1000
  ).toFixed(2)} m`;
  div4.appendChild(missDistanceDiv);

  return div4;
};

const displayAsteroidInfo = (
  asteroidInfo: AsteroidInfo,
  revertFunction: () => void
) => {
  const container = document.querySelector(".container");
  if (container instanceof HTMLElement) {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    container.appendChild(infoDiv);

    const revert = () => {
      container.removeChild(infoDiv);
      revertFunction();
    };

    const div1 = displayDiv1Info(asteroidInfo);
    const div2 = displayDiv2Info(asteroidInfo);
    const div3 = displayDiv3Info(asteroidInfo, revert);
    const div4 = displayDiv4Info(asteroidInfo);

    infoDiv.appendChild(div1);
    infoDiv.appendChild(div2);
    infoDiv.appendChild(div3);
    infoDiv.appendChild(div4);
  }
};

const errorDisplay = () => {
  const container = document.querySelector(".container");
  if (container instanceof HTMLElement) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent = "Error loading data!";
    container.appendChild(errorDiv);
  }
};

export { displayAsteroidInfo, initialDisplay, errorDisplay };
