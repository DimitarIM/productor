export type Product = {
    id?: number,
    name: string,
    price: number,
    image: string,
    category: string,
    createdAt?: string,
}

export type Category = {
    name: string,
    products?: Product[],
}

export type User = {

}