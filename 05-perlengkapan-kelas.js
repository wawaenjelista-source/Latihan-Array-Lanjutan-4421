// Daftar perlengkapan kelas
const daftarBarang = [
    "Buku Tulis",
    "Pensil",
    "Penghapus",
    "Spidol"
];

console.log("=== PERLENGKAPAN KELAS ===");

// Menampilkan daftar awal
console.log("Daftar barang awal:", daftarBarang);

// Menambahkan barang baru
const barangBaru = "Pulpen";

if (barangBaru !== "" && barangBaru.trim() !== "") {
    daftarBarang.push(barangBaru);
    console.log("Setelah menambahkan barang:", daftarBarang);
} else {
    console.log("Nama barang tidak boleh kosong!");
}

// Mencari barang
const barangDicari = "Penghapus";

if (daftarBarang.includes(barangDicari)) {
    console.log(
        barangDicari + " ditemukan pada indeks:",
        daftarBarang.indexOf(barangDicari)
    );
} else {
    console.log(barangDicari + " tidak ditemukan.");
}

// Menghapus barang
const barangDihapus = "Spidol";
const indeksHapus = daftarBarang.indexOf(barangDihapus);

if (indeksHapus !== -1) {
    daftarBarang.splice(indeksHapus, 1);
    console.log("Setelah menghapus barang:", daftarBarang);
} else {
    console.log("Barang yang ingin dihapus tidak ditemukan.");
}

// Menampilkan daftar akhir
console.log("Daftar barang akhir:");

for (const barang of daftarBarang) {
    console.log("- " + barang);
}

// Menampilkan jumlah barang
console.log("Jumlah barang:", daftarBarang.length);

// Memeriksa apakah daftar kosong
if (daftarBarang.length === 0) {
    console.log("Daftar barang kosong.");
} else {
    console.log("Daftar barang masih tersedia.");
}