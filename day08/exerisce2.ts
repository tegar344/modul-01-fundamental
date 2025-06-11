// no. 1

interface Siswa {
  name: string;
  email: string;
}

function gabunganData(data1: Siswa[], data2: Siswa[]) {
  // Arraynya digabung
  const combined = [...data1, ...data2];
  
  // Hapus duplikat
  const Students = new Map<string, Siswa>();
  
  combined.forEach(siswa => {
    if (!Students.has(siswa.email)) {
      Students.set(siswa.email, siswa);
    }
  });
  
  // Ganti value ke array
  return Array.from(Students.values());
}

let data1 = [
  { name: 'Tegar', email: 'Tegar01@mail.com' },
  { name: 'Dimas', email: 'Dimas02@mail.com' },
  { name: `Risal`, email: `Risal03@mail.com`}
];

let data2 = [
  { name: `Risal`, email: `Risal03@mail.com` },
  { name: 'Dimas', email: 'Dimas02@mail.com' },
  { name: 'Alim', email: 'Alim001@mail.com' },
  { name: `Tegar`, email: `Tegar01@mail.com`}
];

const hasilnya = gabunganData(data1, data2);
console.log(hasilnya);


// no. 2

interface Data1 {
    name: string,
    age: number,
}

interface Data2 {
    age: number,
    name: string,
}

function ngokk (contoh1: Data1[], contoh2: Data2[]){
    contoh1 = contoh2;

 return ngokk
} 

let contoh1 = [{name: `Akbar`, age: 20}];
let contoh2 = [{name: ``, age: 0}];
