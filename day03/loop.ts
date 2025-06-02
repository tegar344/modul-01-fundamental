//LOOPING STATEMENT : penulisan code yang ditujukan untuk mengulang eskusi suatu program hingga kondisi tertentu

console.log("1 Edo");
console.log("2. aAbdi");
console.log("3. Andre");

/**
 * WHILE LOOP : perulangan program yang akan selalu berjaln kondisi masih terpenuhi
 * Aturan penulisan 
 * while(condition){
 *       //code 
 * };
 * condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY/ FALSY/ COMPARISON/ LOGICA)
 */


let count: number = 1;

while (count <= 10) {
console.log(count);
count++;
}

let isBoolean: boolean = true
while (isBoolean) {
    count++;
    
    if (count === 15){

    }
}

while (true){
    count++;

if (count=== 25) {
console.log(count); 25
break;
}
}

/**
 * DO...WHILE
 * Aturan penulisan 
 * do{
 *    // code
 * }while(condition)
 */

let counter: number = 1;
do{
    console.log(counter); 1
    counter++;
} while (counter < 1);

//FOR LOOP : diginakan ketika batas looping sudah ditentukan sejak awal
/**
 * for(counter_declaration;counter_condition;counter){
 *        // code
 * }
 * 
 * -counter_declaration : variabel yang mendefinisikan nilai awal dari hitngan looping
 * -counter_condition : kondisi untuk menentukan batas looping
 * -counter : proses perhitungan increment atau decrement
 */
for (let i: number = 0; i < 5; i++) {
    console.log(i)
    }



const limit = 7;
let cetak : number = "";
for (let i: number = 0; i < limit; i++) {
    if (i% 2 === 0){
        cetak += `${i} : GENAP |`;
    }else{
        cetak += `${i} : ganjil |`;
    
    }
}
console.log(cetak);