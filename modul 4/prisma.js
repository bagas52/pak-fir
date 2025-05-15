const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(length) || length <= 0) {
    resultDiv.textContent = 'Masukkan panjang yang valid dan lebih besar dari 0.';
    return;
  }
  if (isNaN(width) || width <= 0) {
    resultDiv.textContent = 'Masukkan lebar yang valid dan lebih besar dari 0.';
    return;
  }
  if (isNaN(height) || height <= 0) {
    resultDiv.textContent = 'Masukkan tinggi yang valid dan lebih besar dari 0.';
    return;
  }

  // Calculate volume and surface area
  const volume = length * width * height;
  const surfaceArea = 2 * (length*width + width*height + height*length);

  resultDiv.innerHTML =
    `Volume: <strong>${volume.toFixed(2)}</strong> cm³<br>` +
    `Luas Permukaan: <strong>${surfaceArea.toFixed(2)}</strong> cm²`;
});
