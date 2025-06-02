// 1. Cek Ganjil atau Genap
let angka1 = 25;
console.log(angka1 % 2 === 0 ? `${angka1} adalah bilangan genap` : `${angka1} adalah bilangan ganjil`);

// 2. Cek Bilangan Prima
let angka2 = 77;
let isPrima = true;
if (angka2 < 2) isPrima = false;
for (let i = 2; i <= Math.sqrt(angka2); i++) {
  if (angka2 % i === 0) {
    isPrima = false;
    break;
  }
}
console.log(`${angka2} ${isPrima ? 'adalah' : 'bukan'} bilangan prima`);

// 3. Jumlah Angka dari 1 sampai N
let n1 = 5;
let jumlah = 0;
for (let i = 1; i <= n1; i++) jumlah += i;
console.log(`Jumlah dari 1 sampai ${n1} adalah ${jumlah}`);

// 4. Faktorial
let n2 = 4;
let faktorial = 1;
for (let i = 1; i <= n2; i++) faktorial *= i;
console.log(`${n2}! = ${faktorial}`);

// 5. Cetak N Angka Fibonacci Pertama
let n3 = 10;
let a = 0, b = 1;
let hasilFibo: number[] = [];
for (let i = 0; i < n3; i++) {
  hasilFibo.push(a);
  [a, b] = [b, a + b];
}
console.log(`Fibonacci ${n3} angka pertama: ${hasilFibo.join(', ')}`);
