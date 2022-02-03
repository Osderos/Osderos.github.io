async function getData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ca62add80865f4d66b5e5e35fae6a2ce`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function saveData(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const wind = data.wind.speed;
  return { cityName, temperature, humidity, pressure, wind };
}

export {getData, saveData}
