const wavelengthSlider = document.getElementById("wavelength");
const wavelengthValue = document.getElementById("wavelengthValue");

function updateWavelengthValue() {
  wavelengthValue.value = `${wavelengthSlider.value} nm`;
}

wavelengthSlider.addEventListener("input", updateWavelengthValue);
updateWavelengthValue();
