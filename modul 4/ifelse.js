// Contoh penggunaan percabangan if, if...else, dan else

let nilai = 75;

// Menggunakan if
if (nilai >= 90) {
    console.log("Nilai kamu A");
}

// Menggunakan if...else
if (nilai >= 70) {
    console.log("Kamu lulus");
} else {
    console.log("Kamu tidak lulus");
}

// Menggunakan if...else if...else
if (nilai >= 90) {
    console.log("Predikat: Sangat Baik");
} else if (nilai >= 80) {
    console.log("Predikat: Baik");
} else if (nilai >= 70) {
    console.log("Predikat: Cukup");
} else {
    console.log("Predikat: Kurang");
}
