import { Weather } from "./models/weather.js";
import { getData, saveData } from "./utils/api.js";
import { reset } from "./DOM/reset.js";

const submitBtn = document.querySelector("#submitBtn");
const userInput = document.querySelector("#city");
const submitForm = document.querySelector("form");
const eraseBtn = document.querySelector("i");
const errorContainer = document.querySelector("#errorContainer");

submitForm.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", async () => {
  errorContainer.style.display = "none";
  reset.containerReset();
  // reset.inputReset()
  const city = userInput.value;
  const data = await getData(city);
  console.log(data);
  const savedData = await saveData(data);
  const weather = new Weather(
    savedData.cityName,
    savedData.temperature,
    savedData.humidity,
    savedData.pressure,
    savedData.wind
  );
  weather.weatherTabCreator();

  // console.log(weather);
});

eraseBtn.addEventListener("click", reset.inputReset);
