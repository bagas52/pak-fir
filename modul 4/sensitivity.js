// JS Sensitivity – Studi Kasus Perbedaan Huruf Kapital

// 1. Deklarasi variabel dengan perbedaan huruf kapital
var uname = "ANDREAS";
var Uname = "MAULANA";
var UNname = "CAESAR";

// Menampilkan nilai masing-masing
console.log(uname);   // Output: ANDREAS
console.log(Uname);   // Output: MAULANA
console.log(UNname);  // Output: CAESAR

// 2. Mengakses variabel dengan ejaan berbeda (akan error)
try {
  console.log(unNam); // Error: unNam is not defined
} catch (e) {
  console.warn("Error:", e.message);
}

// 3. Keyword yang benar vs salah
var angka = 5;
while (angka > 0) {  // Ini benar
  console.log("Angka saat ini: " + angka);
  angka--;
}

// 4. Keyword salah (dikomentari agar tidak error)
/*
var nomor = 3;
whIle (nomor > 0) {  // Salah penulisan, akan error
  console.log("Nomor saat ini: " + nomor);
  nomor--;
}
*/

// 5. Fungsi dengan nama mirip tapi beda kapital
function sapaUname(uname) {
  console.log("Halo, " + uname + "!");
}

function SapaUname(uname) {
  console.warn("Fungsi ini memiliki nama mirip tapi berbeda karena case.");
}

// Pemanggilan fungsi
sapaUname("ANDREAS");   // Output: Halo, !
SapaUname("MAULANA");   // Output: Peringatan di konsol

// 6. Fungsi dengan penulisan yang salah (akan error jika tidak dideklarasikan)
try {
  Sapaanuname("Cid"); // Akan error
} catch (e) {
  console.warn("Error:", e.message);
}
