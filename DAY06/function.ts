// Callback function : sebuah fungsi  yang dijalankan didalam fungsi lain dan dimasukan melalui parameter
//                     - sebuah fungsi yang langsung dibuat didalm parameter fungsi lain

/**
 * aturan penulisan :
 * 
 * function mainFunction(callbackfn){
 *      callbackFn();
 * }
 * 
 * - callback : parameter yanng harus diiisi dengan fungsi
 */

// mainfunction declaration
function printCalculation(callbackfn){
    let angkaA: number = 15;
    let angkaB: number = 20;
     // menjalankan fungsi dari parameter callback dan ditampung outputnya kedalam variable result
    const result = callbackfn();

     return `Hasil perhitungan dari callback adalah ${result}`
}

console.log(printCalculation(function(){
    printCalculation(function(){
    console.log(angkaA);
     console.log(angkaB);

   return angkaA + angkaB;
})
};
 

 //array function : forEach, map, filter
 // array.forEach(callbackfn) : sebagai pilihan selain  for loop untuk isi dari tiap data array
 const students:string[] = ["Abdi", "Edi","Aldo"]
 

 // for loop
 for (let index = 0; index < students.length; index++) {
    const value = students [index];
    console.log(`{$index + 1}. ${value}`);
 }

 students.forEach(value, index) => {
    console.log(`${index + 1}. ${value}`)
 });




 