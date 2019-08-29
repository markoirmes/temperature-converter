let kelvin;
let celsius;
let fahrenheit;
const tempList = document.getElementById("temps");
const tempInput = document.getElementById("tempInput");
const kelvinText = document.getElementById("kelvinText");
const fahrenheitText = document.getElementById("fahrenheitText");
const celsiusText = document.getElementById("celsiusText");
const result = document.getElementById("result");

/* validate */
function validate() {
  if (tempInput.value < 0) {
    tempInput.value = 0;
  }
  calculateTemperature();
}

/* calculate the temperature and display the result */

function calculateTemperature() {
  if (tempList.value === "Kelvin") {
    kelvin = Math.round(tempInput.value);
    celsius = kelvin - 273;
    fahrenheit = Math.round(celsius * (9 / 5) + 32);
  } else if (tempList.value === "Celsius") {
    celsius = Math.round(tempInput.value);
    kelvin = celsius + 273;
    fahrenheit = Math.round(celsius * (9 / 5) + 32);
  } else {
    fahrenheit = Math.round(tempInput.value);
    celsius = Math.round((fahrenheit - 32) * 0.5556);
    kelvin = celsius + 273;
  }

  kelvinText.innerHTML = `Kelvin: ${kelvin}`;
  fahrenheitText.innerHTML = `Fahrenheit: ${fahrenheit}`;
  celsiusText.innerHTML = `Celsius: ${celsius}`;

  const therm = celsius;

  if (therm <= 20) {
    document.getElementsByClassName("thermometer")[0].className =
      "thermometer navyblue";
  } else if (therm >= 21 && therm <= 40) {
    document.getElementsByClassName("thermometer")[0].className =
      "thermometer lightblue";
  } else if (therm >= 41 && therm <= 60) {
    document.getElementsByClassName("thermometer")[0].className =
      "thermometer yellow";
  } else if (therm >= 61 && therm <= 80) {
    document.getElementsByClassName("thermometer")[0].className =
      "thermometer orange";
  } else {
    document.getElementsByClassName("thermometer")[0].className =
      "thermometer red";
  }

  if (therm <= 0) {
    result.innerHTML = "The water will FREEZE!";
  } else if (therm >= 100) {
    result.innerHTML = "The water will BOIL!";
  } else {
    result.innerHTML = "The water will be in liquid state!";
  }

  /* change value of the meter bar */
  document.getElementById("thermometerBar").setAttribute("value", `${kelvin}`);
}
