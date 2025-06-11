// Membuat Object secara langsung
// contoh 1 : membuat objek hewan peliharaan
const pet = {
    name: 'Buddy',
    species: 'Dog',
    age: 4,
    vaccinated: true,
    favoriteToy: 'Ball'
}

// cara akses value property dari objek pet
// console.log("Ambil property name dari pet : ", pet.name)
// console.log("Ambil property favorite toy dari pet : ", pet.favoriteToy)

// Membuat Object dengan method new Object
const idCard: any = new Object()
idCard.name = 'Budi'
idCard.age = 30
idCard.gender = 'Male'

// console.log('isi dari idCard : ', idCard)

// Membuat Object dalam bentuk function
function createStudent(name: string, grade: number) {
    return {
        name: name,
        grade: grade
    }
}
const student = createStudent("Budi", 10)
// console.log("hasil dari student : ", student)

// Membuat Object dengan method Object.assign
const employee = Object.assign({}, { name: 'Bob', role: 'Supervisor' })
// console.log("informasi dari employee : ", employee)


// ------- Interface ------
// interface -> seperti cetak biru atau blueprint
interface IPerson {
    id: number,
    name: string,
    age: number,
    hobby?: string[] // optional chaining (artinya property tidak wajib diikutsertakan)
}

interface IAddress {
    street: string,
    zip_code: number
}

interface IDetailInformation {
    detail: IPerson,
    address: IAddress,
}

const paket1: IDetailInformation = {
    detail: {
        id: 123,
        name: 'Bambang',
        age: 40
    },
    address: {
        street: 'Jl. Merdeka, Jakarta Pusat',
        zip_code: 456
    }
}

// untuk mengambil detail informasi
// console.log('ambil info dari paket1 : ', paket1)

const person1: IPerson = {
    id: 1,
    name: 'Bob',
    age: 17,
}

const person2: IPerson = {
    id: 2,
    name: 'John',
    age: 22,
    hobby: ['sport', 'singing']
}

// untuk mengambil data dari person
// console.log('info dari person1 : ', person1)
// console.log('info dari person2 : ', person2)


// ---- Types ----
type Color = 'red' | 'blue' | 'green'
const favoriteColor: Color = 'blue'

type Coordinates = {
    x: number,
    y: number
}

const point: Coordinates = { x: 5, y: 10 }

// console.log('hasil dari favorite color : ', favoriteColor)
// console.log('hasil dari point : ', point)

type Vehicle = {
    brand: string,
    year: number
}

type Car = Vehicle & {
    seat: number
}

const car: Car = {
    brand: 'honda',
    year: 2015,
    seat: 6
}


// --- Properties & Methods

interface IWashingMachine {
    brand: string,
    loadCapacity: number,
    start: () => string,
    stop: () => string,
}

const washingMachine: IWashingMachine = {
    brand: 'LG',
    loadCapacity: 7,
    start() {
        return 'Washing started'
    },
    stop() {
        return 'Stopping machine ...'
    }
}

// console.log('menjalankan mesin cuci : ', washingMachine.start())
// console.log('sedang mencuci baju ... selesai')
// console.log('mematikan mesin cuci : ', washingMachine.stop())

// --- For in Loop ---
const fridge: any = {
    milk: 1,
    eggs: 12
}

for (const key in fridge) {
    // console.log(key) // -> untuk mengambil properties
    // console.log(fridge[key]) // -> untuk mengambil value
    // console.log(`${key} : ${fridge[key]}`) // -> untuk mengambil keseluruhan object
}

// --- Destructuring Assignment ---
const { username, age } = {
    username: 'Bob',
    age: 20
}

// console.log('username : ', username)
// console.log('age : ', age)
// console.log(' ---------------------- ')

interface IAnimal {
    species: string,
    nickname: string,
    animalAge: number
}

const { species, nickname, animalAge }: IAnimal = {
    species: 'mamalia',
    nickname: 'elephant',
    animalAge: 10
}

// console.log('species : ', species)
// console.log('nickname : ', nickname)
// console.log('animal age : ', animalAge)

// --- Spread Operator ---
const basicInfo = { name: 'Tom' }
const fullInfo = {
    ...basicInfo,
    age: 35
}

fullInfo.name = 'test'

// console.log('basic info : ', basicInfo)

const a = {
    a: 1
}

const b = {
    b: 2
}

const merged = { ...a, ...b }

// console.log(a)
// console.log(b)
// console.log(merged)

// --- Class ---
class BankAccount {
    balance: number = 0
    deposit(amount: number) {
        this.balance += amount
    }
    withdraw(amount: number) {
        this.balance -= amount
    }
}

const myBankAccount = new BankAccount()

// console.log('saldo saat ini : ', myBankAccount.balance)
// console.log('menyimpan uang ...')
// myBankAccount.deposit(50000)
// console.log('saldo setelah deposit : ', myBankAccount.balance)
// console.log('tarik tunai uang ...')
// myBankAccount.withdraw(25000)
// console.log('saldo setelah ditarik tunai : ', myBankAccount.balance)

class Light {
    isOn: boolean = false
    toggle() {
        this.isOn = !this.isOn
    }
}

const light = new Light()
// light.toggle()
// console.log('kondisi lampu : ', light.isOn)
// light.toggle()
// console.log('kondisi lampu : ', light.isOn)


// --- Constructor ---

class Laptop {
    brand: string;
    ram: number;

    constructor(brand: string, ram: number) {
        this.brand = brand;
        this.ram = ram;
    }

    getDisplay() {
        return {
            brand: this.brand,
            ram: this.ram
        }
    }
}

const laptop1 = new Laptop('Apple Macbook Pro', 16)
const laptop2 = new Laptop('Asus Vivobook', 8)
console.log('info laptop yang sedang diinputkan : ', laptop1.getDisplay())
console.log('info laptop yang sedang diinputkan : ', laptop2.getDisplay())


