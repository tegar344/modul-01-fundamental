// Function
/**
 * denifisi :  sekumpulan program yang disatukan untuk mengerjakan prosess khusus yang biasa nya bersifat reusable.
 * katagori : built-in function dan user-definend function
 * aturan penulisan : 
 * -penamaan function mengikuti aturan nama variable 
 * -bisa menerima parameter/argumen : penampung dari function menerima nilai dari luar function
 * -function biasanya menghasilkan nilai output melalui keyword return  didilamnya
 * -opsi penulisan bisa mengunakan declarative func, function expression atau arrow function 
 */


//contoh tanpa function
//INPUT : dua variable yang menampung data untuk dijumlahkan
let angkaA: number = 10;
let angkaB: number = 13; 
//PROCESS : memproses penjumlahan kedua variable 
const hasil: number = angkaA + angkaB;
//OUTPUT : menampilkan hasil penjumlahn
console.log(hasil);

//buat code di atas menjadi declarative function
/**
 * declarative func :
 * function namafunc(param1, param2,...){
 *    //code
 * }
 */
//membuat function

function penjumlahan() {
     let angkaA: number = 2;
     let angkaB: number = 5;

     const hasil: number = angkaA + angkaB;

     return hasil;
}

let printPenjumlahan = penjumlahan(); 
console.log(printPenjumlahan);

console.log(penjumlahan());

//Function with parameter for reusable

function pengurangan(angkaA: number, angkaB: number) {
   const hasil : number = angkaA - angkaB;
   return hasil;
}

console.log(pengurangan(10,20));
console.log(pengurangan(8, 5));
console.log(pengurangan(10, 5));