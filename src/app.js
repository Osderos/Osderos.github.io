import { Weather } from "./models/weather.js";
import { getData, saveData } from "./utils/api.js";
import { reset } from "./DOM/reset.js";

const submitBtn = document.querySelector("#submitBtn");
const userInput = document.querySelector("#city");
const submitForm = document.querySelector("form");

submitForm.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", async () => {

  const city = userInput.value;
  const data = await getData(city);
  const savedData = await saveData(data);
  const weather = new Weather(
    savedData.cityName,
    savedData.temperature,
    savedData.humidity,
    savedData.pressure,
    savedData.wind
  );
  weather.weatherTabCreator();
  console.log(weather);

});
