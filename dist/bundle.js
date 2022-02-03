/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM/errors.js":
/*!***************************!*\
  !*** ./src/DOM/errors.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nonCity": () => (/* binding */ nonCity)
/* harmony export */ });
const nonCity = () => {
  document.querySelector("#errorContainer").style.display = "block";
};


/***/ }),

/***/ "./src/DOM/reset.js":
/*!**************************!*\
  !*** ./src/DOM/reset.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
const reset = (() => {
  const inputReset = () => (document.querySelector("#city").value = "");
  const containerReset = () =>
    (document.querySelector(".mainContainer").innerHTML = "");
  return {
    inputReset,
    containerReset,
  };
})();




/***/ }),

/***/ "./src/models/weather.js":
/*!*******************************!*\
  !*** ./src/models/weather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weather": () => (/* binding */ Weather)
/* harmony export */ });
/* harmony import */ var _utils_convertors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/convertors.js */ "./src/utils/convertors.js");


class Weather {
  constructor(cityName, temperature, humidity, pressure, wind) {
    this.cityName = cityName;
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.wind = wind;
  }

  toCelsius() {
    return (
      Math.round(_utils_convertors_js__WEBPACK_IMPORTED_MODULE_0__.unitConvertors.kelvinToCelsius(this.temperature) * 10) / 10
    );
  }

  tommhg() {
    return Math.round(_utils_convertors_js__WEBPACK_IMPORTED_MODULE_0__.unitConvertors.atmToMMhg(this.pressure) / 1000);
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


/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "saveData": () => (/* binding */ saveData)
/* harmony export */ });
/* harmony import */ var _DOM_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/errors.js */ "./src/DOM/errors.js");


async function getData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ca62add80865f4d66b5e5e35fae6a2ce`,
      { mode: "cors" }
    );
    console.log(response.status);
    if (!response.ok) {
      (0,_DOM_errors_js__WEBPACK_IMPORTED_MODULE_0__.nonCity)();
      throw new Error(`${city} not found`);
    }
    const data = await response.json();

    return data;
  } catch (err) {
    return null;
  }
}

function saveData(data) {
  if (data === null) {
    return false;
  } else {
    const cityName = data.name;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const wind = data.wind.speed;
    return { cityName, temperature, humidity, pressure, wind };
  }
}




/***/ }),

/***/ "./src/utils/convertors.js":
/*!*********************************!*\
  !*** ./src/utils/convertors.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unitConvertors": () => (/* binding */ unitConvertors)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/weather.js */ "./src/models/weather.js");
/* harmony import */ var _utils_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/api.js */ "./src/utils/api.js");
/* harmony import */ var _DOM_reset_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/reset.js */ "./src/DOM/reset.js");




const submitBtn = document.querySelector("#submitBtn");
const userInput = document.querySelector("#city");
const submitForm = document.querySelector("form");
const eraseBtn = document.querySelector("i");
const errorContainer = document.querySelector("#errorContainer");

submitForm.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", async () => {
  errorContainer.style.display = "none";
  _DOM_reset_js__WEBPACK_IMPORTED_MODULE_2__.reset.containerReset();
  // reset.inputReset()
  const city = userInput.value;
  const data = await (0,_utils_api_js__WEBPACK_IMPORTED_MODULE_1__.getData)(city);
  console.log(data);
  const savedData = await (0,_utils_api_js__WEBPACK_IMPORTED_MODULE_1__.saveData)(data);
  const weather = new _models_weather_js__WEBPACK_IMPORTED_MODULE_0__.Weather(
    savedData.cityName,
    savedData.temperature,
    savedData.humidity,
    savedData.pressure,
    savedData.wind
  );
  weather.weatherTabCreator();

  // console.log(weather);
});

eraseBtn.addEventListener("click", _DOM_reset_js__WEBPACK_IMPORTED_MODULE_2__.reset.inputReset);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdUM7O0FBRWpEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixnRkFBOEI7QUFDL0M7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwRUFBd0I7QUFDOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixjQUFjO0FBQ3pDLCtCQUErQixrQkFBa0I7QUFDakQsd0NBQXdDLGVBQWU7QUFDdkQsd0NBQXdDLGVBQWU7QUFDdkQsZ0NBQWdDLFdBQVc7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUQyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELEtBQUs7QUFDaEUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQU87QUFDYix5QkFBeUIsTUFBTTtBQUMvQjtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7O0FDbEM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUV1Qjs7Ozs7OztVQ1h4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDSztBQUNaOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLCtEQUFvQjtBQUN0QjtBQUNBO0FBQ0EscUJBQXFCLHNEQUFPO0FBQzVCO0FBQ0EsMEJBQTBCLHVEQUFRO0FBQ2xDLHNCQUFzQix1REFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsbUNBQW1DLDJEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvRE9NL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL0RPTS9yZXNldC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdXRpbHMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdXRpbHMvY29udmVydG9ycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5vbkNpdHkgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JDb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn07XG4iLCJjb25zdCByZXNldCA9ICgoKSA9PiB7XG4gIGNvbnN0IGlucHV0UmVzZXQgPSAoKSA9PiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpLnZhbHVlID0gXCJcIik7XG4gIGNvbnN0IGNvbnRhaW5lclJlc2V0ID0gKCkgPT5cbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCIpO1xuICByZXR1cm4ge1xuICAgIGlucHV0UmVzZXQsXG4gICAgY29udGFpbmVyUmVzZXQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyByZXNldCB9O1xuIiwiaW1wb3J0IHsgdW5pdENvbnZlcnRvcnMgfSBmcm9tIFwiLi4vdXRpbHMvY29udmVydG9ycy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgV2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGNpdHlOYW1lLCB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIHByZXNzdXJlLCB3aW5kKSB7XG4gICAgdGhpcy5jaXR5TmFtZSA9IGNpdHlOYW1lO1xuICAgIHRoaXMudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICAgIHRoaXMud2luZCA9IHdpbmQ7XG4gIH1cblxuICB0b0NlbHNpdXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIE1hdGgucm91bmQodW5pdENvbnZlcnRvcnMua2VsdmluVG9DZWxzaXVzKHRoaXMudGVtcGVyYXR1cmUpICogMTApIC8gMTBcbiAgICApO1xuICB9XG5cbiAgdG9tbWhnKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHVuaXRDb252ZXJ0b3JzLmF0bVRvTU1oZyh0aGlzLnByZXNzdXJlKSAvIDEwMDApO1xuICB9XG5cbiAgd2VhdGhlclRhYkNyZWF0b3IoKSB7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aXRsZUNvbnRhaW5lcicpXG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBlcmF0dXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlQ29udGFpbmVyJylcblxuICAgIGNvbnN0IHNlY29uZGFyeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2Vjb25kYXJ5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRhcnlDb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgY29uc3QgdGl0bGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHRpdGxlSWNvbi5jbGFzc0xpc3QuYWRkKCdiaScsJ2JpLWJ1aWxkaW5nJyk7XG5cblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlXCIpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICB0ZW1wZXJhdHVyZUljb24uY2xhc3NMaXN0LmFkZCgnYmknLCdiaS10aGVybW9tZXRlci1oYWxmJyk7XG5cbiAgICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByZXNzdXJlLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRhcnlJdGVtXCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJlc3N1cmUuY2xhc3NMaXN0LmFkZChcInNlY29uZGFyeUl0ZW1cIik7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByZXNzdXJlLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRhcnlJdGVtXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNpdHlOYW1lfWA7XG4gICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7dGhpcy50b0NlbHNpdXMoKX0gJiM4NDUxYDtcbiAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHt0aGlzLnRvbW1oZygpfSBtbUhnYDtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt0aGlzLmh1bWlkaXR5fSAlYDtcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7dGhpcy53aW5kfSBrbS9oYDtcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZCh0aXRsZUljb24sIHRpdGxlKVxuICAgIHRlbXBlcmF0dXJlQ29udGFpbmVyLmFwcGVuZCh0ZW1wZXJhdHVyZUljb24sIHRlbXBlcmF0dXJlKVxuICAgIHNlY29uZGFyeUNvbnRhaW5lci5hcHBlbmQocHJlc3N1cmUsIGh1bWlkaXR5LCB3aW5kKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRhaW5lclwiKVxuICAgICAgLmFwcGVuZCh0aXRsZUNvbnRhaW5lciwgdGVtcGVyYXR1cmVDb250YWluZXIsIHNlY29uZGFyeUNvbnRhaW5lcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IG5vbkNpdHkgfSBmcm9tIFwiLi4vRE9NL2Vycm9ycy5qc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD1jYTYyYWRkODA4NjVmNGQ2NmI1ZTVlMzVmYWU2YTJjZWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgbm9uQ2l0eSgpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NpdHl9IG5vdCBmb3VuZGApO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVEYXRhKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkYXRhLm5hbWU7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXRhLm1haW4udGVtcDtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRhdGEubWFpbi5odW1pZGl0eTtcbiAgICBjb25zdCBwcmVzc3VyZSA9IGRhdGEubWFpbi5wcmVzc3VyZTtcbiAgICBjb25zdCB3aW5kID0gZGF0YS53aW5kLnNwZWVkO1xuICAgIHJldHVybiB7IGNpdHlOYW1lLCB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIHByZXNzdXJlLCB3aW5kIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0RGF0YSwgc2F2ZURhdGEgfTtcbiIsImNvbnN0IHVuaXRDb252ZXJ0b3JzID0gKCgpID0+IHtcbiAgY29uc3Qga2VsdmluVG9DZWxzaXVzID0gKHBhcmFtKSA9PiBwYXJhbSAtIDI3My4xNTtcbiAgY29uc3QgY2Vsc2l1c1RvRmFocmVuaGVpdCA9IChwYXJhbSkgPT4gKHBhcmFtICogOSkgLyA1ICsgMzI7XG4gIGNvbnN0IGF0bVRvTU1oZyA9IChwYXJhbSkgPT4gcGFyYW0qNzYwO1xuICByZXR1cm4ge1xuICAgIGtlbHZpblRvQ2Vsc2l1cyxcbiAgICBjZWxzaXVzVG9GYWhyZW5oZWl0LFxuICAgIGF0bVRvTU1oZ1xuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgdW5pdENvbnZlcnRvcnN9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFdlYXRoZXIgfSBmcm9tIFwiLi9tb2RlbHMvd2VhdGhlci5qc1wiO1xuaW1wb3J0IHsgZ2V0RGF0YSwgc2F2ZURhdGEgfSBmcm9tIFwiLi91dGlscy9hcGkuanNcIjtcbmltcG9ydCB7IHJlc2V0IH0gZnJvbSBcIi4vRE9NL3Jlc2V0LmpzXCI7XG5cbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnRuXCIpO1xuY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpO1xuY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgZXJhc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaVwiKTtcbmNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvckNvbnRhaW5lclwiKTtcblxuc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgZXJyb3JDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICByZXNldC5jb250YWluZXJSZXNldCgpO1xuICAvLyByZXNldC5pbnB1dFJlc2V0KClcbiAgY29uc3QgY2l0eSA9IHVzZXJJbnB1dC52YWx1ZTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoY2l0eSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zdCBzYXZlZERhdGEgPSBhd2FpdCBzYXZlRGF0YShkYXRhKTtcbiAgY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyKFxuICAgIHNhdmVkRGF0YS5jaXR5TmFtZSxcbiAgICBzYXZlZERhdGEudGVtcGVyYXR1cmUsXG4gICAgc2F2ZWREYXRhLmh1bWlkaXR5LFxuICAgIHNhdmVkRGF0YS5wcmVzc3VyZSxcbiAgICBzYXZlZERhdGEud2luZFxuICApO1xuICB3ZWF0aGVyLndlYXRoZXJUYWJDcmVhdG9yKCk7XG5cbiAgLy8gY29uc29sZS5sb2cod2VhdGhlcik7XG59KTtcblxuZXJhc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0LmlucHV0UmVzZXQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9