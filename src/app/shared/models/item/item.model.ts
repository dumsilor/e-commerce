export class Item {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
    imageUrl: string;
    constructor(id: number, name: string, price: number, description: string, category: string, stock: number, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.category = category;
        this.imageUrl = imageUrl;
    }
}