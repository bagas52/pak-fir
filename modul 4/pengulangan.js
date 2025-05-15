// Contoh penggunaan perulangan for

// Menampilkan angka dari 1 sampai 5
for (let i = 1; i <= 5; i++) {
    console.log(i); // Output: 1, 2, 3, 4, 5
}

// Menjumlahkan angka dari 1 sampai 10
let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i; // Menambahkan nilai i ke total
}
console.log("Jumlah total dari 1 sampai 10 adalah:", total); // Output: 55

// Perulangan dengan array
let buah = ["Apel", "Jeruk", "Pisang", "Mangga"];
for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]); // Output: Apel, Jeruk, Pisang, Mangga
}
