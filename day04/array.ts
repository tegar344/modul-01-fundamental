// Array : tipe data yang mampu menampung berbagai macam tipe data lain.
/**
 * Ciri-ciri : - Dibungkus oleh kurung siku, contoh : [1, 2, 3]
 *             - Setiap data didalam array memiliki alamat index, yang dimulai dari index ke 0.
 * Tujuan : Mempermudah pengelolaan data.
 */

let siswa1: string = "Edo";
let siswa2: string = "Edi";
let siswa3: string = "Eda";

// Disimpan dalam bentuk array
const daftarSiswa: string[] = ["Edo", "Edi", "Eda"];
const daftarKelas: string[] = new Array("IPA", "IPS", "BAHASA");

// Cara mengakses suatu data dari array : namaVariable[index_data_yang_dipilih]
console.log(daftarSiswa[1]);
console.log(daftarKelas);

// Array destructure : mengakses data pada array dengan menandai tiap data menggunakan variable
const data: any[] = ["Abdi", 20, "Sidoarjo"];
let [namaOrang, umur, asal] = data;
console.log(namaOrang);
console.log(umur);
console.log(asal);

// Memperbarui suatu data array
daftarSiswa[2] = "Andre";
console.log(daftarSiswa);

// Fungsi bawaan array untuk mengelola data
// array.push(newData) : menambahkan data baru diakhir array
daftarSiswa.push("Olga");
console.log(daftarSiswa);

// array.pop() : menghapus data terakhir
daftarSiswa.pop();
console.log(daftarSiswa);

// array.unshift(newData) : menambahkan data baru diawal array
daftarSiswa.unshift("Rafi");
console.log(daftarSiswa);

// array.shift() : menghapus data terdepan
daftarSiswa.shift();
console.log(daftarSiswa);

// array.length : mengetahui banyak data didalam array
console.log(daftarSiswa.length);

// array.splice(pilihanIndex, jumlahDataYangDihapus, newData?) : menghapus, memperbarui dan menyisipkan data baru pada index yang dipilih
// Menghapus data berdasarkan index
daftarSiswa.splice(1, 1);
console.log(daftarSiswa);

// Menyisipkan data
daftarSiswa.splice(1, 0, "Edi", "Dimas", "El");
console.log(daftarSiswa);

// Memperbarui data
daftarSiswa.splice(2, 1, "Eki");

// Soal: Cetak Daftar Nama Siswa dengan Nomor Urut

// Deskripsi:
// Dari data array berikut:
// const daftarSiswa: string[] = ["Edo", "Edi", "Eda"];
// Cetak semua nama dengan nomor urut.

// PROCESS
// 1. Menyiapkan penampung output dalam bentuk string
let output: string = "";
// 2. Mengakses data didalam array satu per satu
for (let index: number = 0; index < daftarSiswa.length; index++) {
  const namaSiswa: string = daftarSiswa[index]; // menampung nilai dari tiap index daftarSiswa
  // 3. Memasukkan datanya kedalam variable output
  output = output + `${index + 1}. ${namaSiswa} \n`;
}

// ✅ Output yang Diharapkan:
// 1. Edo
// 2. Edi
// 3. Eda
console.log(output);