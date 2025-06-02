// BOOLEAN : data yang bernilai benar (true) atau salah (false)
let isActive: boolean = true;
let isDeleted: boolean = false;

//menghasilkan nilai boolean
//1. berdasarkan tipe datablain
// TRUTTHLY
// FALSY
console.log(Boolean("ABC"));
console.log(Boolean("m"));
console.log(Boolean(12));

//FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined);
console.log(Boolean(null));

//2. comporison operator : >, <, >=, <==, ==, ===
let valueA: number = 12;
let valueB: number = 15;

console.log(valueA < valueB);
console.log(valueA > valueB);
console.log(valueA >= 12);
console.log(valueB <=14);
console.log(valueB != 14);
// console.log(valueB ==="15");

//3.logica operator : AND (&&), or (||), NOT (!)
// AND : akan menghsailkan nilai TRUE jika antar juga bernilai true 
console.log(Boolean("ABC") && Boolean(2));
console.log(valueA === 12 && valueB === 15);
console.log(valueA === 10 && valueB === 1);

// OR : akan menghasilkan nilai TRUE jika salah 