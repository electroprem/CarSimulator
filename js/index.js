let engineOn = false;
let win;
let drivable = false;
let money = 100;
let parked = true;
let driving = false;
let gasAmount = 100;
let destinations = [];
let workMiles = 10;
let parkMiles = 4;
let storeMiles = 3;
let eateryMiles = 5;
let barMiles = 3;
let homeMiles = 7;
let workPay = 15;
let tMiles = 0;
let milesTD = 0;
let drivePress = false;

const totalMiles = document.querySelector("#totalMiles");
const milesToDest = document.querySelector("#milesToDest");
const cash = document.querySelector("#cash");
const driveBtn = document.querySelector("#drive");
const engineBtn = document.querySelector("#engine");
const parkCarBtn = document.querySelector("#park");
const gasBar = document.querySelector("#gasBar");
const workBtn = document.querySelector("#dst_work");
const parkBtn = document.querySelector("#dst_park");
const storeBtn = document.querySelector("#dst_store");
const eateryBtn = document.querySelector("#dst_eatery");
const barBtn = document.querySelector("#dst_bar");
const homeBtn = document.querySelector("#dst_home");

cash.innerHTML = `Cash: ${money}`;
totalMiles.innerHTML = `Total Miles Driven: ${tMiles}`;
milesToDest.innerHTML = `Miles To Destination: ${milesTD}`;

engineBtn.addEventListener("click", (event) => {
  if (!engineOn && parked && !driving && money > 0 && gasAmount > 0) {
    drivable = true;
    engineOn = true;
    engineBtn.style.background = "lightgreen";
  } else if (engineOn && parked && !driving) {
    drivable = false;
    engineOn = false;
    engineBtn.style.background = "tomato";
    driveBtn.style.background = "tomato";
  } else if (engineOn && !parked && drving) {
    drivable = true;
    engineOn = true;
    engineBtn.style.background = "lightgreen";
    driveBtn.style.background = "lightgreen";
  }
});

parkCarBtn.addEventListener("click", (event) => {
  if (!driving) {
    if (!engineOn && parked) {
      drivable = false;
      parkCarBtn.style.background = "tomato";
      driveBtn.style.background = "tomato";
    }
    if (engineOn && !parked) {
      drivable = true;
      driving = true;
      parked = true;
      parkCarBtn.style.background = "lightgreen";
      driveBtn.style.background = "lightgreen";
    }
    if (engineOn && parked) {
      drivable = true;
      driving = true;
      parked = false;
      parkCarBtn.style.background = "tomato";
      driveBtn.style.background = "lightgreen";
    }
  } else if (driving) {
    parked = true;
    drivable = false;
    driving = false;
    parkCarBtn.style.background = "lightgreen";
    driveBtn.style.background = "tomato";
  }
});

driveBtn.addEventListener("click", (event) => {
  if (drivable && parked) {
    window.alert("You need to release the parking brake!");
  } else if (drivable && !parked && destinations.length == 0) {
    window.alert("You need to have a destination in mind!");
  } else if (drivable && !parked && destinations.length > 0) {
    flashColor();
    setTimeout(() => {
      clearColor();
    }, 400);
    drivePress = true;
    //drive(destinations);
  }
});

workBtn.addEventListener("click", (event) => {
  if (workBtn.checked == true && !destinations.includes("work")) {
    destinations.push("work");
    milesTD += workMiles;
    milesToDest.innerHTML = `Miles to Destination: ${milesTD}`;
  }
});

parkBtn.addEventListener("click", (event) => {
  if (parkBtn.checked == true && !destinations.includes("park")) {
    destinations.push("park");
    milesTD += parkMiles;
    milesToDest.innerHTML = `Miles to Destination: ${milesTD}`;
  }
});

storeBtn.addEventListener("click", (event) => {
  if (storeBtn.checked == true && !destinations.includes("store")) {
    destinations.push("store");
    milesTD += storeMiles;
    milesToDest.innerHTML = `Miles to Destination: ${milesTD}`;
  }
});

eateryBtn.addEventListener("click", (event) => {
  if (eateryBtn.checked == true && !destinations.includes("eatery")) {
    destinations.push("eatery");
    milesTD += eateryMiles;
    milesToDest.innerHTML = `Miles to Destination: ${milesTD}`;
  }
});

barBtn.addEventListener("click", (event) => {
  if (barBtn.checked == true && !destinations.includes("bar")) {
    destinations.push("bar");
    milesTD += barMiles;
    milesToDest.innerHTML = `Miles to Destination: ${milesTD}`;
  }
});

homeBtn.addEventListener("click", (event) => {
  if (homeBtn.checked == true && !destinations.includes("home")) {
    destinations.push("home");
    milesTD += homeMiles;
    milesToDest.innerHTML = `Miles to Destination: ${milesTD}`;
  }
});

function flashColor() {
  driveBtn.style.background = "yellow";
}

function clearColor() {
  driveBtn.style.background = "lightgreen";
}
