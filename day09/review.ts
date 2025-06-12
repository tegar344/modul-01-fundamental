/**
 * kisi kisi exam mnodul 01 :
 -Introduction programing
 -Data type (primitive, Non-primitive)
 -var, let dan const
 -Introduction Ts
 -Looping statement
 -Interface and Objeck declaration
 -function hoisting
 - encapsulation
 -data structure
 -Big O Notation
 */

 // Variable : penampung data

 /**
  * Rumus penulisan variable ==> keywordVariable = value;
  * keywordVariable : var, let, const
  * namaVariable : -Tidak boleh diawali angka
  *                -Boleh diawali simbol _ atau $
  *                - jika terdiri dari satu suku kata harus digabung dengan metode camelcase
  */

 // Karakter keyword variable
 // keyword var : redeclare, ressign, global variable
 var nama : string = "Tegar";
 var nama: string = "Abdi";


 // Reassign
 nama = "Aldo"

 // keyword let : non-redeclare, reassign, block-scoped variable
 //non-redeclare
 let usia: number = 20;
 //let usia: number = 15;

 //reassign
 usia = 40;

 //Contoh block-scoped variable

 function introduce() {
    let usia: number = 15;
    return `Usiaku ${usia}`
 }

 // keyword const : Non-redeclare, non-reassign, constant variable
 const PI = Math.PI;
 const listAngka: number[] = [2, 3, 4, 5, 2, 6, 3, 4];
 interface IHuman{
    nama: string,
    tglLahir: string,
    gender: "Pria"|"Wanita";
 }
 const human: IHuman = {
    nama: "Tegar",
    tglLahir: "2000-12-03",
    gender: "Pria",
 };


 //Looping statement : penulisan code yang ditunjukan untuk mengulang eksekusi suatu code

 /**
  * WHILE LOOP : perulangan program yang akan selalu dijalankan selama kondisi masih terpenuhi
  * Aturan penulisan :
  * while(condition){
  *     //code
  * }
  */


 let count:number=1;


 while(count < 10) {
    console.log(`Loope ke-${count}`);
    count++;
    
 }


 while (true) {
    let random: number = Math.random();
    console.log(random);
    if (random < 0,25) {
        break;

    }
 }


 /**
  * DO...WHILE
  * Aturan penulsan :
  * do{
  *     //code
  * }while(condition)
  */

 let counter: number = 2;
 do{
console.log(counter);
counter++;
 }while(counter<10)

    

 /**
  * FOR LOOP : digunakan ketika batas looping ditentukan sejak awal
  * Aturan penulisan
  * for(counterDeclaration ; counter_condition ;counter){
  *   //code
  * } */   

 for (let i: number = 1; i < 10; i++) {
    console.log(i);
 }


// for...in : looping yang berkaitan dengan tipe data objeck
for (const property in human) {
    console.log(property);
    console.log(human[property]);
}


console.log(human.nama);
console.log(human["nama"])

//for...of : looping yang berhubungan dengan akses velue data array
const listProduct: string[] = ["topi", "baju", "kaos", "bahan"]
for (const value of listProduct) {
    console.log(value);
}


//Array : tipe data yang mampu menampung berbagai macam tipe data lain
/**
 * CIRI - CIRI : - data yang disimpan kedalam array akan dibungkus kurung siku, contoh : [1, 2, 3]
 *               - setiap data yang disimpan didalam array, akan memiliki alamat index yang dimulai dan
 * 
 * 
 */


const listNamaSiswa: string[] = ["tegar", " Abdi"];

interface ISiswa {
    nama: string;
    kelas: "IPA" | "IPS" 

}

const listSiswa: ISiswa[] = [
    {
        nis: "0987654321",
        nama: "tegar",
        kelas:"IPA",
    },
    {
        nis: "1234567890",
        nama: "Abdi",
        kelas:"IPS",
    },
];

console.log(`${listSiswa[0]}`);

//JSON
const stringObjeck = `${JSON.stringify(listSiswa[0])}`
console.log(typeof stringObjeck);
console.log(stringObjeck);
console.log(JSON.parse(stringObjeck));

//function : cara untuk menyatukan sekumpulan program yang ditujukan untuk menyelesaikan tugas khusus
/**
 * Aturan penerapan :
 * - function harus tersedia lebih dulu
 * -penamaan function mengikuti auturan penamaan variable
 * - secara opsional menerima parameter/argumen : penampung data dari function untuk menerima 
 data dari luar function
 * - function secara opsional bisa menghasilkan output melalui keyword return didalamnya
 * - opsi penulisan function ada tiga : Declarative func, func. Expression dan Arrow function
 * 
 */

 /**
  * Declarative function
  * function namaFunc( namam1?, param2?....) {
  *   //code 
  * }
  */

console.log(penjumlahan());

 function penjumlahan(): number {
    let angkaA: number = 2;
    let angkaB: number = 3;

    const result: number = angkaA + angkaB;

    return result;
 }

 console.log(penjumlahan());

 function penjumlahanB(angkaA: number, angkaB: number) {
    const result: number = angkaA - angkaB;
    return result;
 }


 console.log(penjumlahanB(2,3));
 console.log(penjumlahanB(5,3));
 console.log(penjumlahanB(10,3))

 /**
  * Function expression :
* const namaFunc = function( namam1?, param2?....) = {
*    //code
* } 
  */
 const pengurangan = function (angkaA: number, angkaB: number): number {
    const result: number = angkaA + angkaB;

    return result;
 };
//console.log(pengurangan());

 /**
  * Arrow function : 
  * const namaFunc = ( namam1?, param2?....) => {
  *     //code
  * }
  */

 const perkalian = () => {
    let angkaA: number = 10;
    let angkaB: number = 20;

    const result: number = angkaA * angkaB;

    return result;
 };

 const perkalianB = (angkaA: number, angkaB: number) => angkaA * angkaB;

 console.log(perkalianB(10, 20));
 console.log(perkalianB(15, 2));