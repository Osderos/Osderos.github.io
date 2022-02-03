import { unitConvertors } from "../utils/convertors.js";

export class Weather {
  constructor(cityName, temperature, humidity, pressure, wind) {
    this.cityName = cityName;
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.wind = wind;
  }

  toCelsius() {
    return (
      Math.round(unitConvertors.kelvinToCelsius(this.temperature) * 10) / 10
    );
  }

  tommhg() {
    return Math.round(unitConvertors.atmToMMhg(this.pressure) / 1000);
  }

  weatherTabCreator() {
    const mainContainer = document.createElement("div");
    const secondaryContainer = document.createElement("div");
    const title = document.createElement("h2");
    const temperature = document.createElement("p");
    const pressure = document.createElement("p");
    const humidity = document.createElement("p");
    const wind = document.createElement("p");

    mainContainer.classList.add('mainContainer')

    title.textContent = `City: ${this.cityName}`;
    temperature.innerHTML = `${this.toCelsius()} &#8451`;
    pressure.textContent = `Pressure: ${this.tommhg()} mmHg`;
    humidity.textContent = `Humidity: ${this.humidity} %`;
    wind.textContent = `Wind: ${this.wind} km/h`;

    secondaryContainer.append(pressure, humidity, wind);
    mainContainer.append(title, temperature, secondaryContainer);
    document.querySelector("body").appendChild(mainContainer);
  }
}
