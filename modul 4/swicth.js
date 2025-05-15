// Contoh percabangan switch
let hari = "Senin";

switch (hari) {
    case "Senin":
        console.log("Hari ini kamu harus semangat kerja!");
        break;
    case "Selasa":
        console.log("Tetap semangat, minggu masih panjang.");
        break;
    case "Rabu":
        console.log("Sudah di tengah minggu, tetap fokus!");
        break;
    case "Kamis":
        console.log("Hampir sampai di akhir minggu!");
        break;
    case "Jumat":
        console.log("Hari terakhir kerja, semangat!");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Waktunya istirahat, selamat libur!");
        break;
    default:
        console.log("Hari tidak dikenali.");
}
