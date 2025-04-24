function convert() {
    const textbox = document.getElementById("textbox");
    const toFahrenheit = document.getElementById("tofarhanit");
    const toCelsius = document.getElementById("tocelicus");
    const result = document.getElementById("result");

    const temp = parseFloat(textbox.value);

    let converted;

    if (toFahrenheit.checked) {
        converted = (temp * 9/5) + 32;
        result.textContent = `${temp}℃ is ${converted.toFixed(2)}℉`;
    } else if (toCelsius.checked) {
        converted = (temp - 32) * 5/9;
        result.textContent = `${temp}℉ is ${converted.toFixed(2)}℃`;
    } else {
        result.textContent = "Please select a unit to convert to.";
    }
}
