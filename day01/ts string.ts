//STRING : data yang berisi karakter huruf, anglka atau symbol dan ditandai dengan symbol quates 
let namaToko: string = "toko olga";
namaToko = "toko donat";

//template literal 
let alamatToko: string  = 'jl. ganteng kali surbaya '

// penggabungan data string 
// cara 1 : menggunakan penjumlahan +
let printInfo:string = namaToko + " " + alamatToko + "telp. 74326479";
console.log (printInfo)

//cara 2: template literal 
printInfo = `${namaToko} ${alamatToko} telp. 0987654`
console.log(printInfo) ; 

//fungsi bawaan tipe data string 
//string.length : menghitung panjang data string 
let message:string  = "hello";
console.log(message.length);

//string.toUpperCase () :merubah semua karakter menjadi huruf kecil 
console.log(message.toLowerCase());

//string toUpperCase : merubah semua karakter menjadi huruf kecil
console.log(message.includes("e"))