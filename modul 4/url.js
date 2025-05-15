// Ini adalah kode di dalam file url.js

document.addEventListener('DOMContentLoaded', function () {
    console.log("File script.js berhasil dimuat dan dijalankan!");
  
    const pesanElement = document.getElementById('pesan');
    if (pesanElement) {
      pesanElement.textContent = "Halo dari file JavaScript eksternal!";
    }
  });
  