// CONDITONAL STATEMENT

/** 
 * - IF STATEMENT : untuk memeriksa satu  buah kondisi 
 * - IF ... ELSE STATEMENT : unutk memeriksa dua kondisi 
 * IF... ELSE IF ...ELSE STATEMENT : untuk memeriksa tiga kondisi atau lebih 
 * SWITCH CASE STATEMENT : untuk memeriksa data dalam pencocokan nilai 
 * */

//contoh data 
let nama: string = "EDO";
let usia: number =10 ;

//IF
/** 
 * aturan penulisan :
 * if (condition)
 *   // code
 * }
 * 
 * note
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY/ FALSY/ COMPARISON/ LOGICA)
 * - code : baris program yang di ingin dijalankan condition didalam if terpunuhi (bernilai TRUE)
*/

//example : mevalidasi batas usia 
if (usia > 16) {
    console.log(`${nama}sudah dewasa`)

//IF... ELSE IF ...ELSE 
/** 
 * aturan penulisan :
 * if (condition)
 *   // code
 * }
 * 
 * note
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY/ FALSY/ COMPARISON/ LOGICA)
 * - code : baris program yang di ingin dijalankan condition didalam if terpunuhi (bernilai TRUE)
*/

// Example : klasifikaasi nilai ujian 
// INPUT
const (examGrade >=90) {
      result = "Grade A";
} else if (examGrade >= 80 && examGrade < 90) {
      result = "Grade B";
} else if (examGrade >= 70 && examGrade , 80) {
     result = "Grade C"
} else {
      result = " Grede F";


// OUTPUT 
console.log(result);


// SWITCH...CASE
/**
 * aturan penulisan 
 * switch(data){
 *    case value:
 *     //code
 *     default:
 *     //code
 * }
*/

const job: string = "coder";

switch (job) {
    case "coder": // ob === "Coder"
   console.log( "membuat aplikasi");
   break;
   case "Driver":
console.log ("mengemudi");
break:
defeluet