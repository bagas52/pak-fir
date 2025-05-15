// Menghitung volume kubus dengan variabel yang dideklarasikan menggunakan `const`
function hitungVolumeKubusConst(sisi) {
    const volume = sisi * sisi * sisi;
    console.log("Menggunakan const: Volume kubus dengan sisi " + sisi + " adalah " + volume);
    return volume;
}

// Memanggil fungsi dengan sisi 5
hitungVolumeKubusConst(5); // Output: Menggunakan const: Volume kubus dengan sisi 5 adalah 125
