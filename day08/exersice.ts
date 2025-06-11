// exercise 1

interface Student {
    name: string,
    email: string,
    age: Date,
    score: number
}

interface StatResult {
    highest: number,
    lowest: number,
    average: number
}

interface StudentStatsResult {
    score: StatResult,
    age: StatResult
}

class StudentStatsCalculator {
    private student: Student[]

    constructor(student: Student[]) {
        this.student = student
    }

    private calculateAge(birthDate: Date) {
        const today = new Date()
        const actualBirthDate = new Date(birthDate)


        const age = today.getFullYear() - actualBirthDate.getFullYear()
        const hasHadBirthdayThisYear = today.getMonth() > actualBirthDate.getMonth() ||
            (today.getMonth() === actualBirthDate.getMonth() && today.getDate() >= actualBirthDate.getDate())
        return hasHadBirthdayThisYear ? age : age - 1
    }

    private calculateStats(values: number[]) {
        const highest = Math.max(...values)
        const lowest = Math.min(...values)

        const average = values.reduce((acc, val) => acc + val, 0) / values.length

        return {
            highest, lowest, average: parseFloat(average.toFixed(2))
        }
    }

    public getStats() {
        const scores = this.student.map((student) => student.score)
        const ages: any = this.student.map((student) => this.calculateAge(student.age))

        return {
            score: this.calculateStats(scores),
            age: this.calculateStats(ages)
        }
    }

}

const listStudent: Student[] = [
    {
        name: 'Alice',
        email: 'alice@example.com',
        age: new Date('2002-06-10'),
        score: 88
    },
    {
        name: 'Bob',
        email: 'bob@example.com',
        age: new Date('2001-07-08'),
        score: 92
    },
    {
        name: 'Charlie',
        email: 'charlie@example.com',
        age: new Date('2001-05-10'),
        score: 75
    }
]

// const calculator = new StudentStatsCalculator(listStudent)
// console.log(calculator.getStats())

// exercise 2

// data_transaction -> snake case
// dataTransaction -> camel case
// DataTransaction -> pascal case

interface IProduct {
    name: string,
    price: number
}

interface ICartItem {
    product: Product,
    quantity: number
}

class Product implements IProduct {
    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
}

class Transaction {
    private cart: ICartItem[] = []

    // tambah produk ke keranjang
    public addToCart(product: Product, quantity: number) {
        const existingItem = this.cart.find((item) => item.product.name === product.name)
        if (existingItem) {
            existingItem.quantity += quantity
        } else {
            this.cart.push({ product, quantity })
        }
    }

    // show total
    public showTotal() {
        return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
    }

    // checkout dan kembalikan detail dari transaksi
    public checkout() {
        const total = this.showTotal()
        const items = [...this.cart]

        this.cart = []
        return { items, total }
    }
}

const product1 = new Product('Laptop', 1500)
const product2 = new Product('Mouse', 50)
const product3 = new Product('Keyboard', 100)

const transaction = new Transaction()

transaction.addToCart(product1, 1)
transaction.addToCart(product2, 2)
transaction.addToCart(product3, 1)

console.log("Current Total : $", transaction.showTotal())

const result = transaction.checkout()

console.log("Transaction Summary :")
result.items.forEach((item) => {
    console.log(`${item.product.name} x ${item.quantity} = $ ${item.product.price * item.quantity}`)
})
console.log("Total: $ ", result.total)