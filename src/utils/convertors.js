const unitConvertors = (() => {
  const kelvinToCelsius = (param) => param - 273.15;
  const celsiusToFahrenheit = (param) => (param * 9) / 5 + 32;
  const atmToMMhg = (param) => param*760;
  return {
    kelvinToCelsius,
    celsiusToFahrenheit,
    atmToMMhg
  };
})();

export { unitConvertors}
