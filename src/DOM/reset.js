const reset = (() => {
  const inputReset = () => (document.querySelector("#city").value = "");
  const containerReset = () =>
    (document.querySelector(".mainContainer").innerHTML = "");
  return {
    inputReset,
    containerReset,
  };
})();

export { reset };
