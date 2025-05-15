// Contoh penggunaan perulangan while

// Menampilkan angka dari 1 sampai 5
let i = 1;
while (i <= 5) {
    console.log(i); // Output: 1, 2, 3, 4, 5
    i++; // Increment nilai i setiap kali perulangan
}

// Menjumlahkan angka dari 1 sampai 10
let total = 0;
let j = 1;
while (j <= 10) {
    total += j; // Menambahkan nilai j ke total
    j++; // Increment nilai j setiap kali perulangan
}
console.log("Jumlah total dari 1 sampai 10 adalah:", total); // Output: 55

// Perulangan dengan kondisi yang lebih kompleks
let angka = 1;
while (angka <= 10) {
    if (angka % 2 === 0) { // Memeriksa apakah angka genap
        console.log(angka); // Output: 2, 4, 6, 8, 10
    }
    angka++;
}
