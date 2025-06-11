// exersice 1

interface student {
    name: string,
    email: string,
    age: Date,
    score: number
}

interface statResult {
    highest: number,
    lowest: number,
    average: number
}

interface studentCalculator {
    score: statResult,
    age: statResult
}

class studentStatCalculator {
    private student =
}


//exersice 2

//data_transaction -> snake case
//dataTransaction -> camel case
//DataTransaction -> pascal case


interface IProduct {
    name: string,
    price: number
}



interface ICartitem {
    product: string
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
    private cart: ICartitem[] = []

    //tambah produk ke keranjang
    public addToCart(product: Product, quantity: number) {
        const existingItem = this.cart.find((item) => item.product.name === product.name)
        if ()
    }
}