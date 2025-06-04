// Array : tipe data yang mampu menampung berbagi macam tipe data lain.
/**
 * ciri-ciri : - dibungkus oleh kurung siku, contoh : (1, 2, 3)
 *             - setiap data didalam array memiliki alamat index, yang dimulai dari index ke 0,
 * tujuan : mempermudah pengelolaan data.
 */

let siswa1: string = "Edo";
let siswa2: string = "Edi";
let siswa3: string = "Eda";

// disimpan kedalm array
const daftarSiswa: string[] =["Edo", "Edi", "Edi"];
const daftarKelas: string[] = new Array("IPA", "IPS", "BAHASA");

// cara mengakses suatu data dari array : namaVariable[index_data_yang_dipilih]
console.log(daftarSiswa[1]); 
console.log(daftarKelas);

//array destructure : untuk mengakses pada array dengan menandai tiap data menggunakan variable 
const data: any[] = ["Abdi", 20, "Sidoarjo"];
let [namaOrang, umur, asal] = data
console.log(namaOrang);
console.log(umur);
console.log(asal);

// memperbarui suatu data Array
daftarSiswa[2] = "Andre";
console.log(daftarSiswa)

//fungsi bawaan array untk mengolola data 
// array.push(newdata) : menambahkan data baru diakhir array
daftarSiswa.push("olga");
console.log(daftarSiswa);

//array.pop() : menghapus data terakhir 
daftarSiswa.pop();
console.log(daftarSiswa);

//array.unshift(newData) : menambahkan data baru diaawal array
daftarSiswa.unshift("Rafi");
console.log(daftarSiswa);

//array.shift() : mengahpus data terdepan 
daftarSiswa.shift();
console.log(daftarSiswa);

//array.length : mengetahui banya data didalam array
console.log(daftarSiswa.length);

//array.splice(pilihanIndex, jumlahDatayangDihapus, newdata?) : menghapus, memperbarui, dan data pada index
//menghapus data berdasarkan index
daftarSiswa.splice(1, 1);
console.log(daftarSiswa);

//menyisipkan data
daftarSiswa.splice(1, 0, "Edi", "Dimas", "Eli");
console.log(daftarSiswa);

//memperbarui data
daftarSiswa.splice(2, 1, "Eki");
console.log(daftarSiswa);
//soal : cetak daftar nama dengan nomor urut

//deskripsi:
//dari data array berikut:
//const daftarsiswa: string[] = ["Edo", "Edi", "Eda"];
//cetak semua nama dengan nomor urut.

//PROCESS
//1.menyiapkan penampung output dalam bentuk string 
let output: string  = "";
//2. mengakses data didalam array satu persatu 
for (let index: number = 0; index < daftarSiswa.length; index++) {
    const namaSiswa: string = daftarSiswa[index]; // menampung nilai dari tiap index daftarSiswa
    //3. memasukan data nya kedalam variable ouput
    output = output + `{index +1}. ${namaSiswa}`
}











// output yang diharapkan 
//1.Edo
//2.Edi
//3.Eda