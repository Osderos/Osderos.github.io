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
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer')

    const temperatureContainer = document.createElement('div');
    temperatureContainer.classList.add('temperatureContainer')

    const secondaryContainer = document.createElement("div");
    secondaryContainer.classList.add("secondaryContainer");

    const title = document.createElement("h2");
    title.classList.add("title");
    const titleIcon = document.createElement('i');
    titleIcon.classList.add('bi','bi-building');


    const temperature = document.createElement("p");
    temperature.classList.add("temperature");
    const temperatureIcon = document.createElement('i');
    temperatureIcon.classList.add('bi','bi-thermometer-half');

    const pressure = document.createElement("p");
    pressure.classList.add("secondaryItem");
    const humidity = document.createElement("p");
    pressure.classList.add("secondaryItem");
    const wind = document.createElement("p");
    pressure.classList.add("secondaryItem");

    title.textContent = `${this.cityName}`;
    temperature.innerHTML = `${this.toCelsius()} &#8451`;
    pressure.textContent = `Pressure: ${this.tommhg()} mmHg`;
    humidity.textContent = `Humidity: ${this.humidity} %`;
    wind.textContent = `Wind: ${this.wind} km/h`;

    titleContainer.append(titleIcon, title)
    temperatureContainer.append(temperatureIcon, temperature)
    secondaryContainer.append(pressure, humidity, wind);
    document
      .querySelector(".mainContainer")
      .append(titleContainer, temperatureContainer, secondaryContainer);
  }
}
