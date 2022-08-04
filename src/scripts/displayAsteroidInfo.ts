import type { AsteroidInfo } from "./fetchData";

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
  velocityDiv.textContent = `Relative velocity: ${asteroidInfo.relativeVelocity} km/s`;
  div1.appendChild(velocityDiv);

  return div1;
};

const displayDiv2Info = (asteroidInfo: AsteroidInfo) => {
  const div2 = document.createElement("div");
  div2.classList.add("div2");

  const maxDiameterDiv = document.createElement("div");
  maxDiameterDiv.classList.add("maxDiameterDiv");
  maxDiameterDiv.textContent = `Maximum estimated diameter: ${asteroidInfo.estimatedDiameterMax} km`;
  div2.appendChild(maxDiameterDiv);

  const minDiameterDiv = document.createElement("div");
  minDiameterDiv.classList.add("minDiameterDiv");
  minDiameterDiv.textContent = `Minimum estimated diameter: ${asteroidInfo.estimatedDiameterMin} km`;
  div2.appendChild(minDiameterDiv);

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
  missDistanceDiv.textContent = `Miss distance: ${parseFloat(
    asteroidInfo.missDistance
  ).toFixed(1)} km`;
  div4.appendChild(missDistanceDiv);

  const orbitingBodyDiv = document.createElement("div");
  orbitingBodyDiv.classList.add("orbitingBodyDiv");
  orbitingBodyDiv.textContent = `Orbiting body: ${asteroidInfo.orbitingBody}`;
  div4.appendChild(orbitingBodyDiv);

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

export default displayAsteroidInfo;
