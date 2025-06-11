// duplikasi cara kerja array.forEach

function duplicateForEach(arrayData: any [], callbackfn) {
// isi code ? 
for (let index = 0; index < arrayData.length; index++){
  const value = arrayData[index];
  callbackfn(value, index);
}
}


duplicateForEach(students, (value: any,  index: number){
  console.log(`${index + 1}. ${value}`); //result 
});



//array.map(callbackfn): untuk merubah seluruh data array menjadi data array yang baru
//[1, 2, 3,] --> [2, 4, 6]
//["1. Abdi", "2.Edo", "3. Aldo"] -->["1. Abdi", "2.Edo", "3. Aldo"]
//["1. Abdi", "2.Edo", "3. Aldo"] -->["1. Nama Saya Abdi", "2.Nama SayaEdo", "3.Nama Saya Aldo"]
//[1, 2, 3,] --> ["1", "2", "3"]